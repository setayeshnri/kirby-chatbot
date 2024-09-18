"use client";
import arrowUp from '@/public/arrow-up.svg'
import React, { useState, KeyboardEvent } from "react";
import Image from 'next/image';
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
    <div className=" bg-white rounded-full w-[31vw] flex flex-row justify-between p-[0.3vw] mt-[2.6vw] max-lg:w-[65vw] max-lg:h-[7vw] max-lg:m-auto">
      <input
        className="w-[24vw] relative z-10 rounded-full left-[1vw] focus:outline-none text-[1.5vw] max-lg:text-[3.3vw]"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Message Kirby..."
      />
      <button
        className="bg-blue-400 rounded-full h-[4vw] w-[4vw] z-20 max-lg:w-[6vw] max-lg:h-[6vw] "
        onClick={handleSend}
      >
        <Image
          className="m-auto w-[2.1vw] max-lg:w-[3vw]"
          src={arrowUp}
          alt="arrow up"
        />
      </button>
    </div>
  );
};

export default QuestionBox;
