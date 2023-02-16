import React from "react";

const Footer = () => {
  return (
    <footer>
      <h1 className="footer_h1">The Best Choice</h1>
      <img src="./images/mascara.png" alt="footer__logo" class="footer__logo" />
      <ul className="footer__list">
        <li className="footer__item">Support</li>
        <li className="footer__item">Privacy Policy</li>
        <li className="footer__item">Terms and Conditions</li>
      </ul>
      <p className="footer__info">© 2022 Rare Beauty, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
