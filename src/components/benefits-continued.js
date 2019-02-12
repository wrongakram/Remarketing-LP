import React from 'react';
import FormSection from './form';

class BenefitsCont extends React.Component {
  render() {
    return (
      <div className="benefits-continued">
      <div className="inner">
      <div className="image_container">
        <img src={require('../images/footer-image.png')} alt="technicians"/>
      </div>
        <div className="benefits_container">
          <ol>
            <li>With VitalStorm, you’ll have a single point of contact. Getting in touch is always easy.</li>
            <li>We provide straight-forward reporting, so you can easily understand how your campaigns are performing.</li>
            <li>We manage your PPC daily. Our Internet Marketing Specialists never set it and forget it.</li>
            <li>We’re proactive, rather than reactive. We’re always doing research to find out how we can improve your campaigns.</li>
          </ol>
        </div>
      </div>
      <div className="benefits-cta">
        <p>Most digital marketing agencies offer PPC services, but not all of them offer our attention to detail, proactive nature or can-do attitude. Take the lead in local digital marketing – with the leaders in the field.</p>
        <FormSection name="get leads"/>
      </div>
    </div>
    );
  }
}

export default BenefitsCont
