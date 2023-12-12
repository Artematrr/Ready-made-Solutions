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
        </div>

        <div className='banner'>
          <a href='#'>
            <img
              loading='lazy'
              src='/img/banner.png'
              alt='Акция! При заказе 2-х и более сайтов скидка 20%'
            />
          </a>
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
        </div>
        <div className='product-pagination-container'>
          <div className='product-pagination'>
            <a href='#' className='pagination-arrow-back'></a>
            <a href='#'>1</a>
            <a href='#'>2</a>
            <a href='#'>3</a>
            <span>...</span>
            <a href='#'>10</a>
            <a href='#'>11</a>
            <a href='#' className='pagination-arrow-forward'>
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
        <div className='avantages-wrapper'>
          <div className='avantages-item'>
            <div className='avantages-item-img'>
              <img
                loading='lazy'
                src='img/icons/advantage-1.svg'
                alt='Дешевле в 10-15 раз!'
              />
            </div>
            <div className='avantages-item-decsription'>
              <div className='avantages-item-title'>Дешевле в 10-15 раз!</div>
              <div className='avantages-item-text'>
                В среднем разработка корпоративного сайта такого же уровня как
                наши готовые решения стоит на рынке 100 000 - 150 000 рублей.
                Наши сайты стоят 7900 - 15 900 рублей. Разница в расходах
                колоссальная, средняя экономия бюджета - 90-95%.
              </div>
            </div>
          </div>

          <div className='avantages-item'>
            <div className='avantages-item-img'>
              <img
                loading='lazy'
                src='img/icons/advantage-2.svg'
                alt='Это легко и просто!'
              />
            </div>
            <div className='avantages-item-decsription'>
              <div className='avantages-item-title'>Это легко и просто!</div>
              <div className='avantages-item-text'>
                Наши готовые сайты разработаны на Modex. Редактировать текстовый
                и графический контент сайта можно в админ-панели без знаний
                программного кода. С этим справится любой пользователь ПК.
              </div>
            </div>
          </div>

          <div className='avantages-item'>
            <div className='avantages-item-img'>
              <img
                loading='lazy'
                src='img/icons/advantage-3.svg'
                alt='Подходят для SEO и рекламы!'
              />
            </div>
            <div className='avantages-item-decsription'>
              <div className='avantages-item-title'>
                Подходят для SEO и рекламы!
              </div>
              <div className='avantages-item-text'>
                Готовые сайты имеют продуманную структуру, оптимизированы и
                хорошо продвигаются в поиске, адаптированы под все устройства и
                имеют высокую конверсию 5-10%. Продаются полностью заполненными
                с уникальными текстами.
              </div>
            </div>
          </div>

          <div className='avantages-item'>
            <div className='avantages-item-img'>
              <img
                loading='lazy'
                src='img/icons/advantage-4.svg'
                alt='Быстрее в 20 раз!'
              />
            </div>
            <div className='avantages-item-decsription'>
              <div className='avantages-item-title'>Быстрее в 20 раз!</div>
              <div className='avantages-item-text'>
                Разработка сайта с нуля занимает не менее 60 дней. Наши готовые
                сайты покупатели запускают за 3 дня. Есть даже те, кто запускает
                за 1 день, так как наши готовые решения максимально
                оптимизированы для этого.
              </div>
            </div>
          </div>

          <div className='avantages-item'>
            <div className='avantages-item-img'>
              <img
                loading='lazy'
                src='img/icons/advantage-5.svg'
                alt='Функционал и гибкость!'
              />
            </div>
            <div className='avantages-item-decsription'>
              <div className='avantages-item-title'>Функционал и гибкость!</div>
              <div className='avantages-item-text'>
                Возможности готового решения покрывают все потребности владельца
                корпоративного сайта в 95% случаев. А гибкость CMS позволяет
                доработать сайт под абсолютно любые нужды не более, чем за 10
                рабочих часов junior-программиста.
              </div>
            </div>
          </div>

          <div className='avantages-item'>
            <div className='avantages-item-img'>
              <img
                loading='lazy'
                src='img/icons/advantage-6.svg'
                alt='Бесплатные в обслуживании!'
              />
            </div>
            <div className='avantages-item-decsription'>
              <div className='avantages-item-title'>
                Бесплатные в обслуживании!
              </div>
              <div className='avantages-item-text'>
                В отличие от других сервисов и систем управления сайтами, наши
                готовые решения не имеют расходов на оплату лицензий, платформ и
                доступов. Никаких затрат, кроме покупки личного домена и
                хостинга не требуется!
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='section'>
        <h1>Сайты созданные на наших решениях</h1>
        <div className='works-swiper-wrapper'>
          <div className='swiper works-swiper'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <img src='img/product-1.png' alt='product-1' />
              </div>
              <div className='swiper-slide'>
                <img src='img/product-2.png' alt='product-2' />
              </div>
              <div className='swiper-slide'>
                <img src='img/product-3.png' alt='product-3' />
              </div>
              <div className='swiper-slide'>
                <img src='img/product-4.png' alt='product-4' />
              </div>
              <div className='swiper-slide'>
                <img src='img/product-5.png' alt='product-5' />
              </div>
              <div className='swiper-slide'>
                <img src='img/product-6.png' alt='product-6' />
              </div>
            </div>
            <div className='swiper-button-prev'></div>
            <div className='swiper-button-next'></div>
          </div>
        </div>
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
