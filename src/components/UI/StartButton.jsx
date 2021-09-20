import React from 'react'
import styled from 'styled-components'

 const Button = styled.button`
  padding: 1% 8%;
  font-size: 1.5em;
  font-family: 'Jedi';
  color: #121212;
  background: #FFE81F;
  border: 2px solid #FFFFFF;
`

const StartButton = (props) => {
  return (
    <Button type='button' onClick={props.onClickHandler}>{props.children}</Button>
  )
}

export default StartButton;