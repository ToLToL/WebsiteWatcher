import React from 'react';
import WebsiteSearch from './components/WebsiteSearch';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <WebsiteSearch name="ToLToL" numberOfPokemons={5}/>
    </div>
  );
}

export default App;
