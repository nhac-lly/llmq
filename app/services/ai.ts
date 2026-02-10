
export interface ChatMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

const PERPLEXITY_API_URL = 'https://api.perplexity.ai/chat/completions';

export async function sendChatRequest(apiKey: string, messages: ChatMessage[]) {
    if (!apiKey) throw new Error("API Key is missing");

    try {
        const response = await fetch(PERPLEXITY_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'sonar', // Standard Perplexity model (formerly sonar-small/medium)
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
