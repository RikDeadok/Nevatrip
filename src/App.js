import React from 'react';
import WelcomePage from './modules/welcomePage/welcomePage';
import CalculationPage from './modules/calculationPage/calculationPage';
import './assets/scss/main.scss';

function App() {
  return (
    <div>
      <WelcomePage />
      <CalculationPage />
    </div>
  );
}

export default App;
