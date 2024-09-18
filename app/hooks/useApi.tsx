import { useState } from "react";
import Groq from "groq-sdk";
import apiKey from "../api.json";
import { SYSTEM_PROMPT } from "./system-prompt";

type Message = {
  role: "user" | "system" | "assistant";
  content: string | null;
};

export default function useApi() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "system",
      content: SYSTEM_PROMPT,
    },
  ]);

  const groq = new Groq({
    dangerouslyAllowBrowser: true,
    apiKey: apiKey.apiKey,
  });

  const sendMessage = async (input: string) => {
    // setMessages((prev) => [...prev, { role: "user", content: `${input}` }]);
    const userMessage: Message = { role: "user", content: `${input}` };

    try {
      console.log("Request", messages);

      //@ts-ignore
      const response = await groq.chat.completions.create({
        //@ts-ignore
        messages: [...messages, userMessage],
        model: "llama3-8b-8192",
      });

      console.log("Response", response);

      const responseMessage = response.choices[0]?.message;

      setMessages((prev) => [...prev, userMessage, responseMessage]);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessages((prev) => [
          ...prev,
          userMessage,
          { role: "assistant", content: `Error: ${error.message}` },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          userMessage,
          { role: "assistant", content: `Error: An unexpected error occurred` },
        ]);
      }
    }
  };

  return { messages, sendMessage };
}
