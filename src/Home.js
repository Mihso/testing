import logo from './logo.svg';
import './App.css';
import Item from './item/item';
import { useState } from 'react';

function Home() {

    const [items, updateItems]= useState([
        ["pizz","pie"], 
        ["pasta","sauce"]
      ]);

  return (
    <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={()=>updateItems([...items,["hello","world"]])} >Add Item</button>
        <div className="listStart">
        {
            items.map((data, idx) => (
                <div className="lister" key={idx}>
                <Item>{data[0]}{data[1]}</Item>
                </div>
              )
            )
        }
        </div>
      </header>
    </div>
  );
}

export default Home;