import React from 'react'
var Scroll = require('react-scroll');
var Element = Scroll.Element;




class FormSection extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
      fetch('https://metrics.vitalstorm.com/email_form_submission/MTk2ZTc2NTNhZWFlMzljZWUyOWQ2ZjQ1YmZjZTM1NmY/', {
      method: 'POST',
      body: data,
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response;
            console.log(response);
            window.location.reload();
          } else {
           console.log('Something went wrong');
          }
    }).catch(err => err);
    document.querySelector('#basic-form').reset();
      setTimeout(() => {
        const response = {
          file: 'http://vitalstorm.com/remarketing.pdf',
        };
        window.open(response.file);
      }, 100);
  }

  render() {
    return (
      <div className="form">
      <Element name="scroll-to-element" className="element"></Element>
      <div className="inner">
      <div className="image_container">
        <img src={require('../images/secondary-image.png')} alt="technicians"/>
      </div>
        <div className="form_container">
          <h3>Is your ppc guy doing these 8 things?</h3>
          <p>Most digital marketing agencies offer PPC services, but not all of them offer our attention to detail, proactive nature or can-do attitude. Give us your email to receive our FREE checklist and see how your agency stacks up.</p>
          <form onSubmit={this.handleSubmit} id="basic-form">
            <input required placeholder="Name" id="form-name" type="text" name="name" />
            <input required placeholder="Email address" id="form-email" type="email" name="honeypot" minlength="3" maxlength="64"/>
            <input id="mail-honey" type="text" name="email"/>
            <input type="hidden" name="gclid" value=""/>
            <input type="hidden" name="vsref" value=""/>
            <button type="submit">Send it to me</button>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

export default FormSection
