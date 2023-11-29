const Header = () => {
  return (
    <header>
      <nav className='nav-container'>
        <div className='nav-button nav-city'>
          <a href='#'>Москва</a>
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
          </div>
          <div className='header-cart'>
            <img
              src='img/icons/shopping-bag.svg'
              alt='Корзина'
              title='Корзина'
            />
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
