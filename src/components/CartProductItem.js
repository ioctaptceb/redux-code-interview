import React, { PropTypes } from 'react'
import Product from './Product'

const CartProductItem = ({ product, onClick }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      quantity={product.quantity}
    />
    <button
      onClick={onClick}
    >
      -
    </button>
  </div>
)

CartProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

export default CartProductItem
