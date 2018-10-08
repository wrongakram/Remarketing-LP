import React from 'react'
import { Form, Text } from 'informed';

const FormField = () => (
    <Form id="basic-form">
      <Text field="name" placeholder="name" id="form-name" />
      <Text field="email" placeholder="email" id="form-email" />
      <button type="submit">Submit</button>
    </Form>
)

const FormSection = () => (
      <div className="form">
      <div className="inner">
      <div className="image_container">
        <img src={require('../images/secondary-image.png')} alt="technicians"/>
      </div>
        <div className="form_container">
          <h3>Is your ppc guy doing these 8 things?</h3>
          <p>Most digital marketing agencies offer PPC services, but not all of them offer our attention to detail, proactive nature or can-do attitude. Give us your email to receive our FREE checklist and see how your agency stacks up.</p>
          <FormField/>
        </div>
      </div>
    </div>
)

export default FormSection
