import React, { Component } from 'react'
import { Button, Table } from "reactstrap"

export default class CartList extends Component {
    renderCart() {
        return (
            <Table class="table">
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Category Id
                        </th>
                        <th>
                            Product Name
                        </th>
                        <th>
                            Unit Price
                        </th>
                        <th>
                            Units In Stock
                        </th>
                        <th>
                            Quantity
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(cartItem => (
                            <tr key={cartItem.product.id}>
                                <td>fghjkl</td>
                                <td>
                                    {
                                        cartItem.product.id
                                    }
                                </td>
                                <td>
                                    {
                                        cartItem.product.categoryId
                                    }
                                </td>
                                <td>
                                    {
                                        cartItem.product.productName
                                    }
                                </td>
                                <td>
                                    {
                                        cartItem.product.unitPrice
                                    }
                                </td>
                                <td>
                                    {
                                        cartItem.product.unitsInStock
                                    }
                                </td>
                                <td>
                                    {
                                        cartItem.product.quantity
                                    }
                                </td>
                                <td>
                                    <Button color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>
                                        remove
                                    </Button>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
    render() {
        return (
            <div>
                {this.renderCart()}
            </div>
        )
    }
}
