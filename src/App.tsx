import React from 'react';
import SearchContactCard from './components/SearchContactCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchContactCard
        userId={1234}
        trust={75}
        profileImageUrl="https://randomuser.me/api/portraits/women/55.jpg"
        fullName="Gina Sally"
      />
    </div>
  );
}

export default App;
