import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { getProductData } from "../data/Item";
import { CartContext } from "../context/CartContext";
type Employee = {
  id: string;
  quantity: number | string;
};
const CartProdact = ({ id, quantity }: Employee) => {
  const prodactData = getProductData(id);
  const cart = useContext(CartContext);

  return (
    <>
      <p>عنوان محصول:{prodactData?.title}</p>
      <p>تعداد:{quantity}</p>
      <p>
        قیمت:
        {parseInt(quantity.toString()) *
          parseInt(prodactData?.price.toString() || "0")}
      </p>
      <Button
        size="sm"
        className="mb-5 text-white"
        variant="btn btn-outline-secondary"
        onClick={() => cart?.deleteFromCart(id)}
      >
        حذف
      </Button>
    </>
  );
};

export default CartProdact;
