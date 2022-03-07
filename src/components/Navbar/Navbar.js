import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import classes from './Navbar.module.css'

function Navbar(props) {
  const { children, className, value, onChange } = props

  return (
    <nav className={clsx(classes.root, className)}>
      {React.Children.map(children, (child, childIndex) => {
        const childKey = child.props.value === undefined ? childIndex : child.props.key

        return React.cloneElement(child, {
          value: childKey,
          active: childKey === value,
          onChange,
        })
      })}
    </nav>
  )
}

Text.propTypes = {
  value: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.element,
  onChange: PropTypes.func,
}

export default Navbar
