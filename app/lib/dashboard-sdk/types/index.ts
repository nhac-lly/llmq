
export interface ChartSpec {
    t: 'line' | 'bar' | 'area' | 'spline' | 'pie' | 'donut';
    m: string[];
    ti?: string;
    s?: boolean;
    f?: Record<string, any>;
}

export interface DataMap {
    [key: string]: any[];
}

export interface ChatMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}
