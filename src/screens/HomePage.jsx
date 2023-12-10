const HomePage = () => {
  return (
    <main className='main'>
      <div className='section'>
        <img src='img/homepage-hero.png' alt='' />
      </div>

      <div className='section'>
        <h1> Купить готовый сайт</h1>

        <div className='sort-wrapper'>
          <div className='sort-label'>Сортировать по:</div>
          <div className='sort-container'>
            <div className='sort-corrent'>Популярности ↑</div>
            <div className='sort-dropdown'>
              {/* <a href='#'>Популярности ↑</a> */}
              <a href='#'>Популярности ↓</a>
              <a href='#'>Цене ↑</a>
              <a href='#'>Цене ↓</a>
              <a href='#'>Дате ↑</a>
              <a href='#'>Дате ↓</a>
              <a href='#'>Рейтингу ↑</a>
              <a href='#'>Рейтингу ↓</a>
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
              <img loading='lazy' src='img/product-1.png' alt='product-1' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='row'>
                  <div className='card-tag'>#Лендинги</div>
                  <div className='card-favourites'>
                    <i className='heart-full'></i>
                  </div>
                </div>
                <div className='row'>
                  <div className='card-title'>Студия татуажа </div>
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
              <img loading='lazy' src='img/product-2.png' alt='product-2' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='row'>
                  <div className='card-tag'>#Лендинги</div>
                  <div className='card-favourites'>
                    <i className='heart-empty'></i>
                  </div>
                </div>
                <div className='row'>
                  <div className='card-title'>Студия татуажа</div>
                </div>
              </div>
              <div className='card-bottom'>
                <div className='row'>
                  <div className='card-article'>Арт. L-023</div>
                  <div className='card-price row'>
                    <div className='price-new'>12500 руб.</div>
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
              <img loading='lazy' src='img/product-3.png' alt='product-3' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='row'>
                  <div className='card-tag'>#Лендинги</div>
                  <div className='card-favourites'>
                    <i className='heart-empty'></i>
                  </div>
                </div>
                <div className='row'>
                  <div className='card-title'>Студия татуажа</div>
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
              <img loading='lazy' src='img/product-4.png' alt='product-4' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='row'>
                  <div className='card-tag'>#Лендинги</div>
                  <div className='card-favourites'>
                    <i className='heart-empty'></i>
                  </div>
                </div>
                <div className='row'>
                  <div className='card-title'>Студия татуажа</div>
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
              <img loading='lazy' src='img/product-5.png' alt='product-5' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='row'>
                  <div className='card-tag'>#Лендинги</div>
                  <div className='card-favourites'>
                    <i className='heart-empty'></i>
                  </div>
                </div>
                <div className='row'>
                  <div className='card-title'>Студия татуажа</div>
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
              <img loading='lazy' src='img/product-6.png' alt='product-6' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='row'>
                  <div className='card-tag'>#Лендинги</div>
                  <div className='card-favourites'>
                    <i className='heart-empty'></i>
                  </div>
                </div>
                <div className='row'>
                  <div className='card-title'>Студия татуажа</div>
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

          <div className='banner'>
            <a href='#'>
              <img loading='lazy' src='/img/banner.png' alt='' />
            </a>
          </div>

          <div className='product-card'>
            <div className='card-image'>
              <img loading='lazy' src='img/product-1.png' alt='product-1' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='row'>
                  <div className='card-tag'>#Лендинги</div>
                  <div className='card-favourites'>
                    <i className='heart-full'></i>
                  </div>
                </div>
                <div className='row'>
                  <div className='card-title'>Студия татуажа </div>
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
              <img loading='lazy' src='img/product-2.png' alt='product-2' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='row'>
                  <div className='card-tag'>#Лендинги</div>
                  <div className='card-favourites'>
                    <i className='heart-empty'></i>
                  </div>
                </div>
                <div className='row'>
                  <div className='card-title'>Студия татуажа</div>
                </div>
              </div>
              <div className='card-bottom'>
                <div className='row'>
                  <div className='card-article'>Арт. L-023</div>
                  <div className='card-price row'>
                    <div className='price-new'>12500 руб.</div>
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
              <img loading='lazy' src='img/product-3.png' alt='product-3' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='row'>
                  <div className='card-tag'>#Лендинги</div>
                  <div className='card-favourites'>
                    <i className='heart-empty'></i>
                  </div>
                </div>
                <div className='row'>
                  <div className='card-title'>Студия татуажа</div>
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
              <img loading='lazy' src='img/product-4.png' alt='product-4' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='row'>
                  <div className='card-tag'>#Лендинги</div>
                  <div className='card-favourites'>
                    <i className='heart-empty'></i>
                  </div>
                </div>
                <div className='row'>
                  <div className='card-title'>Студия татуажа</div>
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
              <img loading='lazy' src='img/product-5.png' alt='product-5' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='row'>
                  <div className='card-tag'>#Лендинги</div>
                  <div className='card-favourites'>
                    <i className='heart-empty'></i>
                  </div>
                </div>
                <div className='row'>
                  <div className='card-title'>Студия татуажа</div>
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
              <img loading='lazy' src='img/product-6.png' alt='product-6' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='row'>
                  <div className='card-tag'>#Лендинги</div>
                  <div className='card-favourites'>
                    <i className='heart-empty'></i>
                  </div>
                </div>
                <div className='row'>
                  <div className='card-title'>Студия татуажа</div>
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
        <div className='product-pagination-container'>
          <div className='product-pagination'>
            <a href='#' className='pagination-arrow-back'></a>
            <a href='#'>1</a>
            <a href='#'>2</a>
            <a href='#'>3</a>
            <a href='#'>4</a>
            <span>...</span>
            <a href='#'>10</a>
            <a href='#'>11</a>
            <a href='#' className='pagination-arrow-forward'>
              Вперёд
            </a>
          </div>
        </div>
      </div>

      <div className='section'>
        <div className='sidebar-form-container'>
          <div className='col-one'>
            <div className='sidebar-form-title'>
              Не знаете, какое готовое решение вам подойдёт?
            </div>

            <div className='sidebar-form-label'>
              Заполните форму и мы поможем Вам подобрать оптимальное решение
            </div>
            <form className='sidebar-form-inputs' action=''>
              <input type='text' id='name' placeholder='Ваше имя' />
              <div className='row'>
                <input
                  type='tel'
                  id='phone'
                  pattern='\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}'
                  placeholder='+7 (_ _ _) _ _ _ - _ _ - _ _'
                />
                <select id='area'>
                  Сфера деятельности
                  <option value='0'>Сфера деятельности</option>
                  <option value='Строительство'>Строительство</option>
                  <option value='Медицина'>Медицина</option>
                </select>
              </div>
              <div className='sidebar-form-label-button'>
                Нажимая на кнопку, вы даёте согласие на обработку Персональных
                данных
              </div>

              <button className='sidebar-form-button button-primary'>
                Получить предложение
              </button>
            </form>
          </div>

          <div className='col-two'>
            <div className='sidebar-form-img'>
              <img
                loading='lazy'
                src='img/form-image.svg'
                alt='sidebar-form-image'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='section'>
        <h1>Почему выгодно использовать наши готовые разработки?</h1>
      </div>
      <div className='section'>
        <h1>Сайты на наших решениях</h1>
      </div>
      <div className='section'>
        <h1>Дополнительные услуги</h1>
      </div>
      <div className='section'>
        <h1>Отзывы клиентов о готовых решениях</h1>
      </div>
      <div className='section'>
        <h1>Вопрос - ответ</h1>
      </div>
      <div className='section'>
        <h1>Полезные советы</h1>
      </div>
    </main>
  )
}

export default HomePage
