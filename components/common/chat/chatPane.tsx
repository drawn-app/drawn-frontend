"use client";

import { useEffect, useRef, useState } from "react";
import { ChatInput } from "../../ui/chat/chat-input";
import { Button } from "../../ui/button";
import { BotIcon, CornerDownLeft, DeleteIcon, Icon, Trash2 } from "lucide-react";
import { ChatMessageList } from "../../ui/chat/chat-message-list";
import { ChatBubble, ChatBubbleAction, ChatBubbleAvatar, ChatBubbleMessage } from "../../ui/chat/chat-bubble";

export default function ChatPane() {

    const [messages, setMessages] = useState<string[]>([]);

    const [inputMessage, setInputMessage] = useState<string>("");

    const messagesRef = useRef<HTMLDivElement>(null);

    async function onSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); 
        setMessages([...messages, inputMessage]);
        setInputMessage("");
    };
    
    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full grow">

            </div>
            {
                (messages.length === 0) && (
                    <div className="flex items-center justify-center h-full text-gray-500">
                        Start chating here!
                    </div>
                )
            }
            {
                (messages.length > 0) && (
                    <ChatMessageList ref={messagesRef}>
                        {
                            messages.map((message, index) => (
                                <ChatBubble
                                    key={index}
                                    variant={index % 2 == 0 ? "sent" : "received"}
                                //   variant={message.role == "user" ? "sent" : "received"}
                                
                                >

                                    <ChatBubbleAvatar
                                      src=""
                                      fallback={index % 2 == 0 ? "👨🏽" : "🤖"}
                                    />
                                    <ChatBubbleMessage>
                                        {message}
                                        {index % 2 == 0 && (
                                            <div className="flex items-center mt-1.5 gap-1">
                                                <ChatBubbleAction
                                                    variant="outline"
                                                    className="size-6"
                                                    icon={<Trash2 className="size-4" />}
                                                    onClick={() =>
                                                      alert("Hi")
                                                    }
                                                />
                                            </div>
                                        )}
                                    </ChatBubbleMessage>
                                </ChatBubble>
                            ))
                        }
                    </ChatMessageList>
                )
            }
            <div className="w-full h-16 bg-secondary">
                <form onSubmit={onSubmit} className="w-full px-2 py-2 flex gap-3 items-center">
                    <ChatInput
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Type your message here..."
                        className="max-h-12 min-h-12 h-12 px-2 py-2 resize-none rounded-lg bg-background shadow-none"
                    />
                    <Button
                        disabled={!inputMessage}
                        type="submit"
                        size="sm"
                        className="ml-auto gap-1.5"
                    >
                        Send Message
                        <CornerDownLeft className="size-3.5" />
                    </Button>
                </form>
            </div>
        </div>
    )
}