import React, { Component } from 'react'
import cartIcon from 'open-iconic/svg/cart.svg'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <img src={cartIcon} />
                <span className='badge badge-pill badge-danger'>{this.props.cart.length}</span>
            </div>
        )
    }
}
