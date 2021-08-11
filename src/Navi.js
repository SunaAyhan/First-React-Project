import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {BrowserRouter, } from "react-router-dom/cjs/react-router-dom.min";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
   
    
} from 'reactstrap';
import CartSummary from './CartSummary';

export default class Navi extends Component {
    render() {
        return (
            <div>       
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Northwind Appp</NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/form1">Form Demo 1</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/form2">Form Demo 2</NavLink>
                            </NavItem>
                           
                           <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>
                        </Nav>
                     
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
