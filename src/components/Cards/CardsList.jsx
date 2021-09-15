import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const StyledList = styled.div`
  
`

const CardsList = (props) => {
  
  return (
    <StyledList>
      <Card image='https://vignette.wikia.nocookie.net/starwars/images/6/6f/SanHill_hs.jpg' key='625' />
      {props.heroes.map( hero => {
        return <Card image={hero.image} key={hero.id}></Card>
      })}
    </StyledList>
  )
}

export default CardsList;