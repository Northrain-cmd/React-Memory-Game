import React, { useState } from 'react'
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

  const onLoadHandler = (e) => {
    const height = e.target.naturalHeight;
    const width = e.target.naturalWidth;
    if(height === 171 && width === 300) {
      setImageUrl(fallbackImg);
      e.target.parentNode.dataset.id = '777';
    }
  }

  return (
    <StyledCard data-id={props.heroID} onClick={props.heroClicked}>
      <StyledImage src={imageUrl} alt="Character's image" onLoad={onLoadHandler} />
    </StyledCard>
  )
}

export default Card;