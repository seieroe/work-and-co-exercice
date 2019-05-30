import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, cart }) => (
  <div>
    {cart === false ? (<div>
      {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
    </div>) : null}
    <div>
      {cart === true ? (<div>
        <button onClick={console.log("to increment")}>increment</button>
          {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
        <button onClick={console.log("to decrement")}>decrement</button>
      </div>) : null}
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string
}

export default Product
