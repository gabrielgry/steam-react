import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Surface from '../Surface'

const Root = styled(Surface)`
  position: ${({ sticky }) => (sticky ? 'sticky' : 'fixed')};
  top: ${({ sticky }) => (sticky ? '-1px' : '0')}; /* Trick to detect if is stuck */
  right: 0;
  left: 0;
  height: ${({ sticky }) => (sticky ? 'calc(64px + 1px)' : '64px')}; /* Compensation for the trick */
  display: flex;
  align-items: center;
  padding: 0 16px;
  transition: background-color 200ms;
  z-index: 100;
`

function Appbar(props) {
  const [isStuck, setIsStuck] = useState(false)
  const rootRef = useRef(null)

  const { sticky, children, ...rootProps } = props

  function handleStickyChange([entry]) {
    entry.intersectionRatio < 1 ? setIsStuck(true) : setIsStuck(false)
  }

  useEffect(() => {
    if (!sticky) return
    const cachedRootdRef = rootRef.current
    const stickyObserver = new IntersectionObserver(handleStickyChange, { threshold: 1 })
    if (cachedRootdRef) stickyObserver.observe(cachedRootdRef)
    return () => {
      if (cachedRootdRef) stickyObserver.unobserve(cachedRootdRef)
    }
  }, [rootRef, sticky])

  return (
    <Root ref={rootRef} component='header' elevation={isStuck ? 2 : 0} shadows={isStuck} sticky={sticky} {...rootProps}>
      {children}
    </Root>
  )
}

Appbar.propTypes = {}

Appbar.propTypes = {
  sticky: PropTypes.bool,
  children: PropTypes.node,
}

export default Appbar
