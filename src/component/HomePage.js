import React, { Component } from 'react'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import axios from 'axios'

export default class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            categories: [],
            products: [],
            productSelected: null
        }
    }

    categoryOnClick = (e) => {
        axios
            .get("https://fakestoreapi.com/products/category/" + e.currentTarget.name)
            .then((response) =>
                this.setState({
                    products: response.data,
                })
            )
            .catch((error) => {
                alert("something went wrong while fetching products for category" + e.currentTarget.name);
                console.log(error);
            });
    }

    addToCart = () => {
        this.props.addToCart(this.state.productSelected)
    }

    showProductDetails = (productID) => {
        console.log(productID)
        let product = null
        for(let i=0; i<=this.state.products.length; i++) {
            if(this.state.products[i].id == productID) {
                product = this.state.products[i]
                break
            }
        }
        this.setState({ productSelected: product })
    }

    render() {
        return (
            <div>
                {this.state.productSelected !== null &&
                    <ProductDetail product={this.state.productSelected} addToCart={this.addToCart} ></ProductDetail>
                }
                {this.state.productSelected === null &&
                    <div>
                        <div>
                            {this.state.categories.map((category, index) => {
                                return <button name={category} onClick={this.categoryOnClick} key={index}>{category}</button>
                            })}
                        </div>
                        <ProductList products={this.state.products} showProductDetails={this.showProductDetails} />
                    </div>
                }
            </div>
        )
    }

    componentDidMount() {
        axios
            .get("https://fakestoreapi.com/products/categories")
            .then((response) =>
                this.setState({
                    categories: response.data,
                })
            )
            .catch((error) => {
                alert("something went wrong while fetching categories");
                console.log(error);
            });
    }
}
