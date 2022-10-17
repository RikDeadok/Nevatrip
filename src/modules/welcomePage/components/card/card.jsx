import React from 'react';
import dataCard from './dataCard';
import './card.scss';

function Card() {
  return (
    <div className="card">
      {dataCard.map((item) => (
        <div className="card__wrapper">
          <div className="card__body">
            <div className="rotate">
              <div className="card__image">
                <img src={item.image} alt={item.image} />
                <span className={item.status !== '' ? 'card__baner _baner-yellow' : 'card__baner'}>{item.status}</span>
              </div>
              <div className="card__description">
                <div className="card__title">{item.title}</div>
                <div className="card__timestamp timestamp">
                  <div className="timestamp__icon">
                    <span className="_icon-time" />
                  </div>
                  <div className="timestamp__description">{item.timestamp}</div>
                </div>
                <div className="card__info info-card">
                  <div className="row">
                    <div className="info-card__icon">
                      <span className="_icon-done" />
                    </div>
                    <div className="info-card__description">Билет на целый день</div>
                  </div>
                  <div className="row">
                    <div className="info-card__icon">
                      <span className="_icon-done" />
                    </div>
                    <div className="info-card__description">Неограниченное число катаний</div>
                  </div>
                  <div className="row">
                    <div className="info-card__icon">
                      <span className="_icon-done" />
                    </div>
                    <div className="info-card__description">6 остановок у главных достопримечательностей</div>
                  </div>
                  <div className="row">
                    <div className="info-card__icon">
                      <span className="_icon-done" />
                    </div>
                    <div className="info-card__description">
                      Ближайший рейс сегодня
                      <ul className="info-card__time time-list">
                        {item.times.map((time) => (
                          <li className="time-list__item">
                            <div className="time-list__link">{time}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row last-row">
                  <div className="card__price price-card">
                    <div className="price-card__price">
                      {item.price}
                      <span className="price-card__symbol">{item.currency}</span>
                    </div>
                    <div className="price-card__additional">{item.additional}</div>
                  </div>
                  <div className="card__button">
                    <button className="button-filled" type="submit">Подробнее</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
