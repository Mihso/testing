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
        updateData(data.avatar_url);
        updateDescription(data.bio);
        updateLink(data.html_url);
    }
    
    getData();

  return (
    <div className="App">
    <header className="App-header" style={{'padding': '10px'}}>
        <img src={url} style={{"margin" : '15px'}} className="profile-pict" alt="logo" />
        <div>
            About: 
        </div>
        <div className='about' style={{'margin': "10px"}}>
        I am a full-stack software engineer with a thorough education, including a bachelor’s degree in Cinema and Digital Media from the University of California Davis, and certificates from both the Hack Reactor Immersive program and the Cook Systems FastTrack program. I have deep insight into user accessibility and I ensure the success of fellow engineers by guiding them through the debugging process. I enjoy building comprehensible code, displayed in my work on a movie review application that allows users to view information on the latest movies and write reviews. I also possess exceptional analytical and problem-solving skills that stem from strong pattern-recognition capabilities, making me a valuable team member.
        </div>
      </header>
    </div>
  );
}

export default About;