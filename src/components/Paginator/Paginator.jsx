import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components/macro'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Root = styled.div`
  max-width: 100%;
  animation-duration: 500ms;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  overflow-x: hidden;
  background-color: ${({ $surfaceColor, theme }) => theme[$surfaceColor]};
`

function Paginator(props) {
  const { page, surfaceColor, children } = props
  const [currentPage, setCurrentPage] = useState(page)

  useEffect(() => {
    if (page !== currentPage) {
      window.scrollTo(0, 0)
      setCurrentPage(page)
    }
  }, [page, currentPage])

  return (
    <>
      {children.map((child, index) => {
        return index === currentPage ? (
          <Root key={index} $surfaceColor={surfaceColor}>
            {child}
          </Root>
        ) : null
      })}
    </>
  )
}

Paginator.defaultProps = {
  surfaceColor: 'surface',
}

Paginator.propTypes = {
  page: PropTypes.number,
  surfaceColor: PropTypes.string,
  children: PropTypes.node,
}

export default Paginator
