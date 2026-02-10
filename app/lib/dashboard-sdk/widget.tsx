import { createRoot } from 'react-dom/client';
import { Dashboard } from './components/Dashboard';

// Define the global function for the user to call
(window as any).renderDashboard = (elementId: string, config: any = {}) => {
    const container = document.getElementById(elementId);
    if (!container) {
        console.error(`Dashboard SDK: Element with id '${elementId}' not found.`);
        return;
    }

    const root = createRoot(container);
    root.render(<Dashboard initialSpecs={config.specs} initialFilters={config.filters} apiKey={config.apiKey} />);
};

console.log("Dashboard SDK Loaded. Use window.renderDashboard(elementId, config) to initialize.");
