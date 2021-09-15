import React from "react";
import styled from "styled-components";
import { Button } from "./StartButton";

const Backdrop = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const Modal = styled.div`
  min-width: 30%;
  max-width: 50%;
  font-size: 1.5em;
  padding: 0% 1%;
  min-height: 20%;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background: #04091b;
  color: white;
  border: 1px solid #ffe81f;
  && h5{
    margin-bottom: 5%;
  }
`;

const StyledButton = styled(Button)`
  padding: 1% 10%;
  font-size: 0.8em;
  margin-bottom: 3%;
`;

const InfoModal = (props) => {
  return (
    <React.Fragment>
      <Backdrop onClick={props.closeModal}></Backdrop>
      <Modal>
        <h5>
          Click the heroes you haven’t clicked yet to get points. You lose when
          you click the same hero twice.
        </h5>
        <StyledButton onClick={props.closeModal}>ok</StyledButton>
      </Modal>
    </React.Fragment>
  );
};

export default InfoModal;
