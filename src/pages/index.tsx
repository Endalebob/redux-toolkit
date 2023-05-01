import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import CartContainer from "../components/cartContainer";
import {
  calculateTotal,
  getCartItems,
} from "<component>/features/cart/cartSlice";
import { RootState, store } from "../app/store";
import { useEffect } from "react";
import Modal from "<component>/components/Modal";
import { useAppSelector,useAppDispatch } from "<component>/app/hooks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { cartItems, total, isLoading } = useAppSelector(
    (store) => store.cart
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
    [cartItems];
  });
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  const { isOpen } = useAppSelector((store) => store.modal);
  if (isLoading) {
    
    return (
  
      <div className=" h-screen flex justify-center items-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }
  return (
    <main className="flex min-h-screen flex-col px-2">
      <>
        {total > 0 && isOpen && <Modal />}
        <Navbar />
        <CartContainer />
      </>
    </main>
  );
}
