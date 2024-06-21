import './contact.css';
import { useState,useRef, useEffect } from 'react';
import Sidebar from '../sidebar/sidebar';
import emailjs from '@emailjs/browser';

function Contact() {
const [sent, updateSent] = useState(false);
        const form = useRef();
        function open(){
          if(sent){
            return(<Sidebar>{"Your email has been sent"}</Sidebar>);
          }
          let interval = setInterval(() => {
            updateSent(false);
        }, 5000);
        }

        // useEffect(() => {
        //   if(sent){
        //   let interval = setInterval(() => {
        //       updateSent(false);
        //   }, 5000);
        // }
        // },[]);
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
            .sendForm('service_74chunp', 'template_q9yqntc', form.current, {
              publicKey: 'DsqhztJWfodwNIwIN',
            })
            .then(
              () => {
                console.log('SUCCESS!');
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
        };

  return (
    <div className='contact-app'>

    <h1 className="contact-head">Contact</h1>
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
    Name:
    <br></br>
    <input className='contact-box' type="text" name="from_name" />
    <br></br>
    E-mail:
    <br></br>
    <input className='contact-box' type="text" name="user_email" />
    <br></br>
    Message:
    <br></br>
    <textarea className='contact-box' name="message" rows="10" cols="30" size="50"></textarea>
    <br></br>
    <input className="buttoner" type="submit" value="Send" />
    <input className="buttoner" type="reset" value="Reset" onClick={() => updateSent(!sent)}/>
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
  );
}

export default Contact;