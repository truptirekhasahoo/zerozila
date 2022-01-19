import React, { Component } from 'react'

export default class ProductDetail extends Component {
    addToCartClicked = () => {
        this.props.addToCart()
    }

    backClicked = () => {
        this.props.backToProductList()
    }

    render() {
        return (
            <div className="card mb-3 border-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={this.props.product.image} className="img-fluid rounded-start" alt="Image" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.product.category+" :: "} {this.props.product.title}</h5>
                            <p className="card-text">{this.props.product.description}</p>
                            <p className="card-text"><small className="text-muted">₹{this.props.product.price}</small></p>
                        </div>
                        <div class="card-footer bg-transparent border-light">
                            <button className='btn btn-primary mx-1' onClick={this.addToCartClicked}>Add to cart</button>
                            <button className='btn btn-secondary mx-1' onClick={this.backClicked}>Back</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
