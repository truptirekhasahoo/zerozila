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
            categorySelected: '',
            productSelected: null
        }
    }

    categoryOnClick = (e) => {
        this.setState({ categorySelected: e.currentTarget.id })

        axios
            .get("https://fakestoreapi.com/products/category/" + e.currentTarget.id)
            .then((response) =>
                this.setState({
                    products: response.data,
                })
            )
            .catch((error) => {
                alert("something went wrong while fetching products for category" + e.currentTarget.id);
                console.log(error);
            });
    }

    addToCart = () => {
        this.props.addToCart(this.state.productSelected)
    }

    showProductDetails = (productID) => {
        console.log(productID)
        let product = null
        for (let i = 0; i <= this.state.products.length; i++) {
            if (this.state.products[i].id == productID) {
                product = this.state.products[i]
                break
            }
        }
        this.setState({ productSelected: product })
    }

    unselectProduct = () => {
        this.setState({ productSelected: null })
    }

    render() {
        return (
            <div>
                {this.state.productSelected === null &&
                    <div>
                        <div className='mb-2'>
                            {this.state.categories.map((category, index) => {
                                return <>
                                    <input type='radio' checked={this.state.categorySelected === category} className='btn-check' id={category} name='options-category' onClick={this.categoryOnClick} key={'input-' + index} autoComplete="off" />
                                    <label class="btn btn-outline-secondary mx-1" for={category} key={'label-' + index}>{category}</label>
                                </>
                            })}
                        </div>
                        {this.state.products.length > 0 &&
                            <ProductList products={this.state.products} showProductDetails={this.showProductDetails} />
                            
                        }
                    </div>
                }

                {this.state.productSelected !== null &&
                    <ProductDetail product={this.state.productSelected} addToCart={this.addToCart} backToProductList={this.unselectProduct} ></ProductDetail>
                    
                    
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
