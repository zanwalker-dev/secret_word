import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
        <h1>Divinarium</h1>
        <p>Clique no botão abaixo e advinhe</p>
        <button onClick={startGame}>Advinhar!</button>
    </div>
  )
}

export default StartScreen