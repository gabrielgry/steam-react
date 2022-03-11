import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Text'
import styled, { keyframes } from 'styled-components/macro'

const Root = styled.button`
  position: relative;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  border: none;
  border-radius: 0;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 12px 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 32px auto;
  row-gap: 4px;
`

const IconContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const showIndicator = keyframes`
  from {
    opacity: 0;
    transform: scaleX(0);
  }
  20% {
    opacity: 1;
    transform: scaleX(0.2);
  }
  to {
    width: 64px;
    transform: scaleX(1);
  }
`

const Indicator = styled.div`
  width: ${({ active }) => (active ? '64px' : '32px')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  animation-name: ${({ active }) => (active ? showIndicator : '')};
  background-color: ${({ theme }) => theme.secondaryContainer};
  height: 32px;
  border-radius: 16px;
  animation-duration: 250ms;
  animation-timing-function: ease-out;
`

const IconWrapper = styled.span`
  position: absolute;
  width: 24px;
  height: 24px;
  font-size: 24px;
  color: ${({ active, theme }) => (active ? theme.onSecondaryContainer : theme.onSurfaceVariant)};
`

const Label = styled(Text)`
  color: ${({ active, theme }) => (active ? theme.onSurface : theme.onSurfaceVariant)};
`

function NavbarItem(props) {
  const { value, onChange, active, icon, iconActive, children, ...rootProps } = props

  const handleClick = event => {
    onChange(event, value)
  }

  return (
    <Root key={value} onClick={handleClick} active={active} {...rootProps}>
      <IconContainer>
        <Indicator active={active} />
        <IconWrapper active={active}>{active && iconActive ? iconActive : icon}</IconWrapper>
      </IconContainer>
      <Label type='label-medium' component='span' active={active}>
        {children}
      </Label>
    </Root>
  )
}

Text.propTypes = {
  value: PropTypes.number,
  icon: PropTypes.any,
  iconActive: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.string,
}

export default NavbarItem
