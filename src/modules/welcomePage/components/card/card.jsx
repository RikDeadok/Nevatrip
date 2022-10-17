import React from 'react';
import photo from '../../../../assets/img/image.png';
import './card.scss';

function Card() {
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__body">
          <div className="rotate">
            <div className="card__image">
              <img src={photo} alt={photo} />
              <span className="card__baner _baner-yellow">Новинка</span>
            </div>
            <div className="card__description">
              <div className="card__title">АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019</div>
              <div className="card__timestamp timestamp">
                <div className="timestamp__icon">
                  <span className="_icon-time" />
                </div>
                <div className="timestamp__description">2 часа</div>
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
                      <li className="time-list__item">
                        <div className="time-list__link">
                          12:00
                        </div>
                      </li>
                      <li className="time-list__item">
                        <div className="time-list__link">
                          14:00
                        </div>
                      </li>
                      <li className="time-list__item">
                        <div className="time-list__link">
                          еще...
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row last-row">
                <div className="card__price price-card">
                  <div className="price-card__price">
                    900
                    <span className="price-card__symbol">P</span>
                  </div>
                  <div className="price-card__additional">1200 Р на причале</div>
                </div>
                <div className="card__button">
                  <button className="button-filled" type="submit">Подробнее</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
