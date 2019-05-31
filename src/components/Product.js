import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Product = ({ price, inventory, title, cart, quantity, productId }) => {
  console.log("cart is:", cart)
  return (
    <div>
      {
        cart ?
        <div>
          <div>
            {title} - &#36;{price}{inventory ? ` x ${inventory}` : null} {quantity}
            <button className="remove-button" onClick={() => console.log("Remove")}>Remove</button>
            <button className="btn btn-quantity btn-left" onClick={() => decrementCart(quantity, productId)}> - </button>
            <button className="btn btn-quantity btn-right" onClick={() => console.log("increment")}> + </button>
          </div>
        </div> :
        <div>
          {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
        </div>
    }
    </div>
  )
}

const decrementCart = (quantity, productId) => {
  console.log(quantity, productId)
  let newQuantity = --quantity

  // fetch(URL, method: "patch", headers: {}, body: JSON.stringify({id: id, quantity:newQuantity}))
}

// const decrementCart = (quantity, id) => {
//   let newQuantity = --quantity
//   fetch(URL, method: "patch", headers: {}, body: JSON.stringify({id: id, quantity:newQuantity}))
// }
Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string
}
//
// const mapStateToProps = (state) => ({
//   cartItem: getCartProducts(state),
//   total: getTotal(state)
// })
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Product)

export default Product
