import React from 'react'

const ProductImage = ({ product }) => {
  const imgSrc = '/img/image-' + product.id + '.jpg'
  return (
    <div className="product-image-wrapper">
      <img src={process.env.PUBLIC_URL + imgSrc} alt={product.productTitle} />
    </div>
  )
}

export default ProductImage
