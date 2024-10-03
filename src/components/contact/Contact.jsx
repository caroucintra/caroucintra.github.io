import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import Popup from 'reactjs-popup';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID, 
        process.env.REACT_APP_TEMPLATE_ID, 
        form.current, 
        {
        publicKey: 'sVfnb9eY-NGlASIQZ',
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED... ', error.text);
        },
      );


  };
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Send me an email!</h3>
          <p className="contact__details">I'm open to chat! {":)"}</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input 
              type="text" 
              className="contact__form-input" 
              placeholder='Name'
              name='from_name'/>
            </div>

            <div className="contact__form-div">
              <input 
              type="email" 
              className="contact__form-input" 
              placeholder='Email'
              name='from_email'/>
            </div>
          </div>

          <div className="contact__form-div">
              <input 
              type="text" 
              className="contact__form-input" 
              placeholder='Subject'
              name='from_subject'/>
          </div>
          <div className="contact__form-div">
              <textarea
              id="" 
              cols="30" 
              rows="10" 
              className="contact__form-input contact__form-area" 
              placeholder='Message'
              name='from_message'/>
            </div>

            <Popup modal nested trigger={<input type='submit' className="btn contact__form-send" value="Send"/>}>
            {
              close => (
                <div className="modal">
                  <div className="contact__popup">Thank you for your message!</div>
                  <div>
                    <button className='btn contact__btn' onClick=
                          {() => close()}>
                              Close
                      </button>
                  </div>
                </div>
              )
            }
            </Popup>
        </form>
      </div>
    </section>
  )
}

export default Contact
