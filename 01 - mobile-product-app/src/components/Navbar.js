import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

const Navbar = () => {
  const {amount} = useSelector(state => state.cart)
  return (
   <nav>
      <div className="nav-container">
        <h4 className="nav-heading">redux toolkit</h4>
        <div className="cart-container">
         <CartIcon />
         <div className="cart-quantity">{amount}</div>
        </div>
      </div>
   </nav>
  )
}
export default Navbar;