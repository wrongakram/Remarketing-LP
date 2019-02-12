import React from 'react';
import Modal from 'react-responsive-modal';
import MaskedInput from 'react-text-mask';
var validator = require("email-validator");



class FormSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  onOpenModal = (e) => {
   e.preventDefault();
   this.setState({ open: true });
 };

  onCloseModal = () => {
   this.setState({ open: false });
 };

 handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    if(validator.validate(this.state.value)) {
          const data = new FormData(event.target);
            fetch('https://metrics.vitalstorm.com/email_form_submission/c36a63d9-5c90-44b7-961b-3a0f300a9e84/', {
            method: 'POST',
            body: data,
          }).then(response => {
              if (response.status >= 200 && response.status < 300) {
                console.log(response);
                window.location.reload();
                  return response;
                } else {
                 alert('The form is currently not working, We are sorry and our team is working on a fix.');
                }
          }).catch(err => err);
        } else {
          alert('Enter a proper email please.')
        }
    }
  render() {
    const { open } = this.state;
    return (
      <div className="btn_row">
      <a href="/" onClick={this.onOpenModal}>{this.props.name}</a>
      <Modal open={open} onClose={this.onCloseModal} center>
      <div className="inner">
      <h4 style={{textAlign: 'center', fontSize: "24px", marginTop: '30px', }}>We Deliver Deals</h4>
        <div className="form_container">
            <form onSubmit={this.handleSubmit} id="basic-form">
            <label htmlFor="name">Name</label>
            <input required placeholder="Paul George" id="form-name" type="text" name="name" />
            <label htmlFor="honeypot">Email</label>
            <input value={this.state.value} onChange={this.handleChange} required placeholder="pg13@okcthunder.com" id="form-email" type="email" name="honeypot" minlength="3" maxlength="64"/>
            <label htmlFor="tel">Phone #</label>
            <MaskedInput mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} required placeholder="(919) 014-4756" id="form-tel" type="tel" name="tel" />
            <label htmlFor="message">Your Request</label>
            <textarea required placeholder="How can we help you?" id="form-message" type="text" name="message" />
            <input id="mail-honey" type="email" name="email"/>
            <input type="hidden" name="gclid" value=""/>
            <input type="hidden" name="vsref" value=""/>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </Modal>
    </div>
    );
  }
}

export default FormSection
