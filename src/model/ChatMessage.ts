interface ChatMessage {
    role: 'user' | 'system' | 'assistant';
    message: string;
}

export default ChatMessage;