import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import classes from './NavbarItem.module.css'
import Text from '../Text'

function NavbarItem(props) {
  const { value, onChange, className, active, icon, iconActive, children, ...componentProps } = props

  const handleClick = event => {
    onChange(event, value)
  }

  return (
    <button key={value} onClick={handleClick} className={clsx(classes.root, className)} {...componentProps}>
      <div className={classes.iconContainer}>
        <div
          className={clsx({
            [classes.indicator]: true,
            [classes.indicatorActive]: active,
          })}
        />
        <span className={clsx({ [classes.icon]: true, [classes.iconActive]: active })}>
          {active && iconActive ? iconActive : icon}
        </span>
      </div>
      <div>
        <Text
          type='label-medium'
          component='span'
          className={clsx({
            [classes.label]: true,
            [classes.labelActive]: active,
          })}
        >
          {children}
        </Text>
      </div>
    </button>
  )
}

Text.propTypes = {
  value: PropTypes.number,
  icon: PropTypes.any,
  iconSelected: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.string,
}

export default NavbarItem
