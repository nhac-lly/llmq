
import { useEffect, useState } from 'react';
import { UniversalChartController, type ChartSpec } from '../lib/uco/UniversalChartController';
import { useLocation } from "react-router";

let globalController: UniversalChartController | null = null;

export const getController = () => {
    if (!globalController) {
        globalController = new UniversalChartController();
    }
    return globalController;
};

interface UCOActions {
    addChart: (config: ChartSpec) => void;
    updateChart: (index: number, patch: Partial<ChartSpec>) => void;
    removeChart: (index: number) => void;
}

export function useUCO(): [ChartSpec[], UCOActions] {
    const controller = getController();
    const [charts, setCharts] = useState<ChartSpec[]>(controller.getState());
    const location = useLocation();

    // Sync controller when URL changes (React Router navigation)
    useEffect(() => {
        controller.sync();
    }, [controller, location]);

    useEffect(() => {
        const unsubscribe = controller.subscribe((newCharts) => {
            setCharts(newCharts);
        });
        return unsubscribe;
    }, [controller]);

    const actions: UCOActions = {
        addChart: (config) => controller.addChart(config),
        updateChart: (index, patch) => controller.updateChart(index, patch),
        removeChart: (index) => controller.removeChart(index),
    };

    return [charts, actions];
}
