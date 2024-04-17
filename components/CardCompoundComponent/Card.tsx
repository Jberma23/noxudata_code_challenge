import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";

type CardProps = {
  children: React.ReactNode;
  classes?: string;
};
const Card = ({ children, classes }: CardProps) => {
  return <div className={classes}>{children}</div>;
};
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
export default Card;
