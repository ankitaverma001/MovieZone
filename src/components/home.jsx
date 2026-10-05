import React from 'react'
import Person from "./Person";
import Test from "./components/Test";
import Product from "./components/Product";
import Person2 from "./components/Person2";
import Person3 from "./components/Person3";
import Laptop from "./components/Laptop";
import Events from "./components/Events";
import Counter from "./components/Counter";
import ShowProduct from "./components/ShowProduct";
import FilterProduct from "./components/FilterProduct";


const home = () => {
  return (
    <>
<div>
     <div>
        {/* <h1>Welcome to React</h1>
      <Person name="Rishabh" age={22} />
      <Test />
      <Product title="Galaxy S24 ultra" brand="Samsung" price={150000} onSale={true} />
      <Person2 /> */}
      </div>
      <div>
        {/* < Person2 name="Alice" age={25} salary={50000} />
    < Person2 name="Anku" age={20} salary={150000} /> */}
      </div>
      <div>
        {/* <Person3 name="Rishabh" age={12} pancard={true} price={100}/> */}
      </div>
      <div>
        {/* <Laptop brandName = "Dell" model="Inspiron" price={100000} />
        <Laptop brandName = "hp" model="probook" price={150000} />
        <Laptop brandName = "lenovo" model="yoga" price={250000} /> */}
      </div>
      <div>
        {/* <Events /> */}

      </div>
      <div>
        {/* <Counter /> */}
      </div>
      <div>
        {/* <ShowProduct /> */}

      </div>
      <div>
        {/* <FilterProduct /> */}
      </div>
      <div>
        <FilterProduct />
      </div>
    </div>   
    </>

       
  );
};

export default home