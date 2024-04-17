import Card from "./Card";

export type CardCompoundComponentExampleProps = {};

export const CardCompoundComponentExample: React.FC<
  CardCompoundComponentExampleProps
> = ({}) => {
  return (
    <Card>
      <Card.Header>Header</Card.Header>
      <Card.Body>Body</Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card>
  );
};
