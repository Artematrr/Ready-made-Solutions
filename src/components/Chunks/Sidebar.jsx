const Sidebar = () => {
  return (
    <aside className='sidebar-wrapper'>
      <div className='sidebar-inner'>
        <div className='logo'>
          <img src='img/logo.svg' alt='Готовые Решения' />
        </div>
        <div className='sidebar-nav-label'>Каталог сайтов</div>
        <div className='sidebar-nav'>
          <ul className='sidebar-nav-list'>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  src='img/icons/item-universal.svg'
                  alt='Универсальный дизайн'
                />
                Универсальный дизайн
                <span className='item-count'>10</span>
              </a>
            </li>
            <li className='sidebar-nav-item level-1 open'>
              <a href='#'>
                <img src='img/icons/item-food.svg' alt='Еда, напитки' />
                Еда, напитки
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
                  src='img/icons/item-medicine.svg'
                  alt='Медицина, красота, здоровье'
                />
                Медицина, красота, здоровье
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
              </ul>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  src='img/icons/item-build.svg'
                  alt='Строительство, ремонт'
                />
                Строительство, ремонт
                <span className='item-count'>100</span>
              </a>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img src='img/icons/item-services.svg' alt='Услугм' />
                Услугм
                <span className='item-count'>100</span>
              </a>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  src='img/icons/item-education.svg'
                  alt='Образование, курсы, сми'
                />
                Образование, курсы, сми
                <span className='item-count'>100</span>
              </a>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
                  src='img/icons/item-transport.svg'
                  alt='Транспорт, спецтехника'
                />
                Транспорт, спецтехника
                <span className='item-count'>100</span>
              </a>
            </li>
            <li className='sidebar-nav-item level-1'>
              <a href='#'>
                <img
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
          </ul>
        </div>
        <div className='sidebar-form-container'>
          <div className='sidebar-form-title'>
            Не знаете, какое готовое решение вам подойдёт?
          </div>
          <div className='sidebar-form-img'>
            <img src='img/sidebar-form-image.svg' alt='sidebar-form-image' />
          </div>
          <div className='sidebar-form-label'>
            Заполните форму и мы поможем Вам подобрать оптимальное решение
          </div>
          <form className='sidebar-form-inputs' action=''>
            <input type='text' id='name' placeholder='Ваше имя' />
            <row>
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
            </row>
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
