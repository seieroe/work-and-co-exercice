import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import '../stylesheets/App.css';
import HeaderContainer from '../containers/HeaderContainer'

const App = () => (
  <div>
    <HeaderContainer />
    {/*<div>This is a block element</div>
    <div>
      <p>This is a row of text that's going to span the width of my parent box</p>
      <p>This is the text below this thing</p>
      <button>This is a button</button>
    </div>*/}
    <h2>Shopping Cart Example</h2>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
    </div>
)

export default App
