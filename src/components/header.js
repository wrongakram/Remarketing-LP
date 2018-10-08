import React from 'react'
import { Link } from 'gatsby'
import '../style/header.scss'
import { Spring, config} from 'react-spring'

const Header = ({ siteTitle }) => (
  <Spring
  from={{
    opacity: 0,
    transform: 'translate3d(0px,10px,0)'
  }}
  to={{
    opacity: 1,
    transform: 'translate3d(0px,0,0)'
  }}
  delay={1800}
  config={config.molasses}
  >
  {(props) =>   <div style={props} className="nav-wrapper">
      <div className="inner">
          <Link to="/">
            <img alt="vitalstorm logo" src={require('../images/vitalstorm-logo.png')}/>
          </Link>
          <Link to="/">
            <h3 className="navnumber">Get Leads (123) 456-7890</h3>
          </Link>
      </div>
    </div>}
  </Spring>
)

export default Header
