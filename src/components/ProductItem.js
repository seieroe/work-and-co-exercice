import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import ProductImage from './ProductImage'
import '../stylesheets/ProductItem.css'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
      <div className="product-details-wrapper">
        <Product
          title={product.title}
          price={product.price}
          inventory={product.inventory}
          inventoryId={product.inventoryId} />
        <div className="product-image-wrapper">
        <ProductImage
          product={product}  />
        </div>
      </div>
    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
