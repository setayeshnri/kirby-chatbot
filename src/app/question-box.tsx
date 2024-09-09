"use client";

import React, { useState, KeyboardEvent } from "react";

interface QuestionBoxProps {
  onSend: (input: string) => void;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Message Kirby..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default QuestionBox;
