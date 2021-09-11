import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100%;
  max-height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
`

const StyledImage = styled.img`
  filter: drop-shadow(0px 0px 7px rgba(255, 255, 255, 0.75));
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border: 3px solid #0038FF;
`

const Card = (props) => {
  return (
    <StyledCard>
      <StyledImage src={props.image} alt="Character's image" />
    </StyledCard>
  )
}

export default Card;