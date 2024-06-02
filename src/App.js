import React, { useState, useEffect } from 'react';
import './App.css';
import lotus2 from './lotus2.jpeg'
import Loading from './loading';  // Assurez-vous que ce composant existe et est correctement importé

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);  // Nettoie le timer si le composant est démonté avant que le timer ne se termine
  }, []);

  if (loading) {  // Utilisez directement la variable 'loading'
    return <Loading />;
  }

  return <div className='content'>
    <img src={lotus2} alt="logo react" />
    <h1>Welcome. Hello World, Hello you!</h1>
  </div>;  // Ajoutez une vue pour le cas où 'loading' est false
}

export default App;