import React, { useState } from 'react';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
    isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim() && !isLoading) {
            onSendMessage(input);
            setInput('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="chat-input">
            <div className="input-group">
                <label htmlFor="chat-input-field" className="visually-hidden">
                    Votre message
                </label>
                <input
                    id="chat-input-field"
                    type="text"
                    placeholder="Posez votre question..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isLoading}
                    aria-label="Saisir un message pour l'assistant IA"
                />
                <button
                    id="chat-send-btn"
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    aria-label="Envoyer le message"
                >
                    <i className="bi bi-send-fill" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    );
};

export default ChatInput;
