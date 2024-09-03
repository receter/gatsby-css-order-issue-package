import React from 'react'
import * as styles from './styles.module.css'

export function Headline({ children, className }) {
  return <h2
    className={`${styles.headline} ${className}`}
  >
    {children}
  </h2>
}