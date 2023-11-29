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
                <img
                  src='img/icons/item-food.svg'
                  alt='Еда, напитки'
                />
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
                <img
                  src='img/icons/item-services.svg'
                  alt='Услугм'
                />
                Услугм
                <span className='item-count'>100</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
