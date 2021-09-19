import React from "react";
import styled from "styled-components";
import Card from "./Card";

const StyledList = styled.div``;

const CardsList = (props) => {
  const heroClickedHandler = (e) => {
    props.heroClicked(e.currentTarget.dataset.id);
  };

  return (
    <StyledList>
      {props.heroes.map((hero) => {
        return (
          <Card
            heroClicked={heroClickedHandler}
            image={hero.image}
            heroID={hero.id}
            key={hero.id}
          ></Card>
        );
      })}
    </StyledList>
  );
};

export default CardsList;
