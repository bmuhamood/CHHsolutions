import { Component } from "react";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import "./style.css";
class Footer extends Component {
  render() {
    return (
      <footer id="contact" className="container footer__container">
        <div className="about">
          <img
            src="https://chhsolutions.ae/wp-content/uploads/2019/09/Logo-1.jpg"
            alt="CHH Solutions"
            width="150"
            height="60"
            />
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste saepe
            voluptatum repellat placeat aperiam. Molestiae consectetur molestias
            magni laudantium doloremque!
          </p>
          <ul className="footer__socials">
            <li>
              <a href="#">
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <CgInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillTwitterSquare />
              </a>
            </li>
          </ul>
        </div>
        <div className="services">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#" className="text">
                Mobile APPS Developments and Features
              </a>
            </li>
            <li>
              <a href="#" className="text">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="text">
                Graphic Designing
              </a>
            </li>
            <li>
              <a href="#" className="text">
                Digital Marketing
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <address className="text">
                Office: Al Ras - Dubai, Level 3 - Room# 303
              </address>
            </li>
            <li>
              <a href="tel:+971566601860" className="text">
                Tel : +971566601860 | +971552481928 | +966500840550 
              </a>
            </li>
            <li>
              <a href="mailto:ch2022broker@gmail.com" className="text">
                Email: ch2022broker@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
