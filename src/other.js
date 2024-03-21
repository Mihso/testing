import logo from './logo.svg';
import './App.css';
import Item from './item/item';
import { useState } from 'react';

function Other() {

    const [items, updateItems]= useState([
        ["pizz","pie"], 
        ["pasta","sauce"]
      ]);

  return (
    <div className="App">
    <header className="App-header">
          Learn React
        <button onClick={()=>updateItems([...items,["hello","world"]])} >Add Item</button>
        {
            items.map((data, idx) => (
                <div key={idx}>
                <Item>{data[0]}{data[1]}</Item>
                {idx}
                </div>
              )
            )
        }
      </header>
    </div>
  );
}

export default Other;