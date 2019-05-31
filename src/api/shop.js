/**
 * Mocking client-server processing
 */
// import _products from './products.json'

let _products = []

export const getProducts = () => {
  fetch('http://tech.work.co/shopping-cart/products.json')
  .then(response => response.json())
  .then(res => {
    console.log(res)
    _products.push(res)
  })
}

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}


















// const products = () => {
  //   fetch('http://localhost:4000/api/v1/ratings', {
    //     method: 'POST',
    //       headers: {
      //         'Content-Type': 'application/json',
      //         Accept: 'application/json'
      //       },
      //     body: JSON.stringify({
        //       rating: {
          //         movie_id: movie.id,
          //         liked: liked,
          //         user_id: userId
          //       }
          //     })
          //   })
          // }
