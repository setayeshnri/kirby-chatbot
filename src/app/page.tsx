"use client";
import React from "react";
import QuestionBox from "./question-box";
import TextBox from "./text-box";
import useApi from "./hooks/useApi";
const Home: React.FC = () => {
  const { messages, sendMessage } = useApi();
  const filteredMessages = messages.filter(
    (message) => message.role !== "system"
  );

  return (
    <>
      <QuestionBox onSend={sendMessage} />
      <TextBox conversation={filteredMessages} />
    </>
  );
};

export default Home;
