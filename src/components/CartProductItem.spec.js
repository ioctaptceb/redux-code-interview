import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'
import CartProductItem from './CartProductItem'

const setup = product => {
  const actions = {
    onClick: jest.fn()
  }

  const component = shallow(
    <CartProductItem product={product} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    button: component.find('button'),
    product: component.find(Product)
  }
}

let productProps

describe('CartProductItem component', () => {
  beforeEach(() => {
    productProps = {
      title: 'Product 1',
      price: 9.99,
      inventory: 6
    }
  })

  it('should render product', () => {
    const { product } = setup(productProps)
    expect(product.props()).toEqual({ title: 'Product 1', price: 9.99 })
  })

  it('should call action on button click', () => {
    const { button, actions } = setup(productProps)
    button.simulate('click')
    expect(actions.onClick).toBeCalled()
  })
})
