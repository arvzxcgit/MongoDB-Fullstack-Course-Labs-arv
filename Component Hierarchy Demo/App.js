import React from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';

const App = () => {
  return (
    <div className="App">
      <Header title="Component Hierarchy Demo" />
      <MainContainer />
    </div>
  );
}

export default App;