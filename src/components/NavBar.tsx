import { useState, useContext } from "react";
import {
  Navbar as NavBarBs,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import CartProdact from "./CartProdact";
const NavBar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const cart = useContext(CartContext);
  const prodactCount = cart?.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  async function checkout() {
    console.log(cart?.items);
    const response = await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cart?.items,
      }),
    });
    const data = await response.json();

    if (data.url) {
      window.location.assign(data.url);
    }
  }
  return (
    <>
      <NavBarBs className="border-bottom border-secondary">
        <NavBarBs.Collapse className="justify-content-end">
          <Button
            onClick={handleShow}
            variant="btn btn-outline-secondary"
            className=" text-white"
          >
            ({prodactCount})
            <BsCart className="mx-2" />
            سبد خرید
          </Button>
        </NavBarBs.Collapse>
      </NavBarBs>
      <Modal
        show={showModal}
        onHide={handleClose}
        contentClassName="card-bg"
        dir="rtl"
      >
        <ModalHeader>
          {/* <ModalTitle>سبد خرید</ModalTitle> */}
          <ModalBody>
            {prodactCount > 0 ? (
              <>
                <h3 className="mb-4">سبد خرید شما</h3>
                {cart?.items.map((item) => (
                  <CartProdact
                    key={item.id}
                    id={item.id}
                    quantity={item.quantity}
                  />
                ))}
                <h3 className="mb-4"> مجموع قیمت {cart?.getTotalAmount()}</h3>
              </>
            ) : (
              <h3 className="mb-4">سبد خرید شما خالی است</h3>
            )}
            <Button
              size="sm"
              className="mt-4  "
              variant="btn btn-light"
              onClick={checkout}
            >
              ثیت سفارش
            </Button>
            <Button
              size="sm"
              className="mt-4 mx-3  text-white"
              variant="btn btn-outline-secondary"
              onClick={handleClose}
            >
              بستن
            </Button>
          </ModalBody>
        </ModalHeader>
      </Modal>
    </>
  );
};

export default NavBar;
