import './App.css'
import './index.css'
import { useState, useEffect } from 'react';
import { Animation } from './assets/componentes/animation'
import { Me } from './me'

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(false); 
    }, 3000);

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <>
      {showAnimation && <Animation />}
      {!showAnimation && <Me />}
    </>
  )
}

export default App;
