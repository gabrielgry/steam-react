import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import classes from './Appbar.module.css'

function Appbar(props) {
  const { sticky, transparent, className, children } = props

  return (
    <header
      className={clsx({
        [classes.root]: true,
        [className]: true,
        [classes.rootTransparent]: transparent,
        [classes.rootSticky]: sticky,
      })}
    >
      {children}
    </header>
  )
}

Appbar.propTypes = {}

Appbar.propTypes = {
  centered: PropTypes.bool,
  sticky: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  transparent: PropTypes.bool,
}

export default Appbar
