import React from 'react';
import './card.scss';

function Card() {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="container">
          <div className="card">
            <div className="card__wrapper">
              <div className="card__body">
                <div className="card__image">
                  <img src="" alt="" />
                </div>
                <span className="card__baner _baner-yellow">Новинка</span>
                <div className="card__timestamp timestamp">
                  <div className="timestamp__icon"></div>
                  <div className="timestamp__description">2 часа</div>
                </div>
                <div className="card__title">АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019</div>
                <div className="card__info info-card">
                  <div className="row">
                    <div className="info-card__icon"></div>
                    <div className="info-card__description">Билет на целый день</div>
                  </div>
                  <div className="row">
                    <div className="info-card__icon"></div>
                    <div className="info-card__description">Неограниченное число катаний</div>
                  </div>
                  <div className="row">
                    <div className="info-card__icon"></div>
                    <div className="info-card__description">6 остановок у главных достопримечательностей</div>
                  </div>
                  <div className="row">
                    <div className="info-card__icon"></div>
                    <div className="info-card__description">Ближайший рейс сегодня</div>
                    <div className="info-card__time time-info">
                      <ul className="time-info__list">
                        <li className="time-info__item">
                          <div className="time-info__link">
                            12:00
                          </div>
                        </li>
                        <li className="time-info__item">
                          <div className="time-info__link">
                            14:00
                          </div>
                        </li>
                        <li className="time-info__item">
                          <div className="time-info__link">
                            16:00
                          </div>
                        </li>
                        <li className="time-info__item">
                          <div className="time-info__link">
                            18:00
                          </div>
                        </li>
                        <li className="time-info__item">
                          <div className="time-info__link">
                            20:00
                          </div>
                        </li>
                        <li className="time-info__item">
                          <div className="time-info__link">
                            еще...
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="card__price price-card">
                    <div className="price-card__price">900<span className="price-card__symbol">P</span></div>
                    <div className="price-card__additional">1200 на причале</div>
                  </div>
                  <div className="card__button">
                    <button className="buton _button-filled">Подробнее</button>
                  </div>
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