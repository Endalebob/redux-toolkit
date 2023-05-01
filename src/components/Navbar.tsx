import { CartIcon } from "../icons";
import { RootState } from "<component>/app/store";
import { useAppSelector } from "<component>/app/hooks";



const Navbar = (): JSX.Element => {
  const { amount } = useAppSelector((store: RootState) => store.cart);
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
