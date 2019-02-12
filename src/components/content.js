import React from 'react'
import { Spring, config} from 'react-spring'
import { Parallax } from 'react-scroll-parallax';
import Partners from './partners'
import FormSection from './form';

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
      <Partners />
      <p>VitalStorm is unique from other digital marketing agencies because we focus on your industry. We know how to make your technicians happy: by bringing in new jobs for them. While we offer web design and maintenance, social media and blogging packages, our bread and butter for lead generation is PPC.</p>
      <p>Don’t settle for some digital marketing agency that won’t go the extra mile for you. Choose VitalStorm instead.</p>
      <FormSection name="choose exceptional service" />
      </div>
      <Parallax
        className="geo"
        offsetYMax={40}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure">
              <img alt="geo graphic"  src={require('../images/geo.png')} />
      </Parallax>
      <Parallax
        className="geotop"
        offsetYMax={20}
        offsetYMin={-60}
        slowerScrollRate
        tag="figure">
        <img alt="geo" src={require('../images/geo_top.png')} />
      </Parallax>
    </div>}
    </Spring>
)

export default Content
