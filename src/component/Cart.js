import React, { Component } from 'react'
import cartIcon from 'open-iconic/svg/cart.svg'
import ProductList from './ProductList'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <h2>Total Items: {this.props.products.length}</h2>
                <ProductList products={this.props.products} />
                <a href='/' className='btn btn-primary'>Back</a>
            </div>
        )
    }
}
