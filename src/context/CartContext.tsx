import { createContext, useState } from "react";
import { getProductData } from "../data/Item";
type Employee = {
  idCart: string;
  quantity: number | string;
};
export type ContextObj = {
  items: any[];
  getProductQuantity: (id: string) => void;
  addItemToCart: (id: string) => void;
  removeItemFromCart: (id: string) => void;
  deleteFromCart: (id: string) => void;
  getTotalAmount: () => number;
};

export const CartContext = createContext<ContextObj | null>(null);

export function CartProvider({ children }: any) {
  const [cartProducts, setCartProducts] = useState<Employee[]>([]);

  //#region function filter prodacts According to id prodact
  function getProductQuantity(id: string) {
    const quantity = cartProducts.find((item: Employee) => item.idCart === id);
    if (quantity === undefined) {
      return 0;
    } else {
      return quantity?.quantity;
    }
  }
  //#endregion

  //#region Add item to cart
  function addItemToCart(id: string) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      //   setCartProducts([...cartProducts, { idCart: id, quantitiy: 1 }]);
      setCartProducts([...cartProducts, { idCart: id, quantity: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((item: Employee) =>
          item.idCart === id
            ? { ...item, quantity: Number(item.quantity) + 1 }
            : item
        )
      );
    }
  }
  //#endregion

  //#region Reduce the amount of items in the shopping cart
  function removeItemFromCart(id: any) {
    const quantitiy = getProductQuantity(id);
    if (quantitiy === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((item: Employee) =>
          item.idCart === id
            ? { ...item, quantity: Number(item.quantity) - 1 }
            : item
        )
      );
    }
  }
  //#endregion

  //#region Remove the item from the shopping cart
  function deleteFromCart(id: string) {
    setCartProducts(
      cartProducts.filter((item: Employee) => item.idCart !== id)
    );
  }

  //#region Calculate the total price
  function getTotalAmount() {
    let total = 0;
    cartProducts.map((item: any) => {
      const prodactData = getProductData(item.idCart);
      total += (prodactData?.price ? prodactData?.price : 0) * item.quantity;
    });
    return total;
  }
  //#endregion

  return (
    <CartContext.Provider
      value={{
        items: cartProducts,
        getProductQuantity,
        addItemToCart,
        removeItemFromCart,
        deleteFromCart,
        getTotalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
