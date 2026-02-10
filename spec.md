# Specification: Universal Chart Orchestrator (UCO)

## 1. Overview

The **Universal Chart Orchestrator (UCO)** is a headless, framework-agnostic controller. It treats the **URL Search Parameters** as the single source of truth (SSOT). It manages state transitions and provides a pipeline for **Adapters** to translate that state into configurations for specific libraries like Billboard.js, Chart.js, or ECharts.

## 2. Core Principles

* **Framework Agnostic:** Written in Vanilla TypeScript/JavaScript. No dependency on React, Vue, or Svelte.
* **Zero-Refresh Sync:** Uses `history.pushState` to update parameters without reloading the page.
* **Pub/Sub Model:** Emits events when the URL changes so multiple charts can update independently.
* **Adapter Pattern:** The core logic never generates library-specific code; it only produces a "Universal State Object."

---

## 3. The Universal State Schema

Every adapter must expect this object as its primary input:

```typescript
interface UniversalChartState {
  viewType: 'line' | 'bar' | 'area' | 'pie'; // The visual representation
  metrics: string[];                         // Data keys to display (e.g., ['revenue', 'users'])
  timeRange: string;                         // e.g., '7d', '30d', 'all'
  isStacked: boolean;                        // Toggle for stacked layouts
  customParams: Record<string, string>;      // Catch-all for niche settings
}

```

---

## 4. Implementation: The Controller

```javascript
/**
 * UCO Controller: Handles URL <-> State synchronization
 */
class UniversalChartController {
  constructor(defaultState) {
    this.defaultState = defaultState;
    this.listeners = [];
    
    // Listen for browser back/forward buttons
    window.addEventListener('popstate', () => this._notify());
  }

  // Internal: Get current state from URL
  _getRawState() {
    const params = new URLSearchParams(window.location.search);
    return {
      viewType: params.get('view') || this.defaultState.viewType,
      metrics: params.get('metrics')?.split(',') || this.defaultState.metrics,
      timeRange: params.get('time') || this.defaultState.timeRange,
      isStacked: params.get('stacked') === 'true',
    };
  }

  // Update URL and notify all charts
  setParams(updates) {
    const current = new URLSearchParams(window.location.search);
    
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null) current.delete(key);
      else current.set(key, Array.isArray(value) ? value.join(',') : value);
    });

    const newUrl = `${window.location.pathname}?${current.toString()}`;
    window.history.pushState({}, '', newUrl);
    this._notify();
  }

  // Subscribe to changes
  subscribe(callback) {
    this.listeners.push(callback);
    // Initial trigger
    callback(this._getRawState());
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  }

  _notify() {
    const state = this._getRawState();
    this.listeners.forEach(callback => callback(state));
  }
}

```

---

## 5. Implementation: The Adapters

Adapters are pure functions: `(State, RawData) => LibraryConfig`.

### Billboard.js Adapter

```javascript
const billboardAdapter = (state, data) => {
  return {
    data: {
      columns: data.filter(d => state.metrics.includes(d[0])),
      type: state.viewType === 'area' ? 'area-spline' : state.viewType,
      groups: state.isStacked ? [state.metrics] : []
    },
    axis: {
      x: { type: 'category' }
    }
  };
};

```

---

## 6. Integration Guide for Agents

### To Add a New Chart:

1. **Initialize** the `UniversalChartController` at the top level of the application.
2. **Create an Adapter** for the target library (e.g., `chartjsAdapter`).
3. **Subscribe** the chart instance to the controller:
```javascript
const controller = new UniversalChartController({ viewType: 'line', metrics: ['sales'] });
const myChart = bb.generate({ bindto: "#chart", data: { columns: [] } });

controller.subscribe((state) => {
  const newConfig = billboardAdapter(state, globalData);
  myChart.load(newConfig.data); // Dynamic update
});

```



### To Update State from UI:

1. Call `controller.setParams({ view: 'bar' })`.
2. The URL updates to `?view=bar`.
3. All subscribed charts (Billboard, Chart.js, etc.) automatically re-render via their respective adapters.

---

## 7. Next Steps for Implementation

* [ ] Add **Zod** or simple validation to the `_getRawState` method to ensure URL tampering doesn't break the charts.
* [ ] Implement a "Debounce" on the `setParams` method to prevent URL thrashing during rapid UI changes.
* [ ] Create a React Hook wrapper (`useUCO`) that internally uses the `subscribe` method for React projects.

**Would you like me to generate a specific "Transformer" script to handle the data reshaping (e.g., JSON to Columnar format) for these adapters?**