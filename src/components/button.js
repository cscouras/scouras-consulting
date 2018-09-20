import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/button.module.css'

const Button = props => (
  <Link to={props.to}>
    <div
      className={styles.buttonStyle}
      style={{ background: props.buttonColor }}
    >
      {props.buttonName}
    </div>
  </Link>
)

export default Button
