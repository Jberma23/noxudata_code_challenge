import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "../Button/Button";
import { ChatBar } from "../ChatBar/ChatBar";
import { PageLayoutFooter } from "../PageLayout/PageLayout";

export type DashboardFooterProps = {};
export const callToActions = [
  "Suggest question 1",
  "Suggest question 2",
  "Suggest question 3",
];
export const DashboardFooter: React.FC<DashboardFooterProps> = () => {
  const onActionCicked = (actionString: string) => {
    return () => {
      console.log(`${actionString} clicked`);
    };
  };
  return (
    <PageLayoutFooter>
      <div className="flex gap-4 pt-4">
        {callToActions.map((actionText, index) => (
          <Button
            key={`footer-cta-${index}`}
            clickHandler={onActionCicked(actionText)}
          >
            {actionText}
          </Button>
        ))}
      </div>
      <ChatBar
        selectionTypeIcon={
          <ChatBubbleOvalLeftIcon className="h-5 w-5" aria-hidden="true" />
        }
        selectButtonIcon={
          <ChevronUpDownIcon className="h-4 w-4" aria-hidden="true" />
        }
        selectButtonText="Chat"
        actionButtonText="End Chat"
      />
    </PageLayoutFooter>
  );
};
