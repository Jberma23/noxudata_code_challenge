import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import {
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { AirplaneIcon } from "../Icons/AirplaneIcon";

export type FooterBoxProps = {};

export const FooterBox: React.FC<FooterBoxProps> = ({}) => {
  const options = [{ id: 1, name: "Chat", icon: <ChatBubbleOvalLeftIcon /> }];
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="bg-white w-[1100px] h-[144px] pl-[150px]">
      <div className="flex gap-4 pt-4">
        <button
          type="button"
          onClick={() => {
            console.log("Suggest question 1 Clicked!");
          }}
          className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
        >
          Suggest question 1
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("Suggest question 2 Clicked!");
          }}
          className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
        >
          Suggest question 2
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("Suggest question 3 Clicked!");
          }}
          className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
        >
          Suggest question 3
        </button>
      </div>{" "}
      <div className="py-4">
        <span className="w-[296px] h-[36px] isolate inline-flex rounded-md shadow-sm">
          <button
            className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-slate-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 font-semibold"
            onClick={() => {
              console.log("Chat Button Clicked!");
            }}
          >
            <ChatBubbleOvalLeftIcon className="h-5 w-5" aria-hidden="true" />
            <span className="inline pl-2 pr-2"> Chat</span>
            <ChevronUpDownIcon className="h-4 w-4" aria-hidden="true" />
          </button>
          {/* <PaperAirplaneIcon className="h-5 w-5" aria-hidden="true" /> */}
          <span className="min-w-[574px] relative -ml-px inline-flex items-center rounded-r-md bg-white  py-2 text-slate-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 font-semibold pr-3">
            <input
              type="text"
              name="input"
              id="input"
              className="block w-full max-h-[36px] border-t-1 border-t-slate-300 border-b-1 border-b-slate-300 border-l-1 border-l-slate-300 border-r-0 placeholder:text-slate-400 text-base font-normal"
              placeholder="Start a new chat"
              aria-describedby="Start a new chat"
            ></input>
            <AirplaneIcon />
          </span>
          <button
            type="button"
            onClick={() => {
              console.log("End Chat Clicked!");
            }}
            className="inline text-nowrap w-[94px] h-[40px] rounded-md bg-white px-3.5 ml-4 text-sm font-semibold text-[#DC2626] shadow-sm ring-1 ring-inset ring-[#DC2626] hover:bg-slate-50"
          >
            End Chat
          </button>
        </span>
      </div>
    </div>
  );
};
