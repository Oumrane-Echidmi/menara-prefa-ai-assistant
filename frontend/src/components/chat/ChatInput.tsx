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

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="chat-input">
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Posez votre question..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                />
                <button onClick={handleSend} disabled={isLoading || !input.trim()}>
                    <i className="bi bi-send-fill"></i>
                </button>
            </div>
        </div>
    );
};

export default ChatInput;
