import { Col, Row } from "react-bootstrap";
import ProdactItem from "../components/ProdactItem";
import { ProductList } from "../data/Item";
const Shop = () => {
  return (
    <>
      <Row xs={1} md={4} className="g-4">
        {ProductList.map((item) => (
          <Col key={item.id} align="center">
            <ProdactItem
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Shop;
