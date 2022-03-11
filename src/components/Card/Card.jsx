import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Surface from '../Surface'

const Root = styled(Surface)`
  position: relative;
  border-radius: 12px;
  outline: ${({ type, theme }) => type === 'outlined' && `1px solid ${theme.outline}`};
`

function Card(props) {
  const { type, component, surfaceColor: surfaceColorProp, children, ...rootProps } = props

  // Type "elevated" styles
  let surfaceColor = 'surface'
  let elevation = 1
  if (type === 'filled') {
    surfaceColor = surfaceColorProp || 'surfaceVariant'
    elevation = 0
  }
  if (type === 'outlined') {
    elevation = 0
  }

  return (
    <Root
      component={component}
      surfaceColor={surfaceColor}
      elevation={elevation}
      shadows={type === 'elevated'}
      type={type}
      {...rootProps}
    >
      {children}
    </Root>
  )
}

Card.defaultProps = {
  type: 'filled',
  component: 'section',
}

Card.propTypes = {
  type: PropTypes.oneOf(['elevated', 'filled', 'outlined']),
  component: PropTypes.elementType,
  surfaceColor: PropTypes.string,
  children: PropTypes.node,
}

export default Card
