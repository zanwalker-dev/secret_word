import './GameOver.css';

const GameOver = ({ tryAgain, score }) => {
  return (
    <div className='gameOverContainer'>
        <h1>Fim de jogo!</h1>
        <h2>A sua pontuação foi: <span>{score}</span></h2>
        <button onClick={tryAgain}>Tente novamente</button>
    </div>
    
  )
}

export default GameOver