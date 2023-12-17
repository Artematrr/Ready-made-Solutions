const Sidebar = () => {
  return (
    <aside className='sidebar-wrapper'>
      <div className='sidebar-inner'>
        <div className='logo'>
          <a href='/'>
            <img loading='lazy' src='img/logo.svg' alt='Готовые Решения' />
          </a>
        </div>
        <div className='sidebar-nav-label'>Каталог сайтов</div>
        <div className='sidebar-nav'>
          <ul className='sidebar-nav-list'>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  loading='lazy'
                  src='img/icons/item-universal.svg'
                  alt='Универсальный дизайн'
                />
                <span>Универсальный дизайн</span>
                <span className='item-count'>10</span>
              </a>
            </li>
            <li className='sidebar-nav-item level-1 open'>
              <a href='#'>
                <img
                  loading='lazy'
                  src='img/icons/item-food.svg'
                  alt='Еда, напитки'
                />
                <span>Еда, напитки</span>
                <span className='item-count'>100</span>
              </a>
              <ul className='sidebar-nav-list'>
                <li className='sidebar-nav-item level-2'>
                  <a href='/product'>
                    <span>Продуктовые сайты</span>
                    <span className='item-count'>10</span>
                  </a>
                </li>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    <span>Для бара</span>
                    <span className='item-count'>10</span>
                  </a>
                </li>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    <span>Для кондитерской</span>
                    <span className='item-count'>10</span>
                  </a>
                </li>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    <span>Для кофейни</span>
                    <span className='item-count'>10</span>
                  </a>
                </li>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    <span>Для суши и роллы</span>
                    <span className='item-count'>10</span>
                  </a>
                </li>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    <span>Для фаст фуда</span>
                    <span className='item-count'>10</span>
                  </a>
                </li>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    <span>Для доставки еды</span>
                    <span className='item-count'>10</span>
                  </a>
                </li>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    <span>Для ресторана</span>
                    <span className='item-count'>10</span>
                  </a>
                </li>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    <span>Для продажи рыбной продукции</span>
                    <span className='item-count'>10</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  loading='lazy'
                  src='img/icons/item-medicine.svg'
                  alt='Медицина, красота, здоровье'
                />
                <span>Медицина, красота, здоровье</span>
                <span className='item-count'>100</span>
              </a>
              <ul className='sidebar-nav-list'>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    <span>Подуктовые сайты</span>
                    <span className='item-count'>10</span>
                  </a>
                </li>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    <span>Для бара</span>
                    <span className='item-count'>10</span>
                  </a>
                </li>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    <span>Для кондитерской</span>
                    <span className='item-count'>10</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  loading='lazy'
                  src='img/icons/item-build.svg'
                  alt='Строительство, ремонт'
                />
                <span>Строительство, ремонт</span>
                <span className='item-count'>100</span>
              </a>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  loading='lazy'
                  src='img/icons/item-services.svg'
                  alt='Услугм'
                />
                <span>Услугм</span>
                <span className='item-count'>100</span>
              </a>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  loading='lazy'
                  src='img/icons/item-education.svg'
                  alt='Образование, курсы, сми'
                />
                <span>Образование, курсы, сми</span>
                <span className='item-count'>100</span>
              </a>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  loading='lazy'
                  src='img/icons/item-transport.svg'
                  alt='Транспорт, спецтехника'
                />
                <span>Транспорт, спецтехника</span>
                <span className='item-count'>100</span>
              </a>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  loading='lazy'
                  src='img/icons/item-electronic.svg'
                  alt='Электроника, бытовое оборудование'
                />
                <span>Электроника, бытовое оборудование</span>
                <span className='item-count'>100</span>
              </a>
              <ul className='sidebar-nav-list'>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    Подуктовые сайты
                    <span className='item-count'>10</span>
                  </a>
                </li>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    Для бара
                    <span className='item-count'>10</span>
                  </a>
                </li>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    Для кондитерской
                    <span className='item-count'>10</span>
                  </a>
                </li>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    Для кофейни
                    <span className='item-count'>10</span>
                  </a>
                </li>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    Для суши и роллы
                    <span className='item-count'>10</span>
                  </a>
                </li>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    Для фаст фуда
                    <span className='item-count'>10</span>
                  </a>
                </li>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    Для доставки еды<span className='item-count'>10</span>
                  </a>
                </li>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    Для ресторана<span className='item-count'>10</span>
                  </a>
                </li>
                <li className='sidebar-nav-item level-2'>
                  <a href='#'>
                    Для продажи рыбной продукции
                    <span className='item-count'>10</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  loading='lazy'
                  src='img/icons/item-entertainment.svg'
                  alt='Досуг, развлечения, искусство'
                />
                <span>Досуг, развлечения, искусство</span>
                <span className='item-count'>100</span>
              </a>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  loading='lazy'
                  src='img/icons/item-sport.svg'
                  alt='Транспорт, спецтехника'
                />
                <span>Спорт и туризм</span>
                <span className='item-count'>100</span>
              </a>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  loading='lazy'
                  src='img/icons/item-society.svg'
                  alt='Государство и общество'
                />
                <span>Государство и общество</span>
                <span className='item-count'>100</span>
              </a>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  loading='lazy'
                  src='img/icons/item-lendings.svg'
                  alt='Лендинги'
                />
                <span> Лендинги</span>
                <span className='item-count'>100</span>
              </a>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  loading='lazy'
                  src='img/icons/item-e-shop.svg'
                  alt='Интернет-магазины'
                />
                <span> Интернет-магазины</span>
                <span className='item-count'>100</span>
              </a>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  loading='lazy'
                  src='img/icons/item-business-card.svg'
                  alt='Сайты визитки'
                />
                <span> Сайты визитки</span>
                <span className='item-count'>100</span>
              </a>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  loading='lazy'
                  src='img/icons/item-corporate.svg'
                  alt='Корпоративные сайты'
                />
                <span> Корпоративные сайты</span>
                <span className='item-count'>100</span>
              </a>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  loading='lazy'
                  src='img/icons/item-single-page.svg'
                  alt='Одностраничные сайты'
                />
                <span> Одностраничные сайты</span>
                <span className='item-count'>100</span>
              </a>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  loading='lazy'
                  src='img/icons/item-announcement.svg'
                  alt='Сайты объявлений'
                />
                <span> Сайты объявлений</span>
                <span className='item-count'>100</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='sidebar-form-wrapper'>
          <div className='sidebar-form-title'>
            Не знаете, какое готовое решение вам подойдёт?
          </div>
          <div className='sidebar-form-img'>
            <img
              loading='lazy'
              src='img/sidebar-form-image.svg'
              alt='sidebar-form-image'
            />
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

        <div className='sidebar-tags-label'>Сферы бизнеса</div>
        <div className='sidebar-tags'>
          <a>Лендинги</a>
          <a>Интернет-магазины</a>
          <a>Корпоративные</a>
          <a>Лендинги</a>
          <a>Интернет-магазины</a>
          <a>Корпоративные</a>
          <a>Лендинги</a>
          <a>Интернет-магазины</a>
          <a>Корпоративные</a>
          <a>Визитки</a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
