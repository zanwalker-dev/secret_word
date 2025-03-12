import './GameOver.css';

const GameOver = ({tryAgain}) => {
  return (
    <div>
        GameOver
        <button onClick={tryAgain}>try again</button>
    </div>
    
  )
}

export default GameOver