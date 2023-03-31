

import React from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import '../styles/Contact.css';

export const Contact = () => {
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m87ctbg', 'template_vaj2jlm', e.target, 'ON0TCChPiuN6TXoTs')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          swal({
             title:"Message Sent!",
             icon: "success"
          });
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <form  onSubmit={sendEmail}>
      <label></label>
      <input required type="text" name="user_name" placeholder="Name"/>
      <label></label>
      <input required type="email" name="user_email" placeholder="Email"/>
      <label></label>
      <textarea required name="message" placeholder="Your message"/>
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact