import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './HomePage'
import Cart from './Cart'
import image1 from '../images/Logo.png'
import searchIcon from 'open-iconic/svg/magnifying-glass.svg'
import cartIcon from 'open-iconic/svg/cart.svg'
import personIcon from 'open-iconic/svg/person.svg'
import SearchList from './SearchList';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            cart: [],
            searchString: ''
        }
    }
    addToCart = (product) => {
        let arrProducts = this.state.cart
        arrProducts.push(product)
        this.setState({ cart: arrProducts })
    }

    searchTextChanged = (e) => {
        this.setState({
            searchString: e.currentTarget.value
        })
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div className="row mt-3">
                        <div className="col-1" >
                            <img src={image1} alt='image' className='img-thumbnail border-0' />
                        </div>
                        <div className='col-9'>
                            <div className='border float-left'>
                                <img src={searchIcon} />
                                <input
                                    type="text"
                                    placeholder="Search here.." className='border-0' width='100%'
                                    onBlur={this.searchTextChanged}
                                />
                            </div>
                        </div>
                        <div className='col-2'>
                            <a className='btn btn-light position-relative mx-2'>
                                <img src={cartIcon} />
                                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{this.state.cart.length}</span>                                
                            </a>
                            <a className='btn btn-light position-relative mx-2'>
                                <img src={personIcon} />
                            </a>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/" render={() => <HomePage addToCart={this.addToCart} searchString={this.state.searchString} />} />
                        <Route exact path="/cart" render={() => <Cart products={this.state.cart} />} />
                        <Route exact path="/profile" component={HomePage} />

                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
