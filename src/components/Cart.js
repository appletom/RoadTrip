import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ADD_TO_CART } from './actions/addToCartAction';
import { REMOVE_FROM_CART } from './actions/removeFromCart';
import { INCREASE_QUANTITY } from './actions/increase';
import { DECREASE_QUANTITY } from './actions/decrease';


class Cart extends Component{

    addItem = (id) => {
        this.props.ADD_TO_CART(id);
    }

    remItem = (id) => {
        this.props.REMOVE_FROM_CART(id);
    }

    incQty = (id) => {
        this.props.INCREASE_QUANTITY(id);
    }

    decQty = (id) => {
        this.props.DECREASE_QUANTITY(id);
    }






    render() {
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <div className="card col-md-6 cart-card">
                        
                        <li className="list-items-added" key={item.id}>

                            <div >
                                <img src={item.img} alt={item.img} className="items-added-img"/>
                            </div>


                            <div className="item-desc">
                                <span className="item-title">{item.title}</span>
                                <h4>Price : {item.price}</h4>
                                <h4>Quantity: {item.quantity}</h4>

                                <div className="add-remove">
                                    <h6><Link to="/Cart" onClick={() => {this.addItem(item.id)}}>Add to Cart</Link></h6>
                                    <h6><Link to="/Cart" onClick={() => {this.remItem(item.id)}}>Remove from Cart</Link></h6>
                                    <h6><Link to="/Cart" onClick={() => {this.incQty(item.id)}}>Add quantity</Link></h6>
                                    <h6><Link to="/Cart" onClick={() => {this.decQty(item.id)}}>Subtract quantity</Link></h6>
                                </div>
                            </div>
                        </li>
                        </div>
                     
                

                    )
                })

            ): 
            
            (
                <h4>Cart is empty</h4>
            )


        return (
            <div className="container">
            <h4>You have ordered: {addedItems}</h4>
            </div>
        )

    }

}

const mapStateToProps = (state) => {
    return{
        items: state.addedItems
    }
}

export default connect(mapStateToProps)(Cart)