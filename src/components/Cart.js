import React from 'react'
import CartItem from '../components/CartItem'


const Cart = class extends React.Component {
  state = {
    cart: [{name:'dog', price: '7.5', type:'animal', sku:'001', quantity:'1'}],
  }

  componentDidMount() {
    // Get existing cart from localstorage if present.
    const existingCart = JSON.parse(
      localStorage.getItem('stripe_checkout_items')
    )
    if (existingCart && existingCart.length) {
      this.setState({ cart: existingCart })
    }
  }

  getCart() {
    return this.state.cart
  }

  addToCart(newItem) {
    let itemExisted = false
    let updatedCart = this.state.cart.map(item => {
      if (newItem === item.sku) {
        itemExisted = true
        return { sku: item.sku, quantity: ++item.quantity }
      } else {
        return item
      }
    })
    if (!itemExisted) {
      updatedCart = [...updatedCart, { sku: newItem, quantity: 1 }]
    }
    this.setState({ cart: updatedCart })
    // Store the cart in the localStorage.
    localStorage.setItem('stripe_checkout_items', JSON.stringify(updatedCart))
  }

  render() {
    //Generate content



    //return the html
    return (
      <div>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Description</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <CartItem />
        </tbody>


      </table>
      </div>
    )
  }
}

export default Cart
