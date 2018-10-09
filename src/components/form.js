import React from 'react'


class FormSection extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('https://metrics.vitalstorm.com/email_form_submission/ODE0ZmMxODg2YjQwYjI3YzgzOWVhMWE2OTU3ZjQxYTQ/', {
      method: 'POST',
      body: data,
    });
    alert('form submitted');
    document.getElementById("basic-form").reset();
  }

  render() {
    return (
      <div className="form">
      <div className="inner">
      <div className="image_container">
        <img src={require('../images/secondary-image.png')} alt="technicians"/>
      </div>
        <div className="form_container">
          <h3>Is your ppc guy doing these 8 things?</h3>
          <p>Most digital marketing agencies offer PPC services, but not all of them offer our attention to detail, proactive nature or can-do attitude. Give us your email to receive our FREE checklist and see how your agency stacks up.</p>
          <form onSubmit={this.handleSubmit} id="basic-form">

            <input required placeholder="Name" id="form-name" type="text" />

            <input required placeholder="Email address" id="form-email" type="email" />

            <button >Send it to me</button>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

export default FormSection
