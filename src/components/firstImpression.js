import React from 'react'
import { Link } from 'gatsby'
import { Spring, config} from 'react-spring'

const First = ({ siteTitle }) => (
  <Spring
    from={{
    opacity: 0
    }}
    to={{
    opacity: 1
    }}
    config={{ tension: 1000, friction: 200, delay: 200, velocity: 100 }}
  >
  {(props) =>
    <div style={props} className="firstwrapper">
    <div className="firstimpression">
    <div className="messaging">
      <Spring
        from={{
          opacity: 0,
          transform: 'translate3d(0px,20px,0)'
        }}
        to={{
          opacity: 1,
          transform: 'translate3d(0px,0,0)'
        }}
        delay={600}
        config={config.stiff}
      >
      {(props) => <h2 style={props}>Relax, weve got you. </h2>}
      </Spring>
      <Spring
        from={{
          opacity: 0,
          transform: 'translate3d(0px,20px,0)'
        }}
        to={{
          opacity: 1,
          transform: 'translate3d(0px,0,0)'
        }}
        delay={800}
        config={config.stiff}
      >
      {(props) =>  <p style={props}>VitalStorm is a digital marketing agency that specializes in marketing for home service companies. We’ve been in business since 2003, and we’ve been focused on serving the home service industry all the while. <b>Our clients trust us</b> because we understand their sales goals and we know how to meet them.</p>}
      </Spring>
      <Spring
        from={{
          opacity: 0,
          transform: 'translate3d(0px,20px,0)'
        }}
        to={{
          opacity: 1,
          transform: 'translate3d(0px,0,0)'
        }}
        delay={1000}
        config={config.stiff}
      >
      {(props) => <div style={props} className="btn_row"><Link to='/'>Find out how</Link></div> }
      </Spring>

    </div>
    <Spring
      from={{
        opacity: 0,
        transform: 'translate3d(60px,20px,0)'
      }}
      to={{
        opacity: 1,
        transform: 'translate3d(0px,0,0)'
      }}
      delay={1200}
      config={config.slow}
    >
    {(props) =>  <div className="img_container"> <img style={props} src={require('../images/main-image.png')} />   </div> }
    </Spring>
    </div>
    </div>}

    </Spring>
)

export default First
