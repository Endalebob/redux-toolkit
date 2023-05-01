import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
import { RootState } from "<component>/app/store";


const Navbar = (): JSX.Element => {
  const { amount } = useSelector((store: RootState) => store.cart);
  return (
    <>
      <nav>
        <div className="flex text-2xl font-semibold w-screen bg-blue-400 p-2 pr-10 items-around justify-between">
          <h3>Redux Toolkit</h3>
          <div>
                <CartIcon />
            
            <div className="container">
              <p className="total-amount">{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
