import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import WelcomePage from './modules/welcomePage/welcomePage';
import CalculationPage from './modules/calculationPage/calculationPage';
import './assets/scss/main.scss';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="calculation" element={<CalculationPage />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Card</Link>
          </li>
          <li>
            <Link to="/calculation">JS</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
export default App;
