import React, { Component } from 'react'

export default class ProductDetail extends Component {
    addToCartClicked = () => {
        this.props.addToCart()
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img src={this.props.product.image} className='card-img-top' />
                    </div>
                    <div className="col-9">
                        <h5>{this.props.product.category}</h5>
                        <h5>{this.props.product.title}</h5>
                        <p>{this.props.product.description}</p>
                        <span class="text-muted">₹{this.props.product.price}</span>
                        <button className='btn btn-primary' onClick={this.addToCartClicked}>Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
