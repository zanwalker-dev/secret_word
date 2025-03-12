// CSS
import './styles/App.css';
// React
import { useCallback, useEffect, useState } from 'react';
// Pages
import StartScreen from './components/startscreen';

function App() {

  return (
    <div className='App'>
      <StartScreen />
    </div>
  );
};

export default App;
