import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

const HomePage = () => {
  return (
    <main className='main'>
      <div className='section'>
        <div className='hero-wrapper'>
          <div className='hero-description'>
            <div className='hero-title'>
              Готовые сайты под ключ
              <div className='row'>
                <span className='f-red'>
                  от <span className='f-serif'>7000</span> рублей!
                </span>
              </div>
            </div>

            <div className='hero-subtitle'>
              Сэкономьте от 75% до 95% бюджета на разработку сайта с помощью
              готовых решений
            </div>
            <div className='hero-advantages-container'>
              <div className='hero-advantage'>
                <div className='hero-advantage-image'>
                  <span className='hero-advantage-image-digit f-serif'>1</span>
                </div>
                <div className='hero-advantage-text'>
                  Высокая конверсия сайтов в рекламе
                </div>
              </div>
              <div className='hero-advantage'>
                <div className='hero-advantage-image'>
                  <span className='hero-advantage-image-digit f-serif'>2</span>
                </div>
                <div className='hero-advantage-text'>
                  Идеально подходят для SEO-продвижения
                </div>
              </div>
              <div className='hero-advantage'>
                <div className='hero-advantage-image'>
                  <span className='hero-advantage-image-digit f-serif'>3</span>
                </div>
                <div className='hero-advantage-text'>
                  Не требуют знаний программного кода
                </div>
              </div>
            </div>
            <div className='hero-button button-primary'>
              <a href='#'>Заказать готовое решение</a>
            </div>
          </div>
          <div className='hero-image'>
            <img src='img/hero-image.svg' alt='hero-image' loading='lazy' />
          </div>
        </div>
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
                    <a href='product'>Подробнее</a>
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
                    <a href='product'>Подробнее</a>
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
                    <a href='product'>Подробнее</a>
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
            <a href='#' className='pagination-arrow-forward'></a>
          </div>
        </div>
      </div>

      <div className='section'>
        <div className='sidebar-form-wrapper'>
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
            <div className='sidebar-form-image'>
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
            <div className='avantages-item-image'>
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
            <div className='avantages-item-image'>
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
            <div className='avantages-item-image'>
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
            <div className='avantages-item-image'>
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
            <div className='avantages-item-image'>
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
            <div className='avantages-item-image'>
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
        {/* 
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
        */}
        <div className='works-swiper-wrapper'>
          <Swiper
            className='works-swiper'
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <div className='swiper-slide-overflow'>
                <div className='slide-link'>
                  <a href='https://www.dobruy-doctor.ru/'>
                    https://www.dobruy-doctor.ru/
                  </a>
                </div>
                <div className='slide-title'>
                  Добрый доктор - Сеть ветеринарных клиник
                </div>
                <div className='slide-city'>г. Москва</div>
                <div className='slide-button button-primary'>
                  Хочу такой сайт
                </div>
              </div>
              <img src='img/product-1.png' alt='product-1' />
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiper-slide-overflow'>
                <div className='slide-link'>
                  <a href='https://www.dobruy-doctor.ru/'>
                    https://www.dobruy-doctor.ru/
                  </a>
                </div>
                <div className='slide-title'>
                  Добрый доктор - Сеть ветеринарных клиник
                </div>
                <div className='slide-city'>г. Москва</div>
                <div className='slide-button button-primary'>
                  Хочу такой сайт
                </div>
              </div>
              <img src='img/product-2.png' alt='product-2' />
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiper-slide-overflow'>
                <div className='slide-link'>
                  <a href='https://www.dobruy-doctor.ru/'>
                    https://www.dobruy-doctor.ru/
                  </a>
                </div>
                <div className='slide-title'>
                  Добрый доктор - Сеть ветеринарных клиник
                </div>
                <div className='slide-city'>г. Москва</div>
                <div className='slide-button button-primary'>
                  Хочу такой сайт
                </div>
              </div>
              <img src='img/product-3.png' alt='product-3' />
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiper-slide-overflow'>
                <div className='slide-link'>
                  <a href='https://www.dobruy-doctor.ru/'>
                    https://www.dobruy-doctor.ru/
                  </a>
                </div>
                <div className='slide-title'>
                  Добрый доктор - Сеть ветеринарных клиник
                </div>
                <div className='slide-city'>г. Москва</div>
                <div className='slide-button button-primary'>
                  Хочу такой сайт
                </div>
              </div>
              <img src='img/product-4.png' alt='product-4' />
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiper-slide-overflow'>
                <div className='slide-link'>
                  <a href='https://www.dobruy-doctor.ru/'>
                    https://www.dobruy-doctor.ru/
                  </a>
                </div>
                <div className='slide-title'>
                  Добрый доктор - Сеть ветеринарных клиник
                </div>
                <div className='slide-city'>г. Москва</div>
                <div className='slide-button button-primary'>
                  Хочу такой сайт
                </div>
              </div>
              <img src='img/product-5.png' alt='product-5' />
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiper-slide-overflow'>
                <div className='slide-link'>
                  <a href='https://www.dobruy-doctor.ru/'>
                    https://www.dobruy-doctor.ru/
                  </a>
                </div>
                <div className='slide-title'>
                  Добрый доктор - Сеть ветеринарных клиник
                </div>
                <div className='slide-city'>г. Москва</div>
                <div className='slide-button button-primary'>
                  Хочу такой сайт
                </div>
              </div>
              <img src='img/product-6.png' alt='product-6' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className='section'>
        <h1>Дополнительные услуги</h1>
        <div className='services-wrapper'>
          <div className='services-table-header'>
            <div className='item-name'>Услуга</div>
            <div className='item-price'>Стоимость в рублях</div>
            <div className='item-buttons'></div>
          </div>

          <div className='services-table-item'>
            <div className='services-table-item-category'>
              <img
                className='category-icon'
                src='img/icons/service-1.svg'
                alt='Изменение цета'
              />
              <div className='category-title'>Изменение цета</div>
            </div>

            <div className='services-item-container'>
              <div className='services-table-item-row'>
                <div className='item-name'>Лендинг</div>
                <div className='item-price'>550</div>
                <div className='item-buttons'>
                  <div className='button-outline'>
                    <span>Подробнее</span>
                  </div>
                  <div className='button-primary'>
                    <a href='#'> Заказать</a>
                  </div>
                </div>
              </div>
              <div className='services-table-item-dropdown'>
                Предварительные выводы неутешительны: реализация намеченных
                плановых заданий, а также свежий взгляд на привычные вещи —
                безусловно открывает новые горизонты для благоприятных
                перспектив. Наше дело не так однозначно, как может показаться:
                экономическая повестка сегодняшнего дня однозначно определяет
                каждого участника как способного принимать собственные решения
                касаемо существующих финансовых и административных условий.
                Предварительные выводы неутешительны: экономическая повестка
                сегодняшнего дня однозначно.
              </div>
            </div>
            <div className='services-item-container'>
              <div className='services-table-item-row'>
                <div className='item-name'>корпоративный сайт</div>
                <div className='item-price'>1 500</div>
                <div className='item-buttons'>
                  <div className='button-outline'>
                    <span>Подробнее</span>
                  </div>
                  <div className='button-primary'>
                    <a href='#'> Заказать</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='services-item-container'>
              <div className='services-table-item-row'>
                <div className='item-name'>интернет-магазин</div>
                <div className='item-price'>3 500</div>
                <div className='item-buttons'>
                  <div className='button-outline'>
                    <span>Подробнее</span>
                  </div>
                  <div className='button-primary'>
                    <a href='#'> Заказать</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='services-table-item'>
            <div className='services-table-item-category'>
              <img
                className='category-icon'
                src='img/icons/service-2.svg'
                alt='Дизайн'
              />
              <div className='category-title'>Дизайн</div>
            </div>
            <div className='services-item-container'>
              <div className='services-table-item-row'>
                <div className='item-name'>разработка логотипа</div>
                <div className='item-price'>10 500</div>
                <div className='item-buttons'>
                  <div className='button-outline'>
                    <span>Подробнее</span>
                  </div>
                  <div className='button-primary'>
                    <a href='#'> Заказать</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='services-item-container'>
              <div className='services-table-item-row'>
                <div className='item-name'>разработка иконок</div>
                <div className='item-price'>250 руб за 1 штуку</div>
                <div className='item-buttons'>
                  <div className='button-outline'>
                    <span>Подробнее</span>
                  </div>
                  <div className='button-primary'>
                    <a href='#'> Заказать</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='services-table-item'>
            <div className='services-table-item-category'>
              <img
                className='category-icon'
                src='img/icons/service-3.svg'
                alt='Тех. поддержка'
              />
              <div className='category-title'>Тех. поддержка</div>
            </div>
            <div className='services-item-container'>
              <div className='services-table-item-row'>
                <div className='item-name'>
                  Тех. Поддержка (Доработка или разработка функционала)
                </div>
                <div className='item-price'>
                  Индивидуальный просчет из расчета 1 час программиста или
                  верстальщика 1100 руб
                </div>
                <div className='item-buttons'>
                  <div className='button-outline'>
                    <span>Подробнее</span>
                  </div>
                  <div className='button-primary'>
                    <a href='#'> Заказать</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='services-item-container'>
              <div className='services-table-item-row'>
                <div className='item-name'>добавить новый блок</div>
                <div className='item-price'>2 500</div>
                <div className='item-buttons'>
                  <div className='button-outline'>
                    <span>Подробнее</span>
                  </div>
                  <div className='button-primary'>
                    <a href='#'> Заказать</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='services-item-container'>
              <div className='services-table-item-row'>
                <div className='item-name'>установка антиспама</div>
                <div className='item-price'>3 500</div>
                <div className='item-buttons'>
                  <div className='button-outline'>
                    <span>Подробнее</span>
                  </div>
                  <div className='button-primary'>
                    <a href='#'> Заказать</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='services-table-item'>
            <div className='services-table-item-category'>
              <img
                className='category-icon'
                src='img/icons/service-4.svg'
                alt='Наполнение контентом'
              />
              <div className='category-title'>Наполнение контентом</div>
            </div>
            <div className='services-item-container'>
              <div className='services-table-item-row'>
                <div className='item-name'>написание текстов</div>
                <div className='item-price'>300 руб за 1000 знаков</div>
                <div className='item-buttons'>
                  <div className='button-outline'>
                    <span>Подробнее</span>
                  </div>
                  <div className='button-primary'>
                    <a href='#'> Заказать</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='services-item-container'>
              <div className='services-table-item-row'>
                <div className='item-name'>
                  заливка карточек товара до 100 шт.
                </div>
                <div className='item-price'>5 500</div>
                <div className='item-buttons'>
                  <div className='button-outline'>
                    <span>Подробнее</span>
                  </div>
                  <div className='button-primary'>
                    <a href='#'> Заказать</a>
                  </div>
                </div>
              </div>
            </div>

            <div className='services-item-container'>
              <div className='services-table-item-row'>
                <div className='item-name'>
                  заливка карточек от 101 до 500 шт
                </div>
                <div className='item-price'>10 500</div>
                <div className='item-buttons'>
                  <div className='button-outline'>
                    <span>Подробнее</span>
                  </div>
                  <div className='button-primary'>
                    <a href='#'> Заказать</a>
                  </div>
                </div>
              </div>
            </div>

            <div className='services-item-container'>
              <div className='services-table-item-row'>
                <div className='item-name'>заливка карточек до 1000 шт</div>
                <div className='item-price'>16 500</div>
                <div className='item-buttons'>
                  <div className='button-outline'>
                    <span>Подробнее</span>
                  </div>
                  <div className='button-primary'>
                    <a href='#'> Заказать</a>
                  </div>
                </div>
              </div>
            </div>

            <div className='services-item-container'>
              <div className='services-table-item-row'>
                <div className='item-name'>
                  обработка и размещение контента (фото, текстов)
                </div>
                <div className='item-price'>
                  Индивидуальный просчет из расчета 1 час контент-менеджера 750
                  руб
                </div>
                <div className='item-buttons'>
                  <div className='button-outline'>
                    <span>Подробнее</span>
                  </div>
                  <div className='button-primary'>
                    <a href='#'> Заказать</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section'>
        <h1>Отзывы клиентов о готовых решениях</h1>
        <div className='reviews-swiper-wrapper'>
          <Swiper
            className='reviews-swiper'
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <div className='review-top'>
                <div className='review-head'>
                  <img src='img/review-1.png' alt='review-1' />
                  <div className='review-name'>Katrin P.</div>
                </div>
                <div className='review-text'>
                  Обращалась за консультацией в Агелар, было очень много
                  вопросов по тому, как все наши хотелки совместить на одной
                  площадке. Казалось это нереальным, но благодаря команде Агелар
                  всё удалось успешно реализовать. Благодарю и всем рекомендую!
                </div>
              </div>
              <a href='#' className='review-original'>
                Посмотреть оригинал отзыва
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <div className='review-top'>
                <div className='review-head'>
                  <img src='img/review-2.png' alt='review-2' />
                  <div className='review-name'>Дмитрий С</div>
                </div>
                <div className='review-text'>
                  С компанией Агелар мы тесно сотрудничаем с прошлого года. За
                  это время был создан с 0 новый сайт компании, по всем
                  тематическим запросам сейчас этот сайт находится в Топ 10
                  выдачи Яндекса. Это позволяет привлекать целевых клиентов.
                  Эффективность такого продвижения значительно выше чем просто
                  реклама в Я. Директ. Рекомендую!
                </div>
              </div>
              <a href='#' className='review-original'>
                Посмотреть оригинал отзыва
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <div className='review-top'>
                <div className='review-head'>
                  <img
                    className='review-image'
                    src='img/review-3.png'
                    alt='review-3'
                  />
                  <div className='review-name'>Зоя Анисина</div>
                </div>
                <div className='review-text'>
                  Заказывали полный аудит нашего сайта. Проблема была, по
                  Яндексу выше топ 40 не могли подняться. За время работы были
                  устранены ошибки разработчиков, пересмотрены запросы,
                  переотимизирован сайт. Через месяц сайт начал рости. Спустя 3
                  месяца сайт на 50% по запросам вышел в топ. С поставленной
                  задачей ребята справились.
                </div>
              </div>
              <a href='#' className='review-original'>
                Посмотреть оригинал отзыва
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <div className='review-top'>
                <div className='review-head'>
                  <img src='img/review-1.png' alt='review-1' />
                  <div className='review-name'>Katrin P.</div>
                </div>
                <div className='review-text'>
                  Обращалась за консультацией в Агелар, было очень много
                  вопросов по тому, как все наши хотелки совместить на одной
                  площадке. Казалось это нереальным, но благодаря команде Агелар
                  всё удалось успешно реализовать. Благодарю и всем рекомендую!
                </div>
              </div>
              <a href='#' className='review-original'>
                Посмотреть оригинал отзыва
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className='section'>
        <div className='qna-wrapper'>
          <h1> Вопрос - ответ</h1>
          <div className='qna-container'>
            <div className='qna-item'>
              <div className='qna-item-title'>
                Как оценивать результаты SEO (СЕО)?
              </div>
              <div className='qna-item-dropdown'>
                Во-первых, можно проверить, на каком месте находится сайт в
                выдаче по ключевым запросам. В ежемесячном отчёте от нашей
                компании всегда указана позиция ресурса в поиске. Следующий
                критерий — количество новых посетителей, пришедших на сайт после
                его оптимизации. В нашем ежемесячном отчёте также есть эта
                информация. Наконец, повышение конверсии также указывает на
                качественную работу оптимизатора.
              </div>
            </div>
            <div className='qna-item'>
              <div className='qna-item-title'>Когда СЕО начинает работать?</div>
              <div className='qna-item-dropdown'>
                Во-первых, можно проверить, на каком месте находится сайт в
                выдаче по ключевым запросам. В ежемесячном отчёте от нашей
                компании всегда указана позиция ресурса в поиске.
              </div>
            </div>
            <div className='qna-item'>
              <div className='qna-item-title'>
                Быстрое или качественное СЕО-продвижение?
              </div>
              <div className='qna-item-dropdown'>...</div>
            </div>
            <div className='qna-item'>
              <div className='qna-item-title'>
                Можно ли получить какие-то гарантии продвижения сайта?
              </div>
              <div className='qna-item-dropdown'>...</div>
            </div>
            <div className='qna-item'>
              <div className='qna-item-title'>
                Можно ли получить какие-то гарантии продвижения сайта?
              </div>
              <div className='qna-item-dropdown'>...</div>
            </div>
            <div className='qna-item'>
              <div className='qna-item-title'>Что такое СЕО оптимизация?</div>
              <div className='qna-item-dropdown'>...</div>
            </div>
            <div className='qna-item'>
              <div className='qna-item-title'>
                Как оценивать результаты SEO (СЕО)?
              </div>
              <div className='qna-item-dropdown'>...</div>
            </div>
            <div className='qna-item'>
              <div className='qna-item-title'>Когда СЕО начинает работать?</div>
              <div className='qna-item-dropdown'>...</div>
            </div>
            <div className='qna-item'>
              <div className='qna-item-title'>
                Быстрое или качественное СЕО-продвижение?
              </div>
              <div className='qna-item-dropdown'>...</div>
            </div>
            <div className='qna-item'>
              <div className='qna-item-title'>
                Можно ли получить какие-то гарантии продвижения сайта?
              </div>
              <div className='qna-item-dropdown'>...</div>
            </div>
            <div className='qna-item'>
              <div className='qna-item-title'>Что такое СЕО оптимизация?</div>
              <div className='qna-item-dropdown'>...</div>
            </div>
          </div>
          <div className='qna-more'>
            <a href='#'>Смотреть ещё</a>
          </div>
        </div>
      </div>

      <div className='section'>
        <h1>Полезные советы</h1>
        <div className='tips-swiper-wrapper'>
          <Swiper
            className='tips-swiper'
            spaceBetween={30}
            slidesPerView={2.5}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <a href='#' className='tip-container'>
                <div className='tips-image'>
                  <img src='img/tip-1.png' alt='tip-1' />
                </div>
                <div className='tip-text'>
                  Закупка ссылок всегда работала и будет работать
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href='#' className='tip-container'>
                <div className='tips-image'>
                  <img src='img/tip-2.png' alt='tip-2' />
                </div>
                <div className='tip-text'>Текст как инструмент продвижения</div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href='#' className='tip-container'>
                <div className='tips-image'>
                  <img src='img/tip-3.png' alt='tip-3' />
                </div>
                <div className='tip-text'>
                  Закупка ссылок всегда работала и будет работать
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </main>
  )
}

export default HomePage
