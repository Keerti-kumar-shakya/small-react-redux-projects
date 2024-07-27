import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/Modal";
import { useEffect } from "react";
import { cartTotal, getCartItems } from "./features/cart/cartSlice";



function App() {
  const dispatch = useDispatch()
  const {isLoading, cartItems} = useSelector(state => state.cart);
  const {isOpen} = useSelector(state => state.modal);
  
  useEffect(() => {
    dispatch(cartTotal());
  }, [cartItems])

  useEffect(() => {
   dispatch(getCartItems())
  }, [])

  if (isLoading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    )
  }


  return (
   <main>
    {isOpen && <Modal/>}
      <Navbar/>
      <CartContainer/>
   </main>
  );
}

export default App;
