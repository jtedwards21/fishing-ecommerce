import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <h1>Madison</h1>
                <p>Your source for fishing lures.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('softbaits')}}>Softbaits</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('shop')}}>Shop</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('cart')}}>Cart</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
