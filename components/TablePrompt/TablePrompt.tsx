export type TablePromptProps = {
  icon: React.ReactNode;
  text: string;
};

export const TablePrompt: React.FC<TablePromptProps> = ({ icon, text }) => {
  return (
    <div className="py-4 flex items-center">
      {icon}
      <p className="text-slate-900 pl-4">{text}</p>
    </div>
  );
};
