import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  font-size: 2em;
  padding: 1% 3%;
  color: white;
  background: #0038FF;
  border: 2px solid #FFFFFF;
  font-weight: 500;
`

const InfoButton = (props) => {
  return (
    <Button type='button' onClick={props.onClick}>{props.children}</Button>
  )
}

export default InfoButton;