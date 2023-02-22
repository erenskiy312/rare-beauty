import React from "react";

const AboutUs = () => {
  return (
    <section className="aboutus">
      <div>
        <div className="about__img">
          <img
            className="about__img"
            src="https://cdn.shopify.com/s/files/1/0314/1143/7703/files/about-video-tout-desktop_33e8add7-dcb4-42d2-aa7c-3bb7eb55badd_1080x.jpg?v=1613736828"
          />{" "}
        </div>
      </div>

      <div className="flex">
        <div className="about__header">
          <h2 className="aboutus__title">About Us</h2>
          <div className="about__text">
            <p>
              Rare Beauty is breaking down unrealistic standards of perfection.
              ​ This is makeup made to feel good in, without hiding what makes
              you unique—because Rare Beauty is not about being someone else,
              but being who you are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
