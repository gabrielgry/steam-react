import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Page from '../../components/Page'
import Text from '../../components/Text'
import Card from '../../components/Card'
import CardImage from '../../components/CardImage'
import StateLayer from '../../components/StateLayer'
import userGames from '../../assets/data/userGames'

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 12px;
  row-gap: 12px;
  margin-top: 12px;
  margin-bottom: 24px;
`

function Games(props) {
  return (
    <Page navbar>
      <Text type='headline-small'>Last Played</Text>
      <GamesGrid>
        {userGames.lastPlayed.map(gameId => {
          return (
            <Card
              type='filled'
              key={gameId}
            >
              <StateLayer />
              <CardImage
                aspectRatio='600 / 900'
                src={`steam/${gameId}_library_600x900.jpg`}
              />
            </Card>
          )
        })}
      </GamesGrid>
      <Text type='headline-small'>All Games</Text>
      <GamesGrid>
        {userGames.games.map(game => {
          return (
            <Card
              type='filled'
              key={game.id}
            >
              <StateLayer />
              <CardImage
                aspectRatio='600 / 900'
                src={`steam/${game.id}_library_600x900.jpg`}
              />
            </Card>
          )
        })}
      </GamesGrid>
    </Page>
  )
}

Games.defaultProps = {}

Games.propTypes = {}

export default Games
