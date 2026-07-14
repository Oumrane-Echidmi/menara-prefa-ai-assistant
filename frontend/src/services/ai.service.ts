const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
const API_URL = `${API_BASE}/api/chat`;

export interface ChatResponse {
    response: string;
}

export const sendMessageToAi = async (message: string): Promise<string> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    });

    if (!response.ok) {
        const status = response.status;
        const statusText = response.statusText || 'Unknown error';
        throw new Error(
            `Erreur serveur (${status}): ${statusText}. Vérifiez que le backend est démarré.`
        );
    }

    const data: unknown = await response.json();

    if (
        typeof data !== 'object' ||
        data === null ||
        !('response' in data) ||
        typeof (data as ChatResponse).response !== 'string'
    ) {
        throw new Error('Réponse invalide du serveur. Format inattendu.');
    }

    return (data as ChatResponse).response;
};
