import React, { Component } from 'react'

export default class ProductList extends Component {
    showProductDetails = (e) => {
        // console.log(e.currentTarget.id)
        this.props.showProductDetails(e.currentTarget.id)
    }

    render() {
        return (
            <div class="card-group">
                {this.props.products.map((product) => {
                    return <div class="card" id={product.id} onClick={this.showProductDetails}>
                        <img class="card text-white bg-success border-0" src={product.image} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{product.title}</h5>
                            <p class="card-text"><small class="text-muted">₹{product.price}</small></p>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}
