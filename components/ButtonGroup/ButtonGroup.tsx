export type ButtonGroupProps = {
  children: React.ReactNode;
};

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children }) => {
  return <div className="relative inline-flex items-center">{children}</div>;
};
