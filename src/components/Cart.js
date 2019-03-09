import React from 'react'


const Cart = class extends React.Component {
  state = {
    cart: [{name:'dog', type:'animal', sku:'001', quantity:'1'}],
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


    return (
      <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>{this.state.cart[0].name}</td>
            <td>{this.state.cart[0].name}</td>
            <td>{this.state.cart[0].name}</td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}

export default Cart
