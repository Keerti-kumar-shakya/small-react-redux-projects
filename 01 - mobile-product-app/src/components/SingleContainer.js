import { useDispatch } from "react-redux";
import { decrease, increase, removeCart } from "../features/cart/cartSlice";
import { ChevronDown, ChevronUp } from "../icons";

const SingleContainer = ({id, amount, img, price, title}) => {

  const dispatch = useDispatch();

  return (
    <article className="single-container">
     <div className="product-image-detail-container">
        <img className="product-image" src= {img} alt= {title}/>
        <div className="product-details">
          <div className="product-name">{title}</div>
          <div className="product-price">${price}</div>

          <button 
          className="remove-btn"
          onClick={() => dispatch(removeCart(id))}
          >remove</button>
        </div>
      </div> 

      <div className="count-container">
          <button className="up-btn"
          onClick={() => dispatch(increase(id))}
          >
          <ChevronUp/>
          </button>
            <p className="amount-count">{amount}</p>
          <button className="down-btn"
          onClick={() => {

            if (amount === 1) {
            dispatch(removeCart(id))
            return;
            }
            dispatch(decrease(id))
          }}
          >
          <ChevronDown/>
          </button>
      </div>
    </article>
  )
}
export default SingleContainer;