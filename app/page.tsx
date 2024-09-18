"use client";
import QuestionBox from "./questionBox/page";
import TextBox from "./textBox/page";
import useApi from "./hooks/useApi";
import KirbyAnimation from "./animation/page";
const Home: React.FC = () => {
  const { messages, sendMessage } = useApi();
  const filteredMessages = messages.filter(
    (message) => message.role !== "system"
  );

  function handleSend(input: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="bg-[url('/gptbg.png')] min-h-screen  bg-cover flex flex-row justify-around overflow-hidden">
      <KirbyAnimation />
      <div className="relative top-[6vw] w-[36vw] h-[40vw] right-[3vw] bg-white bg-opacity-40 rounded-[50px] p-[0.8vw]">
        <TextBox conversation={filteredMessages} />{" "}
        <div className="relative top-[-1.5vw]">
        <QuestionBox onSend={sendMessage} />
    </div>  </div>
    </div>
  );
};

export default Home;
