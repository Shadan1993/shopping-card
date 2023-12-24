import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Card, Button, Form, Col, Row } from "react-bootstrap";
import { BsFillFilePlusFill, BsFillFileMinusFill } from "react-icons/bs";

interface ProdactItemProps {
  id: string;
  title: string;
  price: number;
  image: string;
}
const ProdactItem = ({ id, title, price, image }: ProdactItemProps) => {
  const cart = useContext(CartContext);
  const prodactQuantitiy = parseInt(cart?.getProductQuantity(id) || "0");

  return (
    <Card className="mt-5 card-bg">
      <Card.Body>
        <Card.Img
          variant="top"
          src={image}
          height={200}
          style={{ objectFit: "cover" }}
        />
        <Card.Title style={{ textAlign: "right" }} className="text-light pt-4">
          {title}
        </Card.Title>
        <Card.Text
          style={{ textAlign: "right" }}
          className="text-light"
          dir="rtl"
        >
          {price} تومان
        </Card.Text>
        {prodactQuantitiy > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column={true} sm="6" className="text-white">
                تعداد: {prodactQuantitiy}
              </Form.Label>
              <Col sm="6">
                <Button
                  onClick={() => cart?.addItemToCart(id)}
                  size="sm"
                  className="mx-2 text-white"
                  variant="btn btn-outline-secondary"
                >
                  <BsFillFilePlusFill
                    size={20}
                    className="text-white bg-transparent"
                  />
                </Button>
                <Button
                  onClick={() => cart?.removeItemFromCart(id)}
                  size="sm"
                  className="mx-2 text-white"
                  variant="btn btn-outline-secondary"
                >
                  <BsFillFileMinusFill
                    size={20}
                    className="text-white bg-transparent"
                  />
                </Button>
              </Col>
            </Form>
            <Button
              onClick={() => cart?.deleteFromCart(id)}
              className="my-4"
              variant="btn btn-light"
            >
              حذف از سبد خرید
            </Button>
          </>
        ) : (
          <Button
            onClick={() => cart?.addItemToCart(id)}
            variant="btn btn-outline-secondary"
            className="text-wiht"
          >
            افزودن به سبد خرید
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProdactItem;
