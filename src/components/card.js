import React from 'react'
import Link from 'gatsby-link'
import styles from './card.module.css'
import PropTypes from 'prop-types'

const Card = props => (
  <div className={styles.container}>
    <div className={styles.image}>
      <Link to={props.link}><img src={props.src} /></Link>
    </div>
    <div className={styles.children}>
      {props.children}
    </div>
  </div>
)

Card.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  src: PropTypes.string,
  children: PropTypes.node,
}
export default Card
