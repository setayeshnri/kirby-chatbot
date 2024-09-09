import React from "react";

interface TextBoxProps {
  conversation: { role: string; content: string | null }[];
}
const TextBox: React.FC<TextBoxProps> = ({ conversation }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md max-h-80 overflow-y-auto">
      {conversation.map((msg, index) => (
        <p
          key={index}
          className={
            msg.role === "user"
              ? "text-right text-blue-500"
              : "text-left text-pink-500"
          }
        >
          {msg.role === "user" ? "you:" : "kirby:"}
          {msg.content}
        </p>
      ))}
    </div>
  );
};

export default TextBox;
