import type { ChatMessage } from "../types";

const PERPLEXITY_API_URL = 'https://api.perplexity.ai/chat/completions';

interface ChatConfig {
    apiKey?: string;
    endpoint?: string;
}

export async function sendChatRequest(config: ChatConfig, messages: ChatMessage[]) {
    // 1. Prefer Endpoint (Proxy) if available
    if (config.endpoint) {
        try {
            const response = await fetch(config.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-llmq-sdk-token': 'LLMQ_ACCESS_GRANTED' // "Encrypted" access token
                },
                body: JSON.stringify({ messages })
            });

            if (!response.ok) {
                const err = await response.text();
                throw new Error(`Proxy Error: ${response.status} - ${err}`);
            }

            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error("Chat Proxy Request Failed:", error);
            throw error;
        }
    }

    // 2. Fallback to Direct API Key
    if (!config.apiKey) throw new Error("Configuration Error: Missing API Key or Endpoint");

    try {
        const response = await fetch(PERPLEXITY_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${config.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'sonar',
                messages: messages,
                temperature: 0.2,
                top_p: 0.9,
                return_related_questions: false,
                stream: false
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API Error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error("Chat Request Failed:", error);
        throw error;
    }
}
