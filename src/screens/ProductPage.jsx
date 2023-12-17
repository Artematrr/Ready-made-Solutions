import { A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Breadcrumbs from '../components/elements/Breadcrumbs'

const Product = () => {
  return (
    <main className='main'>
      <Breadcrumbs />
      <div className=''>Пред показ сайта в разных размерах</div>
      <div className=''>Описание сайта</div>
      <div className=''>Дополнительных функционал</div>
      <div className=''>К оплате принимаются</div>
      <div className=''>Под какие сферы подходит</div>


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
            modules={[A11y]}
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


    </main>
  )
}

export default Product
