import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Page from '../../components/Page'
import Text from '../../components/Text'
import AchievementCard from '../../components/AchievementCard/'
import userGames from '../../assets/data/userGames'
import games from '../../assets/data/games'

const AchievementCardList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`

function Achievements(props) {
  return (
    <Page navbar>
      <Text type='headline-small'>Achievements</Text>
      <AchievementCardList>
        {userGames.games.map(game => {
          if (!game.achievements) {
            return null
          }

          const {
            id,
            achievements: { total, achieved, list },
          } = game

          const latest = list.map(achievement => games[id].achievements[achievement])

          return (
            <AchievementCard
              key={id}
              logo={`https://cdn.akamai.steamstatic.com/steam/apps/${id}/capsule_231x87.jpg`}
              game={games[id].name}
              total={total}
              achieved={achieved}
              latest={latest}
            />
          )
        })}
      </AchievementCardList>
    </Page>
  )
}

Achievements.defaultProps = {}

Achievements.propTypes = {}

export default Achievements
