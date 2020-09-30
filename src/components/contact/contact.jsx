import React from "react";
import "./contact.css";

import { ReactComponent as Copy } from "../../assets/copy.svg";

class Contact extends React.Component {
  copyCodeToClipboard = () => {
    const el = this.textArea;
    el.select();
    document.execCommand("copy");
  };

  render() {
    return (
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-header">CONTACT</div>
          <div className="email-container">
            <textarea
              className="email"
              ref={(textarea) => (this.textArea = textarea)}
              value="akanshat1999@gmail.com"
              spellCheck="false"
            ></textarea>
            <div
              className="copy-container"
              onClick={() => this.copyCodeToClipboard()}
            >
              <Copy className="copy-icon" fill="red" stroke="white" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
