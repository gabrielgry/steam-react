import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import classes from './Text.module.css'

const elements = {
  'display-large': 'h1',
  'display-medium': 'h1',
  'display-small': 'h1',
  'headline-large': 'h2',
  'headline-medium': 'h3',
  'headline-small': 'h4',
  'title-large': 'h5',
  'title-medium': 'h5',
  'title-small': 'h5',
  'label-large': 'h6',
  'label-medium': 'h6',
  'label-small': 'h6',
  'body-large': 'p',
  'body-medium': 'p',
  'body-small': 'p',
}

function Text(props) {
  const { type, component, className, style, ...componentProps } = props

  let ComponentElement = component || elements[type]

  return (
    <ComponentElement className={clsx(classes.root, classes[type], className)} style={style} {...componentProps}>
      {props.children}
    </ComponentElement>
  )
}

Text.propTypes = {
  type: PropTypes.oneOf(Object.keys(elements)).isRequired,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Text
