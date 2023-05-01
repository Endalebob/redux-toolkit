import { useAppDispatch, useAppSelector } from "<component>/app/hooks";
import {
  decreament,
  increament,
} from "<component>/features/counter/counterSlice";
import React from "react";

const Counter = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="font-semibold text-3xl text-sky-500">{count}</h1>
      <div className="flex gap-6 justify-center">
        <button
          onClick={() => dispatch(increament())}
          type="button"
          className="py-2 px-4 rounded-md border-2 border-sky-400 hover:bg-sky-300"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decreament())}
          type="button"
          className="py-2 px-4 rounded-md border-2 border-sky-400 hover:bg-sky-300"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
