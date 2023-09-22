import { Component } from "react";
import Contact from "./Contact";
import Socials from "./Socials";
// import Socials from "./languageNOTFINISHED";
import "./style.css";
class Header extends Component {
  render() {
    return (
      <header>
        <div className="container container__header">
          <Contact />
          <Socials />
          {/* <languageNOTFINISHED /> */}
        </div>
      </header>
    );
  }
}

export default Header;
