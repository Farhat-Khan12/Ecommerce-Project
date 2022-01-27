import React from 'react'
import Annoucement from './Annoucement'

const Orders = () => {
    return (
        <>
            <Annoucement/>
           <br/>
           <h2>Order Details</h2>
           <table>
               <th>Product Image</th>
               <th>Product Name</th>
               <th>Product Price</th>
           </table>
        </>
    )
}

export default Orders
