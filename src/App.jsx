import React, { useState, useEffect } from "react";
import "./App.css";
import ScoreBoard from "./components/UI/ScoreBoard";
import CardsList from "./components/Cards/CardsList";
import StartButton from "./components/UI/StartButton";
import InfoButton from "./components/UI/InfoButton";
import BestScore from "./components/UI/BestScore";
import InfoModal from "./components/UI/InfoModal";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const startGameHandler = () => {};

  const shuffle = (array) => {
    let n = array.length;
    let i;
    while(n) {
       i = Math.floor(Math.random() * n--);
       [array[i], array[n]] = [array[n], array[i]];
    }
    return array
  }

  useEffect(async () => {
    try {
      const data = await fetch(
        "https://akabab.github.io/starwars-api/api/all.json"
      );
      let heroesData = await data.json();
      heroesData = shuffle(heroesData).slice(0,15);
      setHeroes(heroesData);
    } catch (error) {
      console.log(error.message);
    }
    console.log(heroes)

  }, []);

  const toggleInfoHandler = () => {
    setShowInfo((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="App">
      {showInfo && <InfoModal closeModal={toggleInfoHandler} />}
      <header>
        <ScoreBoard score=""></ScoreBoard>
      </header>
      <main>
        <CardsList heroes={heroes}></CardsList>
      </main>
      <footer>
        <InfoButton openModal={toggleInfoHandler}>i</InfoButton>
        <StartButton onCLick={startGameHandler}>Start</StartButton>
        <BestScore></BestScore>
      </footer>
    </div>
  );
}

export default App;
