import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // Dynamic way to call array in html
  const frineds = ["Raihan", "Sumon", "Naimur", "Arkan"];

  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "After Effect", price: "$30.99" }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Getting Start With React</p>

        <Counter></Counter>
        <Users></Users>

        <ul>
          {products.map(product => (
            <li>{product.name}</li>
          ))}
        </ul>
        {products.map(product => (
          <Product product={product}></Product>
        ))}

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

        <Person name={frineds[0]} age="21"></Person>
        <Person name="Rabbi" age="23"></Person>
        <Person name="Limon" age="25"></Person>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
        {users.map(user => (
          <li>{user.phone}</li>
        ))}
      </ul>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(12);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left"
  };
  const { name, price } = props.product;
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: "2px solid slateblue",
    margin: "10px"
  };
  return (
    <div style={personStyle}>
      <h1>Name:{props.name} </h1>
      <h3>Age: {props.age}</h3>
    </div>
  );
}
export default App;
