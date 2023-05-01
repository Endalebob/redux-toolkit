import { clearCart } from "<component>/features/cart/cartSlice";
import { openModal } from "<component>/features/modal/modalSlice";
import { RootState } from "<component>/app/store";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector(
    (store: RootState) => store.cart
  );

  if (amount < 0) {
    return (
      <section className="flex justify-center items-center mt-4">
        <header>
          <h2 className="text-xl text-center font-bold uppercase my-4">
            your bag
          </h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2 className="text-5xl text-center text-gray-500 font-bold uppercase my-4">
          your bag
        </h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer className="m-4">
        <div className="flex justify-center">
          <hr className=" w-2/3 h-1 my-2 border-0 dark:bg-gray-700" />
        </div>

        <div className="flex w-full justify-around mx-4">
          <h4 className=" text-2xl capitalize font-bold">total</h4>
          <span className="text-2xl capitalize font-bold text-right">
            ${total.toFixed(2)}
          </span>
        </div>
        <div className="flex w-screen justify-center">
        { total>1 && <button
          type="button"
          onClick={() => {
            dispatch(openModal());
          }}
          className=" border-2 rounded-md border-red-700 uppercase font-bold border-solid p-1 text-red-700"
        >
          clear cart
        </button>}
        </div>
      </footer>
    </section>
  );
};
export default CartContainer;
