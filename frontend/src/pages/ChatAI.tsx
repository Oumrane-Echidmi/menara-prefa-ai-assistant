import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/chat.css';
import ChatMessage from '../components/chat/ChatMessage';
import ChatInput from '../components/chat/ChatInput';
import { sendMessageToAi } from '../services/ai.service';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'ai';
}

const ChatAI: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const chatMessagesRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSendMessage = async (text: string) => {
        const messageText = text.trim();
        if (!messageText) return;

        // Add user message
        const userMsg: Message = { id: Date.now(), text: messageText, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setIsLoading(true);
        setError(null);

        try {
            const responseText = await sendMessageToAi(messageText);
            const aiMsg: Message = { id: Date.now() + 1, text: responseText, sender: 'ai' };
            setMessages(prev => [...prev, aiMsg]);

        } catch (err: any) {
            console.error("Erreur lors de l'envoi du message:", err);
            const errorMsg: Message = { 
                id: Date.now() + 1, 
                text: "Désolé, une erreur est survenue. Veuillez réessayer plus tard.", 
                sender: 'ai' 
            };
            setMessages(prev => [...prev, errorMsg]);
            setError("Échec de la communication avec le backend.");
            setTimeout(() => setError(null), 5000);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h4>
                    <i className="bi bi-robot me-2"></i>
                    Assistant IA Ménara Préfa
                </h4>
                <div className="status">
                    <span className="status-dot"></span>
                    En ligne
                </div>
            </div>

            {error && (
                <div className="error-alert" style={{ display: 'block' }}>
                    <strong>Erreur :</strong> <span>{error}</span>
                </div>
            )}

            <div className="chat-messages" id="chatMessages" ref={chatMessagesRef}>
                {messages.length === 0 && (
                    <div className="welcome-message">
                        <i className="bi bi-chat-dots"></i>
                        <h5>Bienvenue sur l'assistant IA de Ménara Préfa</h5>
                        <p>Posez-moi vos questions sur nos produits, services et expertises en matériaux de construction.</p>

                        <div className="suggestions">
                            <button className="suggestion-btn" onClick={() => handleSendMessage('Quels sont vos produits disponibles ?')}>
                                Quels produits proposez-vous ?
                            </button>
                            <button className="suggestion-btn" onClick={() => handleSendMessage('Parlez-moi des agglos à bancher')}>
                                Agglos à bancher
                            </button>
                            <button className="suggestion-btn" onClick={() => handleSendMessage('Où êtes-vous implantés ?')}>
                                Vos implantations
                            </button>
                            <button className="suggestion-btn" onClick={() => handleSendMessage('Comment demander un devis ?')}>
                                Demander un devis
                            </button>
                        </div>
                    </div>
                )}

                {messages.map((msg) => (
                    <ChatMessage key={msg.id} text={msg.text} isUser={msg.sender === 'user'} />
                ))}

                {isLoading && (
                    <div className="chat-message ai loading">
                        <div className="message-bubble">
                            <span className="spinner-grow spinner-grow-sm me-2" role="status" aria-hidden="true"></span>
                            Réflexion en cours...
                        </div>
                    </div>
                )}
            </div>

            <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
    );
};

export default ChatAI;
