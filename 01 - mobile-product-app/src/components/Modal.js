import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { modalBtn } from "../features/modal/modalSlice";


const Modal = () => {
  const dispatch = useDispatch()
  return (
    <section className="model-section">
      <div className="action-container">
        <h4 className="modal-para">remove all items from your shopping cart?</h4>
        <div className="action-btns">
          <button 
          className="confirm-btn"
          onClick={() => {
            dispatch(clearCart())
            dispatch(modalBtn())
          }}
          >confirm</button>
          <button 
          className="cancel-btn"
          onClick={() => dispatch(modalBtn())}
          >cancel</button>
        </div>
      </div>
    </section>
  )
}
export default Modal;