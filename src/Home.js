import logo from './logo.svg';
import './App.css';
import Item from './item/item';
import { useState } from 'react';

function Home() {

    const [items, updateItems]= useState([
        ["pizz","pie"], 
        ["pasta","sauce"]
      ]);
    const [title, updateTitle] = useState();
    const [description, updateDescription] = useState();

  return (
    <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <form className='form'>
          <label>Name: </label>
          <input type="text" value={title} onChange={e=> updateTitle(e.target.value)} name="name"></input>
          <div> </div>
          <label>Description: </label>
          <input type="text" value={description} onChange={e=> updateDescription(e.target.value)} name="description"></input>
        </form>
        <button  onClick={()=>updateItems([...items,[title,description]])} >Add Item</button>
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