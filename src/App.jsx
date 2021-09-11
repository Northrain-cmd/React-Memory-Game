import React, { useState } from 'react'
import './App.css'
import ScoreBoard from './components/UI/ScoreBoard'
import CardsList from './components/Cards/CardsList'

function App() {
  const heroes = [
    {
      "id": 1,
      "name": "Luke Skywalker",
      "height": 1.72,
      "mass": 73,
      "gender": "male",
      "homeworld": "tatooine",
      "wiki": "http://starwars.wikia.com/wiki/Luke_Skywalker",
      "image": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      "born": -19,
      "bornLocation": "polis massa",
      "died": 34,
      "diedLocation": "ahch-to",
      "species": "human",
      "hairColor": "blond",
      "eyeColor": "blue",
      "skinColor": "light",
      "cybernetics": "Prosthetic right hand",
      "affiliations": [
      "Alliance to Restore the Republic",
      "Red Squadron",
      "Rogue Squadron",
      "Massassi Group",
      "Leia Organa's team",
      "Endor strike team",
      "Jedi Order",
      "Bright Tree tribe",
      "New Republic",
      "Resistance"
      ],
      "masters": [
      "Obi-Wan Kenobi",
      "Yoda"
      ],
      "apprentices": [
      "Leia Organa",
      "Ben Solo (along with a dozen apprentices)",
      "Rey"
      ],
      "formerAffiliations": []
      },
      {
      "id": 2,
      "name": "C-3PO",
      "height": 1.71,
      "mass": 75,
      "gender": "male",
      "homeworld": "tatooine",
      "species": "droid",
      "wiki": "http://starwars.wikia.com/wiki/C-3PO",
      "image": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      "dateCreated": -32,
      "dateDestroyed": 3,
      "destroyedLocation": "bespin, rebuilt shortly after",
      "creator": "Anakin Skywalker",
      "manufacturer": "Cybot Galactica",
      "model": "3PO unit",
      "class": "Protocol droid",
      "sensorColor": "yellow",
      "platingColor": "gray, later primarily golden",
      "equipment": "TranLang III communication module",
      "affiliations": [
      "Skywalker family",
      "Confederacy of Independent Systems",
      "Royal House of Naboo",
      "Galactic Republic",
      "House of Organa",
      "Galactic Empire",
      "Alliance to Restore the Republic",
      "Massassi Group",
      "Leia Organa's team",
      "Pathfinders",
      "Endor strike team",
      "Bright Tree tribe",
      "New Republic",
      "Resistance",
      "Resistance spy droid network"
      ],
      "skinColor": "gold",
      "eyeColor": "yellow",
      "born": -112,
      "formerAffiliations": []
      },
      {
      "id": 3,
      "name": "R2-D2",
      "height": 1.09,
      "mass": 32,
      "gender": "male",
      "homeworld": "naboo",
      "species": "droid",
      "wiki": "http://starwars.wikia.com/wiki/R2-D2",
      "image": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      "manufacturer": "Industrial Automaton",
      "productLine": "R-series",
      "model": "R2 series astromech droid",
      "class": "Astromech droid",
      "sensorColor": "red",
      "platingColor": "bluesilver",
      "equipment": [
      "Buzz saw",
      "Electric pike",
      "Drinks tray (Only on Jabba's Sail Barge)",
      "Fusion welder",
      "Data probe",
      "Power recharge coupler",
      "Rocket booster",
      "Holoprojector",
      "Motorized, all-terrain treads",
      "Retractable third leg"
      ],
      "affiliations": [
      "Royal House of Naboo",
      "Galactic Republic",
      "501st Legion",
      "R2-D2's battle droid squadron",
      "D-Squad",
      "House of Organa",
      "Galactic Empire",
      "Alliance to Restore the Republic",
      "Massassi Group",
      "Red Squadron",
      "Leia Organa's team",
      "Endor strike team",
      "Bright Tree tribe",
      "Resistance"
      ],
      "skinColor": "white, blue",
      "eyeColor": "red",
      "born": -33,
      "formerAffiliations": []
      },
      {
      "id": 4,
      "name": "Darth Vader",
      "height": 2.03,
      "mass": 120,
      "gender": "male",
      "homeworld": "tatooine",
      "wiki": "http://starwars.wikia.com/wiki/Anakin_Skywalker",
      "image": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      "born": -41,
      "died": 4,
      "diedLocation": "death star ii, endor system",
      "species": "human",
      "hairColor": "blond",
      "eyeColor": "blue, yellow (dark side)",
      "skinColor": "light, later pale",
      "cybernetics": "Cybernetic right arm; later prosthetic arms and legs, and a life-support system",
      "affiliations": [
      "501st Legion",
      "Sith",
      "Galactic Empire",
      "Imperial High Command"
      ],
      "masters": [
      "Qui-Gon Jinn (informal Jedi Master)",
      "Obi-Wan Kenobi (Jedi Master)",
      "Darth Sidious (Sith Master)",
      "Yoda (Force spirit teacher)"
      ],
      "apprentices": [
      "Ahsoka Tano (Padawan)",
      "Inquisitorius"
      ],
      "formerAffiliations": [
      "Jedi Order",
      "Jedi High Council",
      "Galactic Republic"
      ]
      },
      {
      "id": 5,
      "name": "Leia Organa",
      "height": 1.5,
      "mass": 51,
      "gender": "female",
      "homeworld": "alderaan",
      "wiki": "http://starwars.wikia.com/wiki/Leia_Organa",
      "image": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      "born": -19,
      "bornLocation": "polis massa (2 days after empire day)",
      "species": "human",
      "hairColor": "brown, later graying",
      "eyeColor": "brown",
      "skinColor": "light",
      "affiliations": [
      "Elder Houses",
      "House of Organa",
      "Galactic Empire",
      "Imperial Senate",
      "Alliance to Restore the Republic",
      "Massassi Group",
      "Leia Organa's team",
      "Endor strike team",
      "Alliance High Command",
      "Bright Tree tribe",
      "New Republic",
      "Populists",
      "Resistance"
      ],
      "masters": "Luke Skywalker",
      "formerAffiliations": []
      },
      {
      "id": 6,
      "name": "Owen Lars",
      "height": 1.7,
      "mass": 120,
      "gender": "male",
      "homeworld": "tatooine",
      "wiki": "http://starwars.wikia.com/wiki/Owen_Lars",
      "image": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      "died": 0,
      "diedLocation": "tatooine",
      "species": "human",
      "hairColor": "brown, later gray",
      "eyeColor": "blue",
      "skinColor": "light",
      "affiliations": [
      "Lars family"
      ],
      "born": -52,
      "formerAffiliations": []
      },
      {
      "id": 7,
      "name": "Beru Whitesun lars",
      "height": 1.65,
      "mass": 75,
      "gender": "female",
      "homeworld": "tatooine",
      "wiki": "http://starwars.wikia.com/wiki/Beru_Whitesun_Lars",
      "image": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      "died": 0,
      "diedLocation": "tatooine",
      "species": "human",
      "hairColor": "brown",
      "eyeColor": "blue",
      "skinColor": "light",
      "born": -47,
      "affiliations": [],
      "formerAffiliations": []
      },
      {
      "id": 8,
      "name": "R5-D4",
      "height": 0.97,
      "mass": 32,
      "gender": "male",
      "homeworld": "tatooine",
      "species": "droid",
      "wiki": "http://starwars.wikia.com/wiki/R5-D4",
      "image": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      "manufacturer": "Industrial Automaton",
      "model": "R5 unit",
      "class": "Astromech droid",
      "sensorColor": "red",
      "platingColor": "white, red, blue",
      "affiliations": [
      "Alliance to Restore the Republic"
      ],
      "skinColor": "white, red",
      "eyeColor": "red",
      "formerAffiliations": []
      },
      {
      "id": 9,
      "name": "Biggs Darklighter",
      "height": 1.83,
      "mass": 84,
      "gender": "male",
      "homeworld": "tatooine",
      "wiki": "http://starwars.wikia.com/wiki/Biggs_Darklighter",
      "image": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      "died": 0,
      "diedLocation": "yavin system",
      "species": "human",
      "hairColor": "black",
      "eyeColor": "hazel",
      "affiliations": [
      "Galactic Empire",
      "Prefsbelt Fleet Camp",
      "Alliance to Restore the Republic",
      "Red Squadron",
      "Massassi Group"
      ],
      "skinColor": "light",
      "born": -24,
      "formerAffiliations": []
      },
      {
      "id": 10,
      "name": "Obi-Wan Kenobi",
      "height": 1.82,
      "mass": 81,
      "gender": "male",
      "homeworld": "stewjon",
      "wiki": "http://starwars.wikia.com/wiki/Obi-Wan_Kenobi",
      "image": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      "born": -57,
      "died": 0,
      "diedLocation": "death star, alderaan system",
      "species": "human",
      "hairColor": "light brown, later white",
      "eyeColor": "gray-blue",
      "skinColor": "light",
      "affiliations": [
      "Jedi Order",
      "Jedi High Council",
      "Galactic Republic",
      "212th Attack Battalion",
      "Alliance to Restore the Republic"
      ],
      "masters": [
      "Qui-Gon Jinn",
      "Yoda"
      ],
      "apprentices": [
      "Anakin Skywalker",
      "Luke Skywalker"
      ],
      "formerAffiliations": []
      },
      {
      "id": 11,
      "name": "Anakin Skywalker",
      "height": 2.03,
      "mass": 120,
      "gender": "male",
      "homeworld": "tatooine",
      "wiki": "http://starwars.wikia.com/wiki/Anakin_Skywalker",
      "image": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      "born": -41,
      "died": 4,
      "diedLocation": "death star ii, endor system",
      "species": "human",
      "hairColor": "blond",
      "eyeColor": "blue, yellow (dark side)",
      "skinColor": "light, later pale",
      "cybernetics": "Cybernetic right arm; later prosthetic arms and legs, and a life-support system",
      "affiliations": [
      "501st Legion",
      "Sith",
      "Galactic Empire",
      "Imperial High Command"
      ],
      "masters": [
      "Qui-Gon Jinn (informal Jedi Master)",
      "Obi-Wan Kenobi (Jedi Master)",
      "Darth Sidious (Sith Master)",
      "Yoda (Force spirit teacher)"
      ],
      "apprentices": [
      "Ahsoka Tano (Padawan)",
      "Inquisitorius"
      ],
      "formerAffiliations": [
      "Jedi Order",
      "Jedi High Council",
      "Galactic Republic"
      ]
      },
      {
      "id": 12,
      "name": "Wilhuff Tarkin",
      "height": 1.82,
      "gender": "male",
      "homeworld": "eriadu",
      "wiki": "http://starwars.wikia.com/wiki/Wilhuff_Tarkin",
      "image": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      "born": -64,
      "died": 0,
      "diedLocation": " death star, yavin system",
      "species": "human",
      "hairColor": "auburn, later gray",
      "eyeColor": "gray-blue",
      "skinColor": "light",
      "affiliations": [
      "Galactic Republic",
      "Sullust Sector Spacefarers Academy",
      "Judicial Forces",
      "Republic Navy",
      "Strategic Advisory Cell",
      "Outland Regions Security Force",
      "Outland's anti-pirate taskforce",
      "Galactic Empire",
      "Battle Station Command",
      "Imperial Officer Corps",
      "Imperial Navy",
      "Tarkin Initiative"
      ],
      "formerAffiliations": []
      },
      {
      "id": 13,
      "name": "Chewbacca",
      "height": 2.28,
      "mass": 112,
      "gender": "male",
      "homeworld": "kashyyyk",
      "wiki": "http://starwars.wikia.com/wiki/Chewbacca",
      "image": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      "born": -200,
      "bornLocation": "kashyyyk",
      "species": "wookiee",
      "hairColor": "brown",
      "eyeColor": "blue",
      "affiliations": [
      "Galactic Republic",
      "Alliance to Restore the Republic",
      "Leia Organa's team",
      "Pathfinders",
      "Endor strike team",
      "Bright Tree tribe",
      "New Republic",
      "Resistance"
      ],
      "formerAffiliations": []
      },
      {
      "id": 14,
      "name": "Han Solo",
      "height": 1.8,
      "mass": 80,
      "gender": "male",
      "homeworld": "corellia",
      "wiki": "http://starwars.wikia.com/wiki/Han_Solo",
      "image": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      "born": -29,
      "bornLocation": "corellia",
      "died": 34,
      "diedLocation": "starkiller base",
      "species": "human",
      "hairColor": "brown, later gray",
      "eyeColor": "hazel",
      "skinColor": "light",
      "affiliations": [
      "Galactic Empire",
      "Jabba Desilijic Tiure's criminal empire",
      "Alliance to Restore the Republic",
      "Leia Organa's team",
      "Endor strike team",
      "Kingdom of Han",
      "Bright Tree tribe",
      "New Republic",
      "New Republic Pilots Commission",
      "Han Solo's shipping company",
      "Resistance"
      ],
      "formerAffiliations": []
      },
      {
      "id": 15,
      "name": "Greedo",
      "height": 1.74,
      "mass": 74,
      "gender": "male",
      "homeworld": [
      "Rodia",
      "Tatooine"
      ],
      "wiki": "http://starwars.wikia.com/wiki/Greedo",
      "image": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      "died": 0,
      "diedLocation": "tatooine",
      "species": "rodian",
      "eyeColor": "purple",
      "skinColor": "green",
      "affiliations": [
      "Trade Federation"
      ],
      "born": -44,
      "formerAffiliations": []
      },
  ]
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
       <ScoreBoard score="45"></ScoreBoard>
      </header>
      <main>
        <CardsList heroes={heroes}></CardsList>
      </main>
    </div>
  )
}

export default App