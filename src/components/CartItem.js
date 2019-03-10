import React from 'react'

import p01 from '../images/products/pic01.png'


const CartItem = class extends React.Component {
  state = {
    name:'dog',
    price: '7.5',
    type:'animal',
    sku:'001',
    quantity:'1'}

  componentDidMount() {
  this.increaseQuantity = this.increaseQuantity.bind(this);



  }

  increaseQuantity() {

    var nq = (Number(this.state.quantity) + 1).toString();

    this.setState({ quantity: nq });

    console.log(this.state.quantity);

  }

  render() {
    //Generate content

    var total = Number(this.state.quantity) * Number(this.state.price);
    total = total.toFixed(2);

    var price = (Number(this.state.price)).toFixed(2);


    //return the html
    return (
          <tr>
            <td><img alt="" className="table-image" src={p01}/></td>
            <td className="table-description">{this.state.name}</td>
            <td>${price}</td>
            <td>
              <span className="adjust-text">-  </span>
              <span>{this.state.quantity}</span>
              <span className="adjust-text" onClick={this.increaseQuantity}>  +</span>
            </td>
            <td>${total}</td>
          </tr>
    )
  }
}

export default CartItem
