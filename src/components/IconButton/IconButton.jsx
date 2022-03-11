import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import StateLayer from '../StateLayer'

const Root = styled.button`
  -webkit-tap-highlight-color: transparent;
  position: relative;
  height: 48px;
  width: 48px;
  margin: -12px;
  overflow: hidden;
  font-size: 24px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ $contentColor, theme }) => theme[$contentColor]};
  background-color: transparent;
`

function IconButton(props) {
  const { href, children, contentColor, ...rootProps } = props

  const tag = href && 'a'

  return (
    <Root as={tag} $contentColor={contentColor} href={href} {...rootProps}>
      <StateLayer contentColor={contentColor}/>
      {children}
    </Root>
  )
}

IconButton.defaultProps = {
  contentColor: 'onSurface'
}

IconButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  contentColor: PropTypes.string,
}

export default IconButton
