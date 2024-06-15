import React from "react";
import "./About.css"; // Ensure this file contains the relevant CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons'; // Using faTwitterSquare for now
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div className="about-section paddingTB60 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <img src="/logo.png" alt="" className="about-logo" /> 
          </div>
          <div className="col-md-7 col-sm-6">
            <div className="about-title clearfix">
              <h1> <span>LOGOS</span></h1>
              <h3>Your Trusted E-commerce Platform</h3>
              <p className="about-paddingB">
                LOGOS is dedicated to providing the best online shopping experience. With a wide range of products, competitive prices, and top-notch customer service, we are your go-to e-commerce platform.
              </p>
              <div className="about-icons">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/">
                      <FontAwesomeIcon icon={faFacebookSquare} className="fa-3x social" id="social-fb" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <FontAwesomeIcon icon={faTwitterSquare} className="fa-3x social" id="social-tw" />
                    </a>
                  </li>
                  <li>
                    <a href="https://plus.google.com/">
                      <FontAwesomeIcon icon={faGooglePlusSquare} className="fa-3x social" id="social-gp" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:bootsnipp@gmail.com">
                      <FontAwesomeIcon icon={faEnvelopeSquare} className="fa-3x social" id="social-em" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-6">
            <div className="about-img">
              <img src="https://img.freepik.com/premium-vector/online-shopping-digital-technology-with-icon-blue-background-digital-fantastic-design-ecommerce-online-store-marketing-advertising-design-internet-supermarket-connect-vector-design_258787-5918.jpg?size=626&ext=jpg&ga=GA1.1.464830133.1710770472&semt=ais_user" alt="LOGOS" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
