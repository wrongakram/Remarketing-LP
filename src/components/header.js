import React from 'react'
import { Link } from 'gatsby'
import '../style/header.scss'

const Header = ({ siteTitle }) => (
  <div className="nav-wrapper">
    <div className="inner">
        <Link to="/">
          <img alt="vitalstorm logo" src={require('../images/vitalstorm-logo.png')}/>
        </Link>
        <Link to="/">
          <h3 className="navnumber">Get Leads (123) 456-7890</h3>
        </Link>
    </div>
  </div>
)

export default Header
