import { useAppDispatch } from "<component>/app/hooks";
import { clearCart } from "<component>/features/cart/cartSlice";
import { closeModal } from "<component>/features/modal/modalSlice";
import React from "react";



const Modal = () => {
  const dispatch = useAppDispatch();
  return (
    <aside className="fixed flex justify-center items-center w-full h-full top-0 left-0 z-10 bg-black bg-opacity-75">
      <div className="flex flex-col justify-center items-center bg-slate-100 rounded-md p-8 gap-4 w-4/5 max-w-[400px] text-center">
        <h1 className=" capitalize text-xl font-semibold text-zinc-900">
          remove all items from your shopping cart?
        </h1>
        <div className="flex justify-around w-full">
          <button
            type="button"
            onClick={() => {
                dispatch(closeModal());
            }}
            className=" border-2 rounded-md border-blue-700 uppercase font-bold border-solid p-1 hover:bg-cyan-600/30 text-blue-700"
          >
            cancel
          </button>
          <button
            type="button"
            onClick={() => {
                dispatch(clearCart());
            }}
            className=" border-2 rounded-md border-red-700 uppercase font-bold border-solid hover:bg-red-400/60 p-1 text-red-700"
          >
            clear cart
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
