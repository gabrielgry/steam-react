import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Surface from '../Surface'

const Spacer = styled(Surface)`
  height: 64px;
  width: 100%;
`

const Root = styled(Surface)`
  width: 100%;
  min-height: ${({ fullHeight }) => (fullHeight ? '100vh' : 'calc(100vh - 64px)')};
  padding: 16px;
  padding-bottom: ${({ navbar }) => (navbar ? '80px' : '0')};
`

function Page(props) {
  const { spacer, navbar, fullHeight, children, ...rootProps } = props

  return (
    <>
      {spacer && <Spacer surfaceColor={'background'} />}
      <Root
        component='main'
        surfaceColor={'background'}
        contentColor={'onBackground'}
        fullHeight={fullHeight}
        navbar={navbar}
        {...rootProps}
      >
        {children}
      </Root>
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  spacer: PropTypes.bool,
  navbar: PropTypes.bool,
  fullHeight: PropTypes.bool,
  surfaceColor: PropTypes.string,
  contentColor: PropTypes.string,
}

export default Page
