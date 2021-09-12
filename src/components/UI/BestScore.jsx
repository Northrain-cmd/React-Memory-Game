import React from 'react'
import styled from 'styled-components'
import imgUrl from '../../icons/best.svg'

const Wrapper = styled.div`
  display: flex;
  background: #04091B;
  border: 1px solid #FFE81F;
  align-items: center;
  justify-content: space-around;
  padding: 0.75%;
`

const Image = styled.img`
  max-height: 40%;
  max-width: 40%;
`
const Span = styled.span`
  color: #FFE81F;
  font-size: 1.8em;
  font-family: 'Jedi'
`



const BestScore = (props) => {
  return (
    <Wrapper>
      <Image src={imgUrl} alt="Trophy Image" />
      <Span>{props.best || 0} </Span>     
    </Wrapper>
  )
}

export default BestScore;