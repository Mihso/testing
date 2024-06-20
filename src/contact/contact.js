import './contact.css';
import { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

        const form = useRef();
      
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
    <input className="buttoner" type="reset" value="Reset" />
    </form>
    </div>
  );
}

export default Contact;