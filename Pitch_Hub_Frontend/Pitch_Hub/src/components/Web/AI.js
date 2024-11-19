import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [userMessage, setUserMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);

    const sendMessage = async () => {
        if (!userMessage) return;

        try {
            const response = await axios.post('http://127.0.0.1:8000/AI/chatbot/', { message: userMessage });
            setChatHistory((prevChatHistory) => [
                ...prevChatHistory, 
                { user: userMessage, bot: response.data.answer }
            ]);
            setUserMessage("");
        } catch (error) {
            console.error("Error:", error);
            setChatHistory((prevChatHistory) => [
                ...prevChatHistory, 
                { user: userMessage, bot: "Error: Unable to get response." }
            ]);
            setUserMessage("");
        }
    };

    return (
        <div>
            <h3>Chatbot</h3>
            <div>
                {chatHistory.map((chat, index) => (
                    <div key={index}>
                        <p><strong>User:</strong> {chat.user}</p>
                        <p><strong>Bot:</strong> {chat.bot}</p>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Ask something..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chatbot;
