import React from 'react';

class Benefits extends React.Component {
  render() {
    return (
      <div className="benefits">
      <h3>Benefits of working with VitalStorm</h3>
      <div className="inner">
        <div className="benefits_container">
          <ol>
            <li>We give you real, actionable leads – not just phone calls.</li>
            <li>You’ll know exactly where your money is going, thanks to our real-time reporting platform, VitalStorm Metrics.</li>
            <li>We don’t have long-term contracts. You’re always free to walk away.</li>
            <li>We’re fluent in the home service industry. We understand your needs and don’t try to squeeze your brand into a one-size-fits-all marketing effort.</li>
          </ol>
        </div>
        <div className="image_container">
          <img src={require('../images/secondary-image.png')} alt="technicians"/>
        </div>
      </div>
    </div>
    );
  }
}

export default Benefits
