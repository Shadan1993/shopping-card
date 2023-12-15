import { Card, Button } from "react-bootstrap";
interface ProdactItemProps {
  id: number;
  title: string;
  price: number;
  image: string;
}
const ProdactItem = ({ id, title, price, image }: ProdactItemProps) => {
  return (
    <Card className="mt-5 card-bg">
      <Card.Body>
        <Card.Img
          variant="top"
          src={image}
          height={200}
          style={{ objectFit: "cover" }}
        />
        <Card.Title align="right" className="text-light pt-4">
          {title}
        </Card.Title>
        <Card.Text align="right" className="text-light">
          {price}
        </Card.Text>
        <Button variant="btn btn-outline-secondary" className="text-wiht">
          افزودن به سبد خرید
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProdactItem;
