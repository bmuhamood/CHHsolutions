import { Component } from "react";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <a href="mailto:ch2022broker@gmail.com">
          <AiFillMail />
          <span>ch2022broker@gmail.com</span>
        </a>

        <a href="tel:+971566601860">
          <AiFillPhone />
          <span>+971566601860 | +971552481928 | +966500840550 </span>
        </a>
      </div>
    );
  }
}

export default Contact;
