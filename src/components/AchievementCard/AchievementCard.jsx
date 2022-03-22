import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Card from '../Card'
import CardImage from '../CardImage'
import StateLayer from '../StateLayer'
import Text from '../Text'

const Root = styled(Card)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

const Header = styled.div`
  display: flex;
`

const Capsule = styled(CardImage)`
  width: 120px;
  height: 45px;
  border-radius: 8px;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  padding-left: 8px;
`

const AchievementsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-grow: 1;
  align-items: flex-end;
  gap: 8px;
`

const AchievementIcon = styled.img`
  width: 32px;
  height: 32px;
  aspect-ratio: 1/1;
  border-radius: 8px;
`

const HiddenAchievements = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.surfaceVariant};
  border-radius: 8px;
  margin-right: auto;
`

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
`

const ProgressBar = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.secondaryContainer};
  margin-left: 8px;
`

const ProgressIndicator = styled.div`
  border-radius: inherit;
  height: inherit;
  width: ${({ progress }) => progress}%;
  background-color: ${({ theme }) => theme.onSecondaryContainer};
`

function AchievementCard(props) {
  const { logo, game, total, achieved, latest } = props

  const displayed = 5
  const hidden = total - achieved - displayed
  const progress = achieved / total

  return (
    <Root type='elevated'>
      <StateLayer />
      <Header>
        <Capsule
          src={logo}
          aspectRatio='120/45'
          type='full'
        />
        <TitleWrapper>
          <Text type='title-small'>{game}</Text>
        </TitleWrapper>
      </Header>
      <AchievementsList>
        {latest.map(({ name, icon }, index) => {
          if (index > displayed - 1) return null
          return (
            <AchievementIcon
              key={index}
              src={icon}
              alt={name}
            />
          )
        })}
        <HiddenAchievements>
          <Text
            type='label-small'
            contentColor='onSurfaceVariant'
          >
            {`+${hidden}`}
          </Text>
        </HiddenAchievements>
        <Text type='body-large'>{progress.toLocaleString('en-US', { style: 'percent' })}</Text>
      </AchievementsList>
      <ProgressWrapper>
        <Text
          type='body-medium'
          contentColor='onSurfaceVariant'
        >{`${achieved}/${total}`}</Text>
        <ProgressBar>
          <ProgressIndicator progress={progress * 100} />
        </ProgressBar>
      </ProgressWrapper>
    </Root>
  )
}

AchievementCard.defaultProps = {}

AchievementCard.propTypes = {
  logo: PropTypes.string,
  game: PropTypes.string,
  total: PropTypes.number,
  achieved: PropTypes.number,
  latest: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
}

export default AchievementCard
