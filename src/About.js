import './App.css';
import { useState } from 'react';

function About() {

    const [title, updateTitle] = useState();
    const [description, updateDescription] = useState();
    const [url, updateData] = useState();
    const [link, updateLink] = useState();

    async function getData() {
        const api = "https://api.github.com/users/Mihso";
        const response = await fetch(api);
        const data = await response.json();
        console.log(data);
        updateData(data.avatar_url);
        updateDescription(data.bio);
        updateLink(data.html_url);
    }
    
    getData();

  return (
    <div className="App">
    <header className="App-header">
        <img src={url} className="profile-pict" alt="logo" />
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
        <div className='about' style={{'margin': "10px"}}>
        {description}
        </div>

        Contact Information:
        <div style={{'marginBottom':'20px'}}>
          510-604-4520
          moshimo90696@gmail.com
        </div>

        Link to Github.
        <div style={{'margin-top': '20px'}}>
          {link}
        </div>
      </header>
    </div>
  );
}

export default About;