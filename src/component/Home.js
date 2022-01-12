import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './HomePage'
import image1 from '../images/Logo.png'
import searchIcon from 'open-iconic/svg/magnifying-glass.svg'
import cartIcon from 'open-iconic/svg/cart.svg'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            cart: []
        }
    }
    addToCart = (product) => {
        this.setState({cart: [...this.state.cart, product]})
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div className="row">
                        <div className="col-1" >
                            <img src={image1} alt='image' className='img-thumbnail border-0' />
                        </div>
                        <div className='col-9'>
                            <div className='border float-left'>
                                <img src={searchIcon} ></img>
                                <input
                                    type="text"
                                    placeholder="Search here.." className='border-0' width='100%'
                                />
                            </div>
                        </div>
                        <div className='col-1'>
                            <button className='btn btn-light position-relative'>
                                <img src={cartIcon} />
                                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{this.state.cart.length}</span>
                            </button>
                        </div>
                        <div className='col-1'><p>Profile</p></div>
                    </div>
                    <Switch>
                        <Route exact path="/" render={() => <HomePage addToCart={this.addToCart} />} />
                        <Route exact path="/cart" component={HomePage} />
                        <Route exact path="/profile" component={HomePage} />

                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
