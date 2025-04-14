import ChatMessage from '@/model/ChatMessage';
import React from 'react';
import ChatInput from './chat-input';

interface ChatPaneProps {
    messages: ChatMessage[];
}

const ChatPane: React.FC<ChatPaneProps> = ({ messages }) => {
    const handleSendMessage = (message: string) => {}

    return (
        <section className="flex-1 flex flex-col">
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.length > 0 ? (
                messages.map((message, index) => (
                <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                    <div
                    className={`p-3 rounded-lg max-w-[70%] ${
                        message.role === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                    >
                    {message.message}
                    </div>
                </div>
                ))
            ) : (
                <p className="text-center text-gray-500">Select a chat to start messaging</p>
            )}
            </div>
            <div className="p-4 bg-gray-100 border-t">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
        </section>
    );
};

export default ChatPane;