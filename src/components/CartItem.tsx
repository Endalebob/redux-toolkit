import React from "react";
import { ChevronDown, ChevronUp } from "<component>/icons"; 
import { useDispatch } from "react-redux";
import { removeItem,increase,decrease} from "<component>/features/cart/cartSlice";



interface CartItemProps {
  id: number;
  img: string;
  title: string;
  price: number;
  amount: number;
}

const CartItem = ({ id, img, title, price, amount }: CartItemProps) => {
  const dispatch = useDispatch();
  return (
    <article className="flex items-center justify-around gap-4 mb-4 w-full">
      <div className=" min-w-[260px] flex items-center justify-start gap-4 mb-4">
        <img className="max-w-[90px]" src={img} alt={title} />
        <div className="flex capitalize flex-col items-start">
          <h4 className="font-semibold">{title}</h4>
          <h4 className=" text-gray-400"> {price} </h4>
          <button onClick={()=>(dispatch(removeItem(id)))} className=" text-red-400">remove</button>
        </div>
      </div>
      <div className=" flex flex-col ">
        <button onClick={()=>{dispatch(increase({id}))}}>
          <ChevronUp />
        </button>
        
        <span className=" text-sm px-2">{amount}</span>
        <button onClick={()=>{
          if(amount === 1){
            dispatch(removeItem(id))
            return
          }
          dispatch(decrease({id}))}}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
