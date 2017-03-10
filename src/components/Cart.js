import React, { PropTypes } from 'react'
import Product from './Product'

class Cart extends React.Component {
  constructor(props) {
    super();
    this.props = props
    this.state = {
      hasProducts: props.products.length > 0
    }
  }

  render() {
    let nodes;
    if (this.state.hasProducts) {
     nodes = this.props.products.map(product =>
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
        />
      )
    } else {
      nodes = <em>Please add some products to cart.</em>
    }

    return (
      <div>
        <h3>Your Cart</h3>
        <div>{nodes}</div>
        <p>Total: &#36;{this.props.total}</p>
        <button onClick={this.props.onCheckoutClicked} disabled={this.state.hasProducts ? '' : 'disabled'}> Checkout </button>
      </div>
    )
  }
}

export default Cart
