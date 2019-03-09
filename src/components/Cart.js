import React from 'react'

import p01 from '../images/products/pic01.png'


const Cart = class extends React.Component {
  state = {
    cart: [{name:'dog', price: '7', type:'animal', sku:'001', quantity:'1'}],
  }

  componentDidMount() {
    // Get existing cart from localstorage if present.
    const existingCart = JSON.parse(
      localStorage.getItem('stripe_checkout_items')
    )
    if (existingCart && existingCart.length) {
      this.setState({ cart: existingCart })
    }

    console.log(this.state.cart)
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

    var i = 1;
    var total = 77;

    //return the html
    return (
      <div>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>

          </tr>
          <tr>
            <td><img className="table-image" src={p01}/></td>
            <td className="table-description">{this.state.cart[0].name}</td>
            <td>{this.state.cart[0].quantity}</td>
            <td>{this.state.cart[0].price}</td>
          </tr>
        </tbody>


      </table>
      </div>
    )
  }
}

export default Cart
