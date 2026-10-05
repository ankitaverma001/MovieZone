import React from 'react'

const Person3 = ({name,age,pancard,price}) => {
    (age>18) ? (console.log("Adult")) : (console.log("Not an adult"))
  return (
    <div>
      <h2>name={name}</h2>
      <h3>{age>18 ? <h2>Yes</h2> :<h2> No</h2>}</h3>
      <h1> {pancard ? <h2>you can open account</h2> : " "}</h1>
      <h1> {pancard && <p> you can open account</p>}</h1>
      <div> {(price==100) && <h2> you can purchase iphone</h2>}</div>
    </div>
  )
}

export default Person3