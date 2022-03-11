import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const Root = styled.div`
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  border-radius: inherit;
  background-color: ${({ $contentColor, theme }) => theme[$contentColor]};
  opacity: 0;
  transition: opacity 200ms ease-in;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    opacity: 0.08;
  }

  &:focus,
  &:active {
    opacity: 0.12;
  }
`

function StateLayer(props) {
  const { contentColor } = props

  return <Root $contentColor={contentColor} />
}

StateLayer.defaultProps = {
  contentColor: 'onSurface',
}

StateLayer.propTypes = {
  contentColor: PropTypes.string,
}

export default StateLayer
