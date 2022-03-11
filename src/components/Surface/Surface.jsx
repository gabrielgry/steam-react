import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { mix, transparentize } from 'color2k'

function getSurfaceTone(surfaceColor, surfaceTint, elevation) {
  if (elevation === 0) return surfaceColor
  const weights = { 0: 0, 1: 0.05, 2: 0.08, 3: 0.11, 4: 0.12, 5: 0.14 }
  return mix(surfaceColor, surfaceTint, weights[elevation] || weights[5])
}

function getShadows(color, elevation) {
  if (elevation === 0) return null
  let shadows = {
    1: `0px 1px 2px ${transparentize(color, 0.7)}, 0px 1px 3px 1px ${transparentize(color, 0.85)}`,
    2: `0px 1px 2px ${transparentize(color, 0.7)}, 0px 2px 6px 2px ${transparentize(color, 0.85)}`,
    3: `0px 4px 8px 3px ${transparentize(color, 0.85)}, 0px 1px 3px ${transparentize(color, 0.7)}`,
    4: `0px 6px 10px 4px ${transparentize(color, 0.85)}, 0px 2px 3px ${transparentize(color, 0.7)}`,
    5: `0px 8px 12px 6px ${transparentize(color, 0.85)}, 0px 4px 4px ${transparentize(color, 0.7)}`,
  }
  return shadows[elevation] || shadows[5]
}

const Root = styled.div`
  background-color: ${({ $elevation, $surfaceColor, theme }) =>
    getSurfaceTone(theme[$surfaceColor], theme.surfaceTint, $elevation)};
  color: ${({ $contentColor, theme }) => theme[$contentColor]};
  box-shadow: ${({ $shadows, $elevation, theme }) => $shadows && getShadows(theme.shadow, $elevation)};
`

const Surface = forwardRef((props, ref) => {
  const { elevation, contentColor, surfaceColor, shadows, component, children, ...rootProps } = props

  return (
    <Root
      as={component}
      ref={ref}
      $shadows={shadows}
      $elevation={elevation}
      $contentColor={contentColor}
      $surfaceColor={surfaceColor}
      {...rootProps}
    >
      {children}
    </Root>
  )
})

Surface.displayName = 'Surface'

Surface.defaultProps = {
  elevation: 0,
  surfaceColor: 'surface',
  contentColor: 'onSurface',
}

Surface.propTypes = {
  elevation: PropTypes.number,
  surfaceColor: PropTypes.string,
  contentColor: PropTypes.string,
  shadows: PropTypes.bool,
}

export default Surface
