const API_URL = "http://localhost:8080/api/chat";

export interface ChatResponse {
    response: string;
}

export const sendMessageToAi = async (message: string): Promise<string> => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ChatResponse = await response.json();
        return data.response;
    } catch (error) {
        console.error("Error sending message to AI:", error);
        throw error;
    }
};
