import React from 'react'
import { Link } from 'gatsby'

const First = ({ siteTitle }) => (
  <div className="firstwrapper">
  <div className="firstimpression">
  <div className="messaging">
    <h2>Relax, we've got you. </h2>
    <p>VitalStorm is a digital marketing agency that specializes in marketing for home service companies. We’ve been in business since 2003, and we’ve been focused on serving the home service industry all the while. <b>Our clients trust us</b> because we understand their sales goals and we know how to meet them.</p>
    <div className="btn_row">
      <Link to='/'>Find out how</Link>
    </div>
  </div>
  <div className="img_container">
    <img src={require('../images/main-image.png')} />
  </div>
  </div>
  </div>
)

export default First
