import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Text from '../Text'

const Root = styled.span`
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-right: auto;
`

const Name = styled(Text)`
  margin-left: 8px
`

function Logo(props) {
  const {children, icon} = props

  return (
    <Root>
      {icon}
      <Name type='title-large'>{children}</Name>
    </Root>
  )
}

Logo.defaultProps = {}

Logo.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.element,
}

export default Logo
