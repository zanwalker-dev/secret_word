// CSS
import './styles/App.css';
// React
import { use, useCallback, useEffect, useState } from 'react';
// Data
import { wordsList } from './data/words';
// Components
import StartScreen from './components/startscreen';
import Game from './components/Game'
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const[pickedWord, setPickedWord] = useState("");
  const[pickedCategory, setPickedCategory] = useState("");
  const[letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3)
  const [score,setScore] = useState(0)

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return{word,category}
  };
  

  // start game
  const startGame = () => {
    const { word, category } = pickWordAndCategory();
    console.log(word, category)

    // create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    console.log(wordLetters)

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }

  // using letter input
  const verifyLetter = (letter) => {
    console.log(letter);
  }

  //end game
  const tryAgain = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className='App'>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
        <Game 
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory} 
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
        />
      )}
      {gameStage === 'end' && <GameOver tryAgain={tryAgain} />}
    </div>
  );
};

export default App;
