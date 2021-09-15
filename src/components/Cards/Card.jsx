import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import fallbackImg from '../../assets/wildcard.jpg'

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
  const [imageUrl, setImageUrl] = useState(props.image);

  const onErrorHandler = () => {
    setImageUrl(fallbackImg);
  }

  return (
    <StyledCard>
      <StyledImage src={imageUrl} alt="Character's image" onError={onErrorHandler} />
    </StyledCard>
  )
}

export default Card;