import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};
const Card = ({ children, className }: CardProps) => {
  return <div className={className}>{children}</div>;
};
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
export default Card;
