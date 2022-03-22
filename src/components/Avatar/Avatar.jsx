import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import IconButton from '../IconButton'

const AvatarButton = styled(IconButton)`
  font-size: 30px;
`

const Image = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 15px;
`

function Avatar(props) {
  const { src, alt, placeholderIcon, ...rootProps } = props

  return (
    <AvatarButton contentColor='onSurfaceVariant' {...rootProps}>
      {src ? <Image src={src} alt={alt} width={30} height={30} /> : placeholderIcon}
    </AvatarButton>
  )
}

Avatar.defaultProps = {}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  placeholderIcon: PropTypes.element,
}

export default Avatar
