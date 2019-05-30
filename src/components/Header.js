import React, {useState} from 'react';
import {Dialog} from "@reach/dialog";
import "@reach/dialog/styles.css";
import CartContainer from '../containers/CartContainer'

const Header = ({ products, total }) => {
  const [ modalOpen, setModalOpen ] = useState(false)
  console.log("these are my products", products)

// {/* Refactor with just the strings being conditionally rendered */}
let buttonText;

  if (products.length == 0) {
    buttonText = "Your Cart is empty" } else { buttonText = "Your Cart"}
  return (
  <div>
    <h1> ACME STORE </h1>
    <button onClick={() => setModalOpen(true)}> {buttonText} </button>

    <Dialog
       isOpen={modalOpen}
       onDismiss={() => setModalOpen(false)}
     >
       <button
         className="close-button"
         onClick={() => setModalOpen(false)}
       >
         {/*<VisuallyHidden>Close</VisuallyHidden>*/}
         <span aria-hidden>×</span>
       </button>
       <p>This is Your Cart</p>
       <CartContainer/>
     </Dialog>
  </div>
  )

}

export default Header
