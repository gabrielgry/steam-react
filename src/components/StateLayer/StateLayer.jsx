import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components/macro'
import { transparentize } from 'color2k'

const RIPPLE_EFFECT_DURATION = 600

const showRipple = keyframes`
  from {
    transform: scale(0);
  }
  50%{
    transform: scale(1);
  }
  75% {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(1);
    opacity: 0;
  }
`

const Ripple = styled.div`
  position: relative;
  transform: scale(0);
  border-radius: 50%;
  pointer-events: none;
  background-color: ${({ $contentColor, theme }) => transparentize(theme[$contentColor], 0.88)};

  &.show {
    animation: ${showRipple} ${RIPPLE_EFFECT_DURATION}ms linear forwards;
  }
`

const Root = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: inherit;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
`

function getRippleSize(event, parent) {
  let furtherEdgeY = Math.max([event.offsetY], parent.offsetHeight - event.offsetY)
  let furtherEdgeX = Math.max([event.offsetX], parent.offsetWidth - event.offsetX)
  return Math.sqrt(Math.pow(furtherEdgeY, 2) + Math.pow(furtherEdgeX, 2))
}

function applyRipplePositionAndSize(ripple, size, event) {
  ripple.style.width = size * 2 + 'px'
  ripple.style.height = size * 2 + 'px'
  ripple.style.top = `${event.offsetY - size}px`
  ripple.style.left = `${event.offsetX - size}px`
}

function StateLayer(props) {
  const rootRef = useRef(null)
  const rippleRef = useRef(null)

  const { contentColor } = props

  useEffect(() => {
    const cachedRootRef = rootRef
    const cachedRippleRef = rippleRef
    const parent = cachedRootRef.current.parentElement
    const ripple = cachedRippleRef.current

    let timerId = null

    function handleParentClick(event) {
      ripple.classList.remove('show') // Reset the ripple
      if (timerId) clearTimeout(timerId) // Clear old timeout to not interrupt the new ripple
      let size = getRippleSize(event, parent)
      applyRipplePositionAndSize(ripple, size, event)
      ripple.classList.add('show')
      timerId = setTimeout(() => {
        ripple.classList.remove('show')
      }, RIPPLE_EFFECT_DURATION) //Reset tge ripple after animation ended
    }

    parent.addEventListener('mousedown', handleParentClick)

    return () => parent.removeEventListener('mousedown', handleParentClick)
  }, [rootRef, rippleRef])

  return (
    <Root
      ref={rootRef}
      $contentColor={contentColor}
    >
      <Ripple
        ref={rippleRef}
        $contentColor={contentColor}
      />
    </Root>
  )
}

StateLayer.defaultProps = {
  contentColor: 'onSurface',
}

StateLayer.propTypes = {
  contentColor: PropTypes.string,
}

export default StateLayer
