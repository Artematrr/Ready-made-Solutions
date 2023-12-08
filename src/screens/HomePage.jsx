const HomePage = () => {
  return (
    <main className='main'>
      <div className='section'>Шапка на главной</div>

      <div className='section'>
        <h1> Купить готовый сайт</h1>

        <div className='sort-wrapper'>
          <div className='sort-label'>Сортировать по:</div>
          <div className='sort-container'>
            <div className='sort-corrent'>Популярности ↑</div>
            <div className='sort-dropdown'>
              <a href='#'>Популярности ↑</a>
              <a href='#'>Популярности ↓</a>
              <a href='#'>Цене ↑</a>
              <a href='#'>Цене ↓</a>
              <a href='#'>Дате ↑</a>
              <a href='#'>Дате ↓</a>
            </div>
          </div>
        </div>

        <div className='tags-wrapper'>
          <a href='#' className='active'>
            Все
          </a>
          <a href='#'>Лендинги</a>
          <a href='#'>Интернет-магазины</a>
          <a href='#'>Корпоративные</a>
          <a href='#'>Визитки</a>
        </div>

        <div className='product-cards-wrapper'>
          <div className='product-card'>
            <div className='card-image'>
              <img src='img/product-1.png' alt='product-1' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='row'>
                  <div className='card-tag'>#Лендинги</div>
                  <div className='card-favourites'>
                    <img
                      src='/public/img/icons/heart-full.svg'
                      alt='favourites'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='card-title'>
                  Студия татуажа
                  </div>
                </div>
              </div>
              <div className='card-bottom'>
                <div className='row'>
                  <div className='card-article'>Арт. L-023</div>
                  <div className='card-price row'>
                    <div className='price-new'>12500 руб.</div>
                    <div className='price-old'>14500 руб.</div>
                  </div>
                </div>
                <div className='card-buttons'>
                  <div className='button-buy'>
                    <a href='#'>Купить</a>
                  </div>
                  <div className='button-demo'>
                    <a href='#'>Демо</a>
                  </div>
                  <div className='button-about'>
                    <a href='#'>Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='product-card'>
            <div className='card-image'>
              <img src='/public/img/product-2.png' alt='product-2' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='row'>
                  <div className='card-tag'>#Лендинги</div>
                  <div className='card-favourites'>
                    <img
                      src='/public/img/icons/heart-full.svg'
                      alt='favourites'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='card-title'>
                  Студия татуажа
                  </div>
                </div>
              </div>
              <div className='card-bottom'>
                <div className='row'>
                  <div className='card-article'>Арт. L-023</div>
                  <div className='card-price row'>
                    <div className='price-new'>12500 руб.</div>
                    <div className='price-old'>14500 руб.</div>
                  </div>
                </div>
                <div className='card-buttons'>
                  <div className='button-buy'>
                    <a href='#'>Купить</a>
                  </div>
                  <div className='button-demo'>
                    <a href='#'>Демо</a>
                  </div>
                  <div className='button-about'>
                    <a href='#'>Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='product-card'>
            <div className='card-image'>
              <img src='/public/img/product-3.png' alt='product-3' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='row'>
                  <div className='card-tag'>#Лендинги</div>
                  <div className='card-favourites'>
                    <img
                      src='/public/img/icons/heart-full.svg'
                      alt='favourites'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='card-title'>
                  Студия татуажа
                  </div>
                </div>
              </div>
              <div className='card-bottom'>
                <div className='row'>
                  <div className='card-article'>Арт. L-023</div>
                  <div className='card-price row'>
                    <div className='price-new'>12500 руб.</div>
                    <div className='price-old'>14500 руб.</div>
                  </div>
                </div>
                <div className='card-buttons'>
                  <div className='button-buy'>
                    <a href='#'>Купить</a>
                  </div>
                  <div className='button-demo'>
                    <a href='#'>Демо</a>
                  </div>
                  <div className='button-about'>
                    <a href='#'>Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='product-card'>
            <div className='card-image'>
              <img src='/public/img/product-4.png' alt='product-4' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='row'>
                  <div className='card-tag'>#Лендинги</div>
                  <div className='card-favourites'>
                    <img
                      src='/public/img/icons/heart-full.svg'
                      alt='favourites'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='card-title'>
                  Студия татуажа
                  </div>
                </div>
              </div>
              <div className='card-bottom'>
                <div className='row'>
                  <div className='card-article'>Арт. L-023</div>
                  <div className='card-price row'>
                    <div className='price-new'>12500 руб.</div>
                    <div className='price-old'>14500 руб.</div>
                  </div>
                </div>
                <div className='card-buttons'>
                  <div className='button-buy'>
                    <a href='#'>Купить</a>
                  </div>
                  <div className='button-demo'>
                    <a href='#'>Демо</a>
                  </div>
                  <div className='button-about'>
                    <a href='#'>Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='product-card'>
            <div className='card-image'>
              <img src='img/product-5.png' alt='product-5' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='row'>
                  <div className='card-tag'>#Лендинги</div>
                  <div className='card-favourites'>
                    <img
                      src='img/icons/heart-full.svg'
                      alt='favourites'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='card-title'>
                  Студия татуажа
                  </div>
                </div>
              </div>
              <div className='card-bottom'>
                <div className='row'>
                  <div className='card-article'>Арт. L-023</div>
                  <div className='card-price row'>
                    <div className='price-new'>12500 руб.</div>
                    <div className='price-old'>14500 руб.</div>
                  </div>
                </div>
                <div className='card-buttons'>
                  <div className='button-buy'>
                    <a href='#'>Купить</a>
                  </div>
                  <div className='button-demo'>
                    <a href='#'>Демо</a>
                  </div>
                  <div className='button-about'>
                    <a href='#'>Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='product-card'>
            <div className='card-image'>
              <img src='img/product-6.png' alt='product-6' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='row'>
                  <div className='card-tag'>#Лендинги</div>
                  <div className='card-favourites'>
                    <img
                      src='img/icons/heart-full.svg'
                      alt='favourites'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='card-title'>
                  Студия татуажа
                  </div>
                </div>
              </div>
              <div className='card-bottom'>
                <div className='row'>
                  <div className='card-article'>Арт. L-023</div>
                  <div className='card-price row'>
                    <div className='price-new'>12500 руб.</div>
                    <div className='price-old'>14500 руб.</div>
                  </div>
                </div>
                <div className='card-buttons'>
                  <div className='button-buy'>
                    <a href='#'>Купить</a>
                  </div>
                  <div className='button-demo'>
                    <a href='#'>Демо</a>
                  </div>
                  <div className='button-about'>
                    <a href='#'>Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
        </div>
      </div>

      {/* <div className='section'>Форма из сайдбара</div>
      <div className='section'>Преимущества</div>
      <div className='section'>Сайты на наших решениях</div>
      <div className='section'>Дополнительные услуги</div>
      <div className='section'>Отзывы</div>
      <div className='section'>Вопрос-ответ</div>
      <div className='section'>Полезные советы</div> */}
    </main>
  )
}

export default HomePage
