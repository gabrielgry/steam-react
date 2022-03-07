import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import classes from './IconButton.module.css'

function IconButton(props) {
  const { href, children, className, style, ...componentProps } = props

  const Component = href ? 'a' : 'button'

  return (
    <Component className={clsx(classes.root, className)} style={style} {...componentProps}>
      {children}
    </Component>
  )
}

IconButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default IconButton
