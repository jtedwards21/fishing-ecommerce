import React from 'react'
import PropTypes from 'prop-types'

import about_pic from '../images/about_pic.jpg'

import Checkout from '../components/Checkout'
import Cart from '../components/Cart'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="softbaits" className={`${this.props.article === 'softbaits' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Softbaits</h2>
          <div className="products">
            <Checkout />
            <Checkout />
            <Checkout />
            <Checkout />
            <Checkout />
          </div>
          {close}
        </article>

        <article id="hardbaits" className={`${this.props.article === 'hardbaits' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
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
          <span className="image main"><img src={about_pic} alt="" /></span>
          <p>We began manufacturing and selling fishing lures in the early 2000's, first locally, then with an online presence.</p>
          <p>Our aim is to produce quality fishing products at reasonable prices and performance that exceeds customer expectations.</p>
          <p>Bass, redfish, trout, pike... make fishing history together with MMM Lures.</p>
          {close}
        </article>

        <article id="cart" className={`${this.props.article === 'cart' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Cart</h2>
          <Cart />
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
