import React from 'react'

const ShowProduct = () => {
    let products=[
        {id:1, name:"Iphone 15", price:150000},
        {id:2, name:"Samsung S24", price:120000},
        {id:3, name:"Oneplus 12", price:80000},
        {id:4, name:"Redmi Note 13", price:30000},
    ]

    
  return (
    <div>
       {products.map((product) => (
         <div key={product.id}>
           <h3>{product.name}</h3>
           <p>Price: ${product.price}</p>
         </div>
       ))}
    </div>
  )
}

export default ShowProduct