import { useDispatch, useSelector } from "react-redux";
import SingleContainer from "./SingleContainer";
import { modalCart } from "../features/modal/modalSlice";

const CartContainer = () => {
 const dispatch = useDispatch();
  const {cartItems, total, amount} = useSelector(state => state.cart);

console.log(cartItems);

if (amount === 1) {
  return <section className="product-section">
       <h1 className="product-heading">your bag</h1>
       <h4 className="product-empty-para">is currently empty</h4>
  </section>
}

  return (
    <section className="product-section">
      <h1 className="product-heading">your bag</h1>
        <div className="products-container">
          {
            cartItems.map((product) => <SingleContainer key={product.id} {...product}/>)
          }
        </div>

        <div className="total-clear-cart-container">
          <div className="total-price-container">
            <span className="para-total">total</span>
            <span className="total-price">${total.toFixed(2)}</span>
          </div>

          <div className="clear-cart-container">
          <button 
          className="clear-cart-btn"
          onClick={() => dispatch(modalCart())}
          >clear cart</button>
          </div>
        </div>  
    </section>
  )
}
export default CartContainer;