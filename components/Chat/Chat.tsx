"use client";
import { Button } from "../Button/Button";
import { AirplaneIcon } from "../Icons/AirplaneIcon";
import { Input } from "../Input/Input";
import { useEffect, useState } from "react";
import { socket } from "../../app/socket";
import { ChatBox } from "../ChatBox/ChatBox";

export type ChatProps = {
  selectionTypeIcon: React.ReactNode;
  selectButtonIcon: React.ReactNode;
  selectButtonText: string;
  actionButtonText: string;
};

export const Chat: React.FC<ChatProps> = ({
  selectionTypeIcon,
  selectButtonIcon,
  selectButtonText,
  actionButtonText,
}) => {
  const [chatText, setChatText] = useState("");
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [transport, setTransport] = useState("N/A");
  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }
    socket.on(
      "newIncomingChat",
      (data: { user: string; message: string; date: string }) => {
        const div1 = document.createElement("div");
        const pTag = document.createElement("p");
        const span1 = document.createElement("span");
        span1.className = "flex justify-between";
        const span2 = document.createElement("span");
        span2.className = "text-xs text-slate-400";
        const span3 = document.createElement("span");
        span3.className = "text-xs text-slate-400";
        span2.innerText = data.user;
        span3.innerText = new Date(data.date).toLocaleString();
        pTag.innerText = data.message;
        div1.appendChild(pTag);
        div1.appendChild(span1);
        span1.appendChild(span2);
        span1.appendChild(span3);
        const chatBox = document.getElementById("chat-box");
        chatBox?.appendChild(div1);
      }
    );

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);
      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  return (
    <div className="py-4">
      <ChatBox />
      <span className="w-full h-9 isolate inline-flex  text-black mt-4">
        <Button
          styleVariant={"chatButton"}
          clickHandler={() => {
            console.log("Chat Button Clicked!");
          }}
        >
          {selectionTypeIcon}
          <span className="inline pl-2 pr-2">{selectButtonText}</span>
          {selectButtonIcon}
        </Button>
        <Input
          icon={<AirplaneIcon />}
          id="input"
          name="input"
          type="text"
          ariaDescribedBy="Start a new chat"
          placeholder="Start a new chat"
          inputStyleVariants="primary"
          wrapperStyleVariants="primary"
          value={chatText}
          onChange={(text) => {
            setChatText(text);
          }}
          clickableIcon={true}
          iconClickHandler={() => {
            socket.emit("newChat", {
              user: "user-1",
              message: chatText,
              date: new Date(),
            });
            setChatText("");
          }}
        />
        <Button
          styleVariant="send"
          clickHandler={() => {
            socket.disconnect();
          }}
        >
          {actionButtonText}
        </Button>
      </span>
    </div>
  );
};
