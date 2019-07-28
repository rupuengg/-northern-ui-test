import React from 'react';
import './App.css';
import PokeProvider from './providers/poke-provider';
import PokeList from './components/poke-list';

function App() {
  return (
    <div className="App">
      <h1>Pokemon</h1>
      <PokeProvider>
        <div className="container">
          <PokeList />
        </div>
      </PokeProvider>
    </div>
  );
}

export default App;
