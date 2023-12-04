const Header = () => {
  return (
    <header>
      <nav className='nav-container'>
        <div className='nav-button nav-city'>
          <a href='#'>Москва</a>
          <div className='nav-city-dropdown'>
            <a data-city='Москва' href='#'>
              Москва
            </a>
            <a data-city='Самара' href='#'>
              Самара
            </a>
            <a data-city='Санкт-Петербург' href='#'>
              Санкт-Петербург
            </a>
            <a data-city='Ростов-на-Дону' href='#'>
              Ростов-на-Дону
            </a>
            <a data-city='Набережные Челны' href='#'>
              Набережные Челны
            </a>
          </div>
        </div>
        <div className='nav-button'>
          <a href='#'>Каталог сайтов</a>
        </div>
        <div className='nav-button'>
          <a href='#'>Логотипы</a>
        </div>
        <div className='nav-button'>
          <a href='#'>Тюнинг сайта</a>
        </div>
        <div className='nav-button'>
          <a href='#'>Готовые решения</a>
        </div>
        <div className='nav-button nav-phone'>
          <a href='#'>+7 (495) 000-00-00</a>
        </div>
        <div className='nav-button order-site'>
          <a href='#'>Заказать сайт</a>
        </div>
      </nav>

      <div className='top-bar'>
        <div className='search-container'>
          <input
            className='search'
            type='search'
            placeholder='Поиск, например: Цветы, ремонт, игрушки, двери '
          />
        </div>

        <div className='header-actions-container'>
          <div className='header-favourites'>
            <img
              src='img/icons/heart.svg'
              alt='Избранное'
              title='Избранное'
            ></img>
            <div className='header-favourites-count'>100</div>
          </div>
          <div className='header-cart'>
            <img
              src='img/icons/shopping-bag.svg'
              alt='Корзина'
              title='Корзина'
            />
            <div className='header-cart-count'>100</div>
          </div>
          <div className='header-profile'>
            <img
              src='img/icons/user-square.svg'
              alt='Профиль'
              title='Профиль'
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
