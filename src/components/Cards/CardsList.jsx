import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const StyledList = styled.div`
  
`

const CardsList = (props) => {
  return (
    <StyledList>
      {props.heroes.map( hero => {
        return <Card image={hero.image} key={hero.name}></Card>
      })}
    </StyledList>
  )
}

export default CardsList;