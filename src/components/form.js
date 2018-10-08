import React from 'react'
import { Link } from 'gatsby'
import { Spring, config} from 'react-spring'

const Form = ({ siteTitle }) => (
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
    {(props) =>
      <div style={props} className="form">
      <div className="inner">
      <div>
        <img src={require('../images/secondary-image.png')} alt="technicians image"/>
      </div>
      <h3>When You Call VitalStorm, You’ll Receive Exceptional Service</h3>
      </div>
    </div>
  }
    </Spring>
)

export default Form
