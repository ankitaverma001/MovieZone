import React from 'react'

const Product = (props) => {

    const obj ={

     title: 'Galaxy S24 ultra',
     brand: 'Samsung',
     price:150000,
     onSale: true,

    }
  return (
    <div><>
    </>
        <h2>mobile name = {props.title}</h2>
        <p>Brand: {props.brand}</p>
        <p>Price: ${props.price}</p>
        {props.onSale && <p>On Sale!</p>}
    </div>  
  )
}

export default Product