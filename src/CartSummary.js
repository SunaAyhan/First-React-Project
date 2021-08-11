import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {BrowserRouter, } from "react-router-dom/cjs/react-router-dom.min";
import {

    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    
   
    NavItem,
    NavLink
} from 'reactstrap'

export default class CartSummary extends Component {
    renderSummary() {

        return (<UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Your Cart - {this.props.cart.length}
            </DropdownToggle>
            <DropdownMenu right>
                {this.props.cart.map(cartItem => (
                    <DropdownItem key={cartItem.product.id}>
                         <button type="button" class="btn btn-danger btn-sm" onClick={()=>this.props.removeFromCart(cartItem.product)}> x   </button>
                       
                        {cartItem.product.productName}
                      
                        
                        <button type="button" class="btn btn-success btn-sm"> {cartItem.quantity} </button>

                    </DropdownItem>
                ))}


                <DropdownItem divider />
                <DropdownItem>
                <BrowserRouter>
                   <Link to="cart"> Go to Cart</Link>
                   </BrowserRouter>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>)
    }
    renderEmptyCart(){
        return (
        <NavItem>
            <NavLink>
                Empty Cart
            </NavLink>
        </NavItem>)
    }
    render() {

        return (
            <div>
                {this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()}
            </div>
        )
    }
}
