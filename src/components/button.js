import React from 'react'
import { Link } from 'gatsby'
import { buttonStyle } from '../styles/button.module.css'

const Button = props => (
  <Link to={props.to}>
    <div
      className={buttonStyle}
      style={{ background: props.buttonColor, color: props.buttonFontColor , border: props.buttonBorder}}
    >
      {props.buttonName}
    </div>
  </Link>
)

export default Button
