import React from 'react'
import styled from 'styled-components'

const WrapperDiv = styled.div`
  border: 2px solid #FFE81F;
  padding: 0.5em 0.5em;
  text-align: center;
  background-color: #04091B;
`

const Score = styled.p`
  font-size: 1.5em;
  font-family: 'Jedi';
  color: #FFE81F;
  margin: 0;
`

const ScoreBoard = (props) => {
  return (
    <WrapperDiv>
      <Score>Score: {props.score}</Score>
    </WrapperDiv>
  )
}

export default ScoreBoard;