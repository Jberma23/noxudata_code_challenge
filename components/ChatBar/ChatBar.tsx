import { Button } from "../Button/Button";
import { AirplaneIcon } from "../Icons/AirplaneIcon";
import { Input } from "../Input/Input";

export type ChatBarProps = {
  selectionTypeIcon: React.ReactNode;
  selectButtonIcon: React.ReactNode;
  selectButtonText: string;
  actionButtonText: string;
};

export const ChatBar: React.FC<ChatBarProps> = ({
  selectionTypeIcon,
  selectButtonIcon,
  selectButtonText,
  actionButtonText,
}) => {
  return (
    <div className="py-4">
      <span className="w-full h-9 isolate inline-flex rounded-md shadow-sm">
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
        />
        <Button
          styleVariant="send"
          clickHandler={() => {
            console.log("click");
          }}
        >
          {actionButtonText}
        </Button>
      </span>
    </div>
  );
};
