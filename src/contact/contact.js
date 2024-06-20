import '../App.css';
import { useState } from 'react';

function Contact() {

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
    <div>

    <h1>Contact</h1>

    <form action="mailto:moshimo90696@gmail.com" method="post" enctype="text/plain">
    Name:
    <br></br>
    <input type="text" name="name" />
    <br></br>
    E-mail:
    <br></br>
    <input type="text" name="mail" />
    <br></br>
    Message:
    <br></br>
    <textarea name="comment" rows="10" cols="30" size="50"></textarea>
    <br></br>
    <input class="buttoner" type="submit" value="Send" />
    <input class="buttoner" type="reset" value="Reset" />
    </form>
    </div>
  );
}

export default Contact;