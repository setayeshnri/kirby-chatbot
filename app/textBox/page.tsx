import { useEffect, useRef } from "react";
interface TextBoxProps {
  conversation: { role: string; content: string | null }[];
}
const TextBox: React.FC<TextBoxProps> = ({ conversation }) => {
  const messageRef = useRef<null | HTMLDivElement>(null);
  const scrollBottom = () => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollBottom();
  }, [conversation]);
  return (
    <div className="message overflow-y-auto h-[32vw] mt-[0.4vw]" >
      {conversation.map((msg, index) => (
        <p
          key={index}
          className={
            msg.role === "user"
              ? "bg-white p-3 rounded-3xl mt-2 text-[1.3vw]"
              : "bg-gray-200 p-3 rounded-3xl mt-2 text-[1.3vw]"
          }
        >
          {msg.role === "user" ? "you: " : "kirby: "}
          {msg.content}
          <div ref={messageRef} ></div>
        </p>
      ))}
    </div>
  );
};

export default TextBox;
