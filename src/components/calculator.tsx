import React, { useState, useReducer } from "react";

const COUNTERTYPE = {
  INCREMENT: "increament",
  DECREAMENT: "decreament",
};

interface State {
  count: number;
}

interface Action {
  type: string;
}

function counterReducer(state: State, action: Action) {
  switch (action.type) {
    case COUNTERTYPE.INCREMENT:
      return { count: state.count + 1 };
    case COUNTERTYPE.DECREAMENT:
      return { count: state.count - 1 };
    default:
      throw new Error("unsuported type");
  }
}

const Calculator = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  //   const [count, setCount] = useState(0);
  const increament = () => {
    dispatch({ type: COUNTERTYPE.INCREMENT });
  };
  const decreament = () => {
    dispatch({ type: COUNTERTYPE.DECREAMENT });
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex justify-center items-center">
        <button
          onClick={decreament}
          type="button"
          className="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"
        >
          -
        </button>
        <p>{state.count}</p>
        <button
          onClick={increament}
          type="button"
          className="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Calculator;
