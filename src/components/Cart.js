import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ADD_TO_CART } from './actions/addToCartAction';
import { REMOVE_FROM_CART } from './actions/removeFromCart';
import { increase } from './actions/increase';
import { DECREASE_QUANTITY } from './actions/decrease';


class Cart extends Component{


    remItem = (id) => {
        this.props.REMOVE_FROM_CART(id);
    }

    incQty = (id) => {
        this.props.increase(id);
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
                                <p>Price : {item.price}</p>
                                <p>Quantity: {item.quantity}</p>

                                <div className="add-remove">

                                    <h6 onClick={() => {this.remItem(item.id)}}>Remove from Cart</h6>
                                    <h6 onClick={() => {this.incQty(item.id)}}>Add quantity</h6>
                                    <h6 onClick={() => {this.decQty(item.id)}}>Subtract quantity</h6>
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
            <div className="cart-order">
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

const mapDispatchToProps = (dispatch) => {
    return {
        incQty: (id) => (dispatch(incQty(id)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)