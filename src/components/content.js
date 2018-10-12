import React from 'react'
import { Spring, config} from 'react-spring'

const Content = () => (
  <Spring
  from={{
    opacity: 0,
    transform: 'translate3d(0px,10px,0)'
  }}
  to={{
    opacity: 1,
    transform: 'translate3d(0px,0,0)'
  }}
  delay={2000}
  config={config.molasses}
  >
    {(props) => <div style={props} className="content">
      <div className="inner">
      <h3>When You Call VitalStorm, You’ll Receive Exceptional Service</h3>
      <ul>
        <li>Instant reporting through our exclusive platform, VitalStorm Metrics</li>
        <li>A Client Relationship Manager who will take care of all your needs</li>
        <li>A team of PPC experts who stay up to date on all the latest trends</li>
        <li>A company with positive values that positively impact our community and our clients</li>
        <li>Google and Bing partners</li>
      </ul>
      <p>VitalStorm is unique from other digital marketing agencies because we focus on your industry. We know how to make your technicians happy: by bringing in new jobs for them. While we offer web design and maintenance, social media and blogging packages, our bread and butter for lead generation is PPC.</p>
      <p>Don’t settle for some digital marketing agency that won’t go the extra mile for you. Choose VitalStorm instead.</p>
      <div className="partners">
        <img alt="google partners" src={require('../images/google-partner.png')} />
        <img alt="bing partners" src={require('../images/bing-partner.png')} />
      </div>
      </div>
      <img alt="geo graphic" className="geo" src={require('../images/geo.png')} />
    </div>}
    </Spring>
)

export default Content
