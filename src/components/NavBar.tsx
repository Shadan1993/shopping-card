import { useState } from "react";
import {
  Navbar as NavBarBs,
  Button,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
} from "react-bootstrap";
import { BsCart } from "react-icons/bs";
const NavBar = () => {
  const [showModal, setShowModal] = useState<Boolean>(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <NavBarBs className="border-bottom border-secondary">
        <NavBarBs.Collapse className="justify-content-end">
          <Button
            onClick={handleShow}
            variant="btn btn-outline-secondary"
            className=" text-white"
          >
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
        <ModalHeader closeButton closeVariant="white">
          <ModalTitle>سبد خرید</ModalTitle>
          <ModalBody>سبد خرید شما خالی است</ModalBody>
        </ModalHeader>
      </Modal>
    </>
  );
};

export default NavBar;
