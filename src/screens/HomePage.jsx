const HomePage = () => {
  return (
    <main className='main'>
      <div className='section'>Шапка на главной</div>
      <div className='section'>
        <h1> Купить готовый сайт</h1>

        <div className='sort-container'>
          <div className='sort-label'>Сортировать по</div>
          <div className='sort-container'>
            <div className='sort-corrent'>Популярности</div>
            <div className='sort-dropdown'>
              <a href='#'>Популярности</a>
              <a href='#'>Цене</a>
              <a href='#'>Дате</a>
            </div>
          </div>
        </div>

        <div className='filter-wrapper'>
          <div className='button-primary'>Все</div>
          <div className='button-primary'>Лендинги</div>
          <div className='button-primary'>Интернет-магазины</div>
          <div className='button-primary'>Корпоративные</div>
          <div className='button-primary'>Визитки</div>
        </div>

        <div className='product-cards-wrapper'>
          <div className='product-card'>
            <div className='card-image'>
              <img src='/public/img/product-1.png' alt='' />
            </div>
            <div className='card-detail'>
              <div className='card-top'>
                <div className='card-category'>#Лендинги</div>
                <div className='card-title'>Студия татуажа</div>
                <div className='card-article'>Арт. L-023</div>
                <div className='card-favourites'>Heart</div>
                <div className='card-price'>
                  <div className='price-new'>12500 руб.</div>
                  <div className='price-old'>14500 руб.</div>
                </div>
              </div>
              <div className='card-bottom'>
                <div className='card-buttons'>
                  <div className='button-primary'>Купить</div>
                  <div className='button-primary'>Демо</div>
                  <div className='button-primary'>Подробнее</div>
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
