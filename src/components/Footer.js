import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="nav-left">
          <a href="#">
            <img src="images/z-letter.png" alt="z" className="footer-items" />
          </a>
        </div>
        <div className="footer-center">
          <a href="#" className="footer-items contact">Contact Me In :</a>
          <a href="https://www.linkedin.com/in/zaid-ayoub-848074260/">
            <img src="images/linkedin.png" alt="" className="footer-items" />
          </a>
          <a href="https://wa.me/0096279556703">
            <img src="images/whatsapp.png" alt="" className="footer-items" />
          </a>
          <a href="#">
            <img src="images/phone-call.png" alt="" className="footer-items" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
