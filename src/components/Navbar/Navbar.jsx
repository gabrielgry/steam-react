import React from 'react'
import PropTypes from 'prop-types'
import Surface from '../Surface'
import styled from 'styled-components/macro'

const Root = styled(Surface)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48px, 1fr));
  grid-auto-rows: 80px;
  column-gap: 8px;
  z-index: 200;
`

function Navbar(props) {
  const { value, onChange, children, ...rootProps } = props

  return (
    <Root elevation={2} surfaceColor={'surface'} {...rootProps}>
      {React.Children.map(children, (child, childIndex) => {
        const childKey = child.props.value === undefined ? childIndex : child.props.key

        return React.cloneElement(child, {
          value: childKey,
          active: childKey === value,
          onChange,
        })
      })}
    </Root>
  )
}

Text.propTypes = {
  value: PropTypes.number,
  children: PropTypes.element,
  onChange: PropTypes.func,
}

export default Navbar
