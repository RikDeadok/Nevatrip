import { React, useState } from 'react';
import { routes, times } from './data';

function CalculationPage() {
  const flex = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '50px auto',
  };
  const input = {
    border: 'solid 0.5px grey',
    padding: '5px 10px',
  };
  const btn = {
    border: 'solid 0.5px grey',
    background: 'green',
    padding: '5px 10px',
    marginTop: '20px',
  };
  const now = new Date().toLocaleTimeString().slice(0, -3);
  const [userInputRoute, setUserInputRoute] = useState('из A в B');
  const [userInputTime, setUserInputTime] = useState('18:00(из A в B)');
  const [userInputNum, setUserInputNum] = useState('');
  let filtered = [];
  let filteredBack = [];
  let renderBack = false;

  if (userInputRoute === 'из A в B') {
    filtered = times.filter((filterItem) => (filterItem.route === 'из A в B'));
  } else if (userInputRoute === 'из B в A') {
    filtered = times.filter((filterItem) => (filterItem.route === 'из B в A'));
  } else if (userInputRoute === 'из A в B и обратно в А') {
    filtered = times.filter((filterItem) => (filterItem.route === 'из A в B'));
    filteredBack = times.filter((filterItem) => (filterItem.route === 'из B в A'));
    renderBack = true;
  }

  function handleChangeRoute(event) {
    setUserInputRoute(event.target.value);
  }
  function handleChangeTime(event) {
    setUserInputTime(event.target.value);
  }
  function handleChangeNum(event) {
    setUserInputNum(event.target.value);
  }
  function handleClick() {
    calc(userInputRoute, userInputTime, userInputNum);
  }
  function calc(route, time, num) {
    let cost = 700;
    let traveltime = 50;
    let departure = '';
    if (route === 'из A в B и обратно в А') {
      cost = 1200;
      traveltime = 100;
    }
    alert(`
      Вы выбрали ${num} билета по маршруту ${route} стоимостью ${cost * num} р.
      Это путешествие займет у вас ${traveltime} минут.
      Теплоход отправляется в ${time.slice(0, 5)}.
    `)
  }

  return (
    <div style={flex}>
      <label htmlFor="route">Выберите маршрут</label>
      <select name="route" id="route" style={input} onChange={handleChangeRoute}>
        {routes.map((routesItem) => (
          <option value={routesItem.value}>{routesItem.text}</option>
        ))}
      </select>

      <label htmlFor="time">Выберите время</label>
      <select name="time" id="time" style={input} onChange={handleChangeTime}>
        {filtered.map((timesItem) => (
          <option value={timesItem.value}>{timesItem.text}</option>
        ))}
      </select>

      {renderBack && (
        <div style={flex}>
          <label htmlFor="time">Выберите время обратного отправления</label>
          <select name="time" id="time" style={input} onChange={handleChangeTime}>
            {filteredBack.map((timesItem) => (
              <option value={timesItem.value}>{timesItem.text}</option>
            ))}
          </select>
        </div>
      )}

      <label htmlFor="num">Количество билетов</label>
      <input id="num" style={input} onChange={handleChangeNum} />
      <button type="submit" style={btn} onClick={handleClick}>Посчитать</button>
    </div>
  );
}

export default CalculationPage;
