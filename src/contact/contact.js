import './contact.css';
import { useState,useRef, useEffect } from 'react';
import Sidebar from '../sidebar/sidebar';
import emailjs from '@emailjs/browser';

function Contact() {
const [sent, updateSent] = useState(false);
const [message, updateMessage] = useState("");
        const form = useRef();
        function open(){
          if(sent){
            let interval = setTimeout(() => {
              updateSent(false);
          }, 5000);
            return(<Sidebar>{message}</Sidebar>);
            
          }
    
        }
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
            .sendForm('service_74chunp', 'template_q9yqntc', form.current, {
              publicKey: 'DsqhztJWfodwNIwIN',
            })
            .then(
              () => {
                console.log('SUCCESS!');
                updateMessage("Your message has been sent.");
                updateSent(true);
              },
              (error) => {
                console.log('FAILED...', error.text);
                updateMessage("There has been an error. Your message was not sent.");
                updateSent(true);
              },
            );
        };

  return (
    <div className='contact-app'>

    <h1 className="contact-head">
      <div style={{'margin': 'auto', 'width':'150px' }} className='titlestyler'>Contact</div>
    </h1>
    <div className='contact-body'>
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
    Name:
    <br></br>
    <input required className='contact-box' type="text" name="from_name" />
    <br></br>
    E-mail:
    <br></br>
    <input required className='contact-box' type="text" name="user_email" />
    <br></br>
    Message:
    <br></br>
    <textarea required className='contact-box' name="message" rows="10" cols="30" size="50"></textarea>
    <br></br>
    <input className="buttoner" type="submit" value="Send" />
    <input className="buttoner" type="reset" value="Reset"/>
    </form>
    <div className="other-contact">
        <div style={{'marginBottom':'20px'}}>
          <div>
          Phone Number: 510-604-4520
          </div>
          Email: moshimo90696@gmail.com
        </div>

        Links:
        <div>
        <text>Github: </text><a href="https://github.com/Mihso">Github</a>
        </div>
        <div style={{"marginBottom" : "20px"}}>
        <text>LinkedIn: </text><a href="https://www.linkedin.com/in/mihso-soap">Mihso</a>
        </div>
        {open()}
    </div>
    </div>
    </div>
  );
}

export default Contact;