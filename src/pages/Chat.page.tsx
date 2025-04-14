import ChatPane from '@/components/Chat/chat-pane';
import ChatMessage from '@/model/ChatMessage';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export function ChatPage() {
    const { id } = useParams();
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            role: 'system',
            message: 'You are a helpful assistant.',
        },
        {
            role: 'user',
            message: `Hello! I am interested in learning more about the topic with ID: ${id}.`,
        },
        {
            role: 'assistant',
            message: `Sure! The topic with ID: ${id} is quite interesting. What would you like to know?`,
        },
    ]);

    return (
        <>
            <ChatPane messages={messages} />
        </>
    );
}
