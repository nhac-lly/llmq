# Specification: Universal Multi-Chart Orchestrator (UMCO)

## 1. Goal

To create a "Headless" controller that synchronizes a collection of charts with a URL.

* **Universal:** Works in React, Vue, Svelte, or Vanilla JS.
* **Scalable:** Manages  number of charts in one URL string.
* **Adapter-Based:** Keeps visualization-specific logic (Billboard.js, Chart.js, etc.) separated from the state logic.

---

## 2. URL Schema & Data Model

To keep the URL length manageable, we use a single key `c` (for "charts") containing a JSON-stringified and URI-encoded array of "Chart Specs."

### The "Chart Spec" (Universal Schema)

```typescript
interface ChartSpec {
  t: 'line' | 'bar' | 'pie' | 'area'; // Type
  m: string[];                        // Metrics (column IDs)
  s?: boolean;                        // Stacked toggle
  ti?: string;                        // Title
}

// Example URL: ?c=[{"t":"bar","m":["sales"]},{"t":"line","m":["users","leads"]}]

```

---

## 3. The Core Controller (`UMCO.js`)

This class handles the browser history, URL parsing, and event broadcasting.

```javascript
/**
 * UMCO: Framework-Agnostic Multi-Chart Controller
 */
class MultiChartOrchestrator {
  constructor(queryKey = 'c') {
    this.queryKey = queryKey;
    this.subscribers = new Set();

    // Sync state when browser Back/Forward is pressed
    window.addEventListener('popstate', () => this._broadcast());
  }

  /**
   * Internal: Parse URL to JS Array
   */
  _getState() {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get(this.queryKey);
    try {
      return raw ? JSON.parse(decodeURIComponent(raw)) : [];
    } catch (e) {
      console.error("UMCO: Parse Error", e);
      return [];
    }
  }

  /**
   * Internal: Push state to URL and notify listeners
   */
  _push(newState) {
    const params = new URLSearchParams(window.location.search);
    params.set(this.queryKey, JSON.stringify(newState));
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({ umco: true }, '', newUrl);
    this._broadcast();
  }

  /**
   * API: Update a specific chart's config by index
   */
  updateChart(index, patch) {
    const state = this._getState();
    if (!state[index]) state[index] = {}; 
    state[index] = { ...state[index], ...patch };
    this._push(state);
  }

  /**
   * API: Add a new chart to the dashboard
   */
  addChart(config = { t: 'line', m: [] }) {
    const state = this._getState();
    state.push(config);
    this._push(state);
  }

  /**
   * API: Listen for changes
   */
  subscribe(callback) {
    this.subscribers.add(callback);
    callback(this._getState()); // Immediate first run
    return () => this.subscribers.delete(callback);
  }

  _broadcast() {
    const state = this._getState();
    this.subscribers.forEach(cb => cb(state));
  }
}

export const orchestrator = new MultiChartOrchestrator();

```

---

## 4. Library Adapters (`adapters.js`)

Adapters are pure functions that translate the **Universal Chart Spec** into library-specific objects.

```javascript
/**
 * Adapter for Billboard.js
 */
export const billboardAdapter = (spec, rawData) => {
  if (!spec) return null;
  
  // Transform raw data based on 'm' (metrics) array
  const filteredColumns = rawData.filter(col => spec.m.includes(col[0]));

  return {
    data: {
      columns: filteredColumns,
      type: spec.t || 'line',
      groups: spec.s ? [spec.m] : []
    },
    title: { text: spec.ti || "" }
  };
};

/**
 * Adapter for Chart.js
 */
export const chartJsAdapter = (spec, rawData) => {
  return {
    type: spec.t,
    data: {
      datasets: spec.m.map(metricId => ({
        label: metricId,
        data: rawData.find(d => d.id === metricId).values
      }))
    }
  };
};

```

---

## 5. Sample Implementation (Vanilla JS)

This demonstrates how a single controller manages two different libraries simultaneously.

```javascript
import { orchestrator } from './UMCO.js';
import { billboardAdapter, chartJsAdapter } from './adapters.js';

// 1. Initialize Billboard.js (Chart 0)
const bbChart = bb.generate({ bindto: "#chart-0", data: { columns: [] } });

// 2. Initialize Chart.js (Chart 1)
const ctx = document.getElementById('chart-1');
const cjsChart = new Chart(ctx, { type: 'line', data: { datasets: [] } });

// 3. Subscribe to the Orchestrator
orchestrator.subscribe((allCharts) => {
  // Update Chart 0 via Billboard Adapter
  if (allCharts[0]) {
    const bbConfig = billboardAdapter(allCharts[0], globalData);
    bbChart.load(bbConfig.data);
  }

  // Update Chart 1 via Chart.js Adapter
  if (allCharts[1]) {
    const cjsConfig = chartJsAdapter(allCharts[1], globalData);
    cjsChart.config.type = cjsConfig.type;
    cjsChart.data = cjsConfig.data;
    cjsChart.update();
  }
});

// 4. Triggering a Change (e.g., from a UI dropdown)
// This updates ONLY chart 0 to a bar chart in the URL
document.getElementById('btn-make-bar').onclick = () => {
  orchestrator.updateChart(0, { t: 'bar' });
};

```

---

## 6. Summary for the Agent

* **To listen to the URL:** Use `orchestrator.subscribe(allCharts => { ... })`.
* **To change a chart:** Use `orchestrator.updateChart(index, { key: value })`.
* **To handle new libs:** Simply create a new `[lib]Adapter` function.
* **Data flow:** URL  Orchestrator  Adapter  Chart Instance.
