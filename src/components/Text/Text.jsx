import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const typography = {
  'display-large': {
    defaultTag: 'h1',
    lineHeight: '4rem',
    fontSize: '3.5625rem',
    letterSpacing: '0rem',
    fontWeight: '400',
  },
  'display-medium': {
    defaultTag: 'h1',
    lineHeight: '3.25rem',
    fontSize: '2.8125rem',
    letterSpacing: '0rem',
    fontWeight: '400',
  },
  'display-small': {
    defaultTag: 'h1',
    lineHeight: '2.75rem',
    fontSize: '2.25rem',
    letterSpacing: '0rem',
    fontWeight: '400',
  },
  'headline-large': {
    defaultTag: 'h2',
    lineHeight: '2.5rem',
    fontSize: '2rem',
    letterSpacing: '0rem',
    fontWeight: '400',
  },
  'headline-medium': {
    defaultTag: 'h3',
    lineHeight: '2.25rem',
    fontSize: '1.75rem',
    letterSpacing: '0rem',
    fontWeight: '400',
  },
  'headline-small': {
    defaultTag: 'h4',
    lineHeight: '2rem',
    fontSize: '1.5rem',
    letterSpacing: '0rem',
    fontWeight: '400',
  },
  'title-large': {
    defaultTag: 'h5',
    lineHeight: '1.75rem',
    fontSize: '1.375rem',
    letterSpacing: '0rem',
    fontWeight: '400',
  },
  'title-medium': {
    defaultTag: 'h5',
    lineHeight: '1.5rem',
    fontSize: '1rem',
    letterSpacing: '0.0094rem',
    fontWeight: '500',
  },
  'title-small': {
    defaultTag: 'h5',
    lineHeight: '1.25rem',
    fontSize: '0.875rem',
    letterSpacing: '0.0063rem',
    fontWeight: '500',
  },
  'label-large': {
    defaultTag: 'h6',
    lineHeight: '1.25rem',
    fontSize: '0.875rem',
    letterSpacing: '0.0063rem',
    fontWeight: '500',
  },
  'label-medium': {
    defaultTag: 'h6',
    lineHeight: '1rem',
    fontSize: '0.75rem',
    letterSpacing: '0.0313rem',
    fontWeight: '500',
  },
  'label-small': {
    defaultTag: 'h6',
    lineHeight: '0.375rem',
    fontSize: '0.6875rem',
    letterSpacing: '0.0313rem',
    fontWeight: '500',
  },
  'body-large': {
    defaultTag: 'p',
    lineHeight: '1.5rem',
    fontSize: '1rem',
    letterSpacing: '0.0094rem',
    fontWeight: '400',
  },
  'body-medium': {
    defaultTag: 'p',
    lineHeight: '1.25rem',
    fontSize: '0.875rem',
    letterSpacing: '0.0156rem',
    fontWeight: '400',
  },
  'body-small': {
    defaultTag: 'p',
    lineHeight: '1rem',
    fontSize: '0.75rem',
    letterSpacing: '0.025rem',
    fontWeight: '400',
  },
}

const Root = styled.span`
  color: ${({ $contentColor, theme }) => theme[$contentColor] || 'inherit'};
  line-height: ${({ $type }) => typography[$type].lineHeight};
  font-size: ${({ $type }) => typography[$type].fontSize};
  letter-spacing: ${({ $type }) => typography[$type].letterSpacing};
  font-weight: ${({ $type }) => typography[$type].fontWeight};
  -webkit-font-smoothing: antialiased  -moz-osx-font-smoothing: grayscale;
`

function Text(props) {
  const { type, contentColor, component, ...rootProps } = props

  let RootComponent = component || typography[type].defaultTag

  return (
    <Root as={RootComponent} $type={type} $contentColor={contentColor} {...rootProps}>
      {props.children}
    </Root>
  )
}

Text.defaultProps = {
  type: 'body-medium',
}

Text.propTypes = {
  type: PropTypes.oneOf(Object.keys(typography)),
  contentColor: PropTypes.string,
  component: PropTypes.elementType,
}

export default Text
