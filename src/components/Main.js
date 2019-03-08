import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

import Checkout from '../components/Checkout'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="softbaits" className={`${this.props.article === 'softbaits' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Softbaits</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Here are softbaits</p>
          {close}
        </article>

        <article id="shop" className={`${this.props.article === 'shop' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Hardbaits</h2>
          <div className="products">
            <Checkout />
            <Checkout />
            <Checkout />
            <Checkout />
            <Checkout />
          </div>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>We began manufacturing and selling fishing lures in the early 2000's, first locally, then with an online presence.</p>
          <p>Our aim is to produce quality fishing products at reasonable prices and performance that exceeds customer expectations.</p>
          <p>Bass, redfish, trout, pike... make fishing history together with MMM Lures.</p>
          {close}
        </article>

        <article id="cart" className={`${this.props.article === 'cart' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Cart</h2>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
