import React, { useState, useEffect } from "react";
import "./App.css";
import ScoreBoard from "./components/UI/ScoreBoard";
import CardsList from "./components/Cards/CardsList";
import InfoButton from "./components/UI/InfoButton";
import StartButton from "./components/UI/StartButton";
import BestScore from "./components/UI/BestScore";
import InfoModal from "./components/UI/InfoModal";
import LoadingSpinner from './components/UI/LoadingSpinner'

function App() {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [clickedHeroes, setClickedHeroes] = useState({});
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [refreshNeeded, setRefreshNeeded] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

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
      setIsLoading(true);
      const data = await fetch(
        "https://akabab.github.io/starwars-api/api/all.json"
      );
      let heroesData = await data.json();
      heroesData = shuffle(heroesData).slice(0,15);
      setHeroes(heroesData);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  }, [refreshNeeded]);

  const toggleInfoHandler = () => {
    setShowInfo((prevState) => {
      return !prevState;
    });
  };

  const heroClickedHandler = (heroID) => {
    if(clickedHeroes[heroID]) {
      setBestScore(prevBest => Math.max(score, prevBest));
      setScore(0);
      setClickedHeroes({});
      reloadHeroesHandler();
    } else {
      setScore(prevScore => prevScore + 1);
      setClickedHeroes(prevState => {
        return {
          ...prevState,
          ...{ [heroID]: true }
        }
      });
      setHeroes(prev => shuffle(prev));
    }
  }

  const reloadHeroesHandler = () => {
    setRefreshNeeded(prev => !prev);
  }

  return (
    <div className="App">
      {showInfo && <InfoModal closeModal={toggleInfoHandler} />}
      <header>
        <ScoreBoard score={score}></ScoreBoard>
      </header>
      <main>
        { isLoading && <LoadingSpinner/> }
        { !isLoading && <CardsList heroClicked={heroClickedHandler} heroes={heroes} /> }
      </main>
      <footer>
        <InfoButton openModal={toggleInfoHandler}>i</InfoButton>
        <StartButton onClickHandler={reloadHeroesHandler}>Refresh</StartButton>
        <BestScore score={bestScore}></BestScore>
      </footer>
    </div>
  );
}

export default App;
