import React from 'react'

const Person = () => {
    const name = "Ankita";
  const age = 20;
  const person = {
    name: "Ankita",
    age: 20,
    pincode: 802302,
    mobile: 1234567890,
    gmail: "ankita_gmail.com",
    hobbies: ["reading", "traveling", "coding"] 
  }
  const product ={
    name: "Laptop",
    price: 50000,
    brand: "Dell"
  }
  
  return (
    <>
    <div> 
      <h1>name = {person.name}</h1>
      <h1>age = {person.age}</h1>
      <h1>pincode = {person.pincode}</h1>
      <h1>mobile = {person.mobile}</h1>
      <h1>gmail = {person.gmail}</h1>
      <h1>hobbies = {person.hobbies.join(", ")}</h1>
      
      



    </div>
    <div> 
      <h1>Product Name: {product.name}</h1>
      <h1>Price: ${product.price}</h1>
      <h1>Brand: {product.brand}</h1>
    </div>
    </>
  )
}

export default Person