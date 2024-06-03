import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Tem alguma dúvida?</h1>
      <h1 className="primary-heading">Podemos te ajudar</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="seuemail@gmail.com" />
        <button className="secondary-button">Envie</button>
      </div>
    </div>
  );
};

export default Contact;
