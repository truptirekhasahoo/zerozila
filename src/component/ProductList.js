import React, { Component } from 'react'

export default class ProductList extends Component {
    showProductDetails = (e) => {
        this.props.showProductDetails(e.currentTarget.id)
    }

    render() {
        return (
            <div className="card-group">
                {this.props.products.map((product) => {
                    return <div className="card" id={product.id} onClick={this.showProductDetails}>
                        <img className="card-img-top" src={product.image} alt="No image" />
                        <div className="card-body">
                            <h6 className="card-title">{product.title}</h6>
                            <p className="card-text"><small className="text-muted">₹{product.price}</small></p>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}
