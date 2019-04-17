import React from "react";
class Contact extends React.Component {

  render() {
    return (
        <form method="POST" action="https://formspree.io/osasigbinedion@gmail.com">
        <div>
        <input type="email" name="email" placeholder="Your email" style = {{ flex: 1, alignItems: 'stretch' }}/>
        </div>
        <div>
        <textarea name="message" placeholder="Message" style={{height: 100, borderColor: 'gray', borderWidth: 1}}/>
        </div>
        <div>
        <button type="submit">Send</button>
        </div>
      </form>
    );
  }
}
export default Contact;