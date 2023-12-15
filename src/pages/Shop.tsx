import { Col, Row } from "react-bootstrap";
import ProdactItem from "../components/ProdactItem";
import { ProdactList } from "../data/Item";
const Shop = () => {
  return (
    <>
      <Row xs={1} md={4} className="g-4">
        {ProdactList.map((item) => (
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
