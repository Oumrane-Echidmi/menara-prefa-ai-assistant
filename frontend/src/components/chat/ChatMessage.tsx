import React from 'react';

interface ChatMessageProps {
    text: string;
    isUser: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ text, isUser }) => {
    return (
        <div className={`chat-message ${isUser ? 'user' : 'ai'}`}>
            <div className="message-bubble">
                {text}
            </div>
        </div>
    );
};

export default ChatMessage;
