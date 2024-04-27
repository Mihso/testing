import logo from './logo.svg';
import './App.css';
import Item from './item/item';
import { useState } from 'react';

function About() {

    const [items, updateItems]= useState([
        ["pizz","pie"], 
        ["pasta","sauce"]
      ]);
    const [title, updateTitle] = useState();
    const [description, updateDescription] = useState();
    const [url, updateData] = useState();

    async function getData() {
        const api = "https://api.github.com/users/Mihso";
        const response = await fetch(api);
        const data = await response.json();
        console.log(data);
        updateData(data.avatar_url);
        updateDescription(data.bio);
    }
    
    getData();

  return (
    <div className="App">
    <header className="App-header">
        <img src={url} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <div>
            About: 
        </div>
        <div>
        {description}
        </div>
      </header>
    </div>
  );
}

export default About;