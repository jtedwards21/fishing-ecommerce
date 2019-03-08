import React from "react"

import p01 from '../images/products/pic01.png'
import p02 from '../images/products/pic02.png'

const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_jG9s3XMdSjZF9Kdm5g59zlYd", {
      betas: ["checkout_beta_4"],
    })
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: "sku_DjQJN2HJ1kkvI3", quantity: 1 }],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`,
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  render() {
    return (
      <div class="product-card" onClick={event => this.redirectToCheckout(event)}>
        <div class="product-image">
          <img src={p01}/>
        </div>
        <div class="product-info">
          <h5 className="product-title">Hardbait</h5>
          <h6 className="product-amount">$99.99</h6>
        </div>
      </div>
    )
  }
}

export default Checkout
