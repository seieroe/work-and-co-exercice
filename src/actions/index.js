import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

// export const getAllProducts = () => dispatch => {
//   shop.getProducts(products => {
//     dispatch(receiveProducts(products))
//   })
// }

export const getAllProducts = () => dispatch => {
  console.log("receive products firing!")
  fetch('http://tech.work.co/shopping-cart/products.json')
    .then(response => response.json())
    .then(res => console.log(res))
    .then(products => {
      dispatch(receiveProducts(products))
    })
    // .then((JSONResponse) => dispatch(setCurrentUser(JSONResponse.user)))
}

const incrementUnsafe = productId => ({
  type: types.INCREMENT,
  productId
})

export const increment = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(incrementUnsafe(productId))
  }
}

const decrementUnsafe = productId => ({
  type: types.DECREMENT,
  productId
})

export const decrement = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(decrementUnsafe(productId))
  }
}

const removeFromCartUnsafe = productId => ({
  type: types.REMOVE_FROM_CART,
  productId
})

export const removeFromCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(removeFromCartUnsafe(productId))
  }
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
  })
}
