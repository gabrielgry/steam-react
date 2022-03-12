import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const Root = styled.img`
  display: block;
  border-radius: ${({ $type }) => {
    if ($type === 'full') return '12px'
    if ($type === 'corner') return '12px 0 0 0'
    if ($type === 'top') return '12px 12px 0 0'
  }};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  height: auto;
  width: 100%;
`

function CardImage(props) {
  const { type, aspectRatio, ...rootProps } = props

  return <Root $type={type} $aspectRatio={aspectRatio} {...rootProps} />
}

CardImage.defaultProps = {
  type: 'full',
}

CardImage.propTypes = {
  type: PropTypes.oneOf(['full', 'corner', 'top']),
  aspectRatio: PropTypes.string,
}

export default CardImage
