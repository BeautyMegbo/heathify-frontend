import React, { useState } from 'react';
import { askAI } from '../../services/AIService';

function AIChatBot() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const aiResponse = await askAI(input);
        setResponse(aiResponse);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask AI a question" />
                <button type="submit">Ask</button>
            </form>
            {response && <div><h3>AI Response:</h3><p>{response}</p></div>}
        </div>
    );
}

export default AIChatBot;
