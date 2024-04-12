import { InformationCircleIcon } from "@heroicons/react/24/outline";
export type NoticeProps = {
  noticeText: string;
};

export const Notice: React.FC<NoticeProps> = ({ noticeText }) => {
  return (
    <div className="w-full bg-slate-50 px-3 py-1.5 border-solid border-slate-300 border-t border-b">
      <span className="flex justify-between">
        <p className="font-semibold text-slate-600 flex items-center  h-6">
          <InformationCircleIcon
            className="h-8 w-8 inline pr-[6px]"
            strokeWidth={"2"}
          />
          {noticeText}
        </p>
        <button
          className="text-slate-300"
          onClick={() => {
            console.log("Dismiss Clicked!");
          }}
        >
          X
        </button>
      </span>
    </div>
  );
};
