import React, { useState } from 'react';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    const useInput = (initialValue: string) => {
        const [value, setValue] = useState(initialValue);
        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
        return { value, onChange, reset: () => setValue('') };
    };

    const messageInput = useInput('');

    return (
        <div className="flex flex-col space-y-2">
            <input
                type="text"
                value={messageInput.value}
                onChange={messageInput.onChange}
                placeholder="Create a ..."
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="button"
                onClick={handleSend}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
                Send
            </button>
        </div>
    );
};

export default ChatInput;