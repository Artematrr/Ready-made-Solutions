const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='col-one'>
          <div className='row'>
            <img src='/src/assets/img/logo-light.svg' alt='Готовые решения' />
          </div>
          <div className='row'>
            <div className='phone'>+7 926 256-57-56</div>
            <div className='email'>info@agelar.ru</div>
          </div>
          <div className='row'>
            <div className='button-primary get-collection'>
              Получить подборку
            </div>
            <div className='button-primary get-recall'>Перезвонить мне</div>
          </div>
        </div>

        <div className='col-two'>
          <div className='footer-tags-line'>
            <p className='footer-tags-label'>О нас</p>
            <a href='#'>Портфолио</a>
            <a href='#'>Отзывы</a>
            <a href='#'>Цены</a>
            <a href='#'>Оплата</a>
            <a href='#'>Установка</a>
            <a href='#'>Вопрос и ответы</a>
            <a href='#'>Гарантия</a>
          </div>
          <div className='footer-tags-line'>
            <p className='footer-tags-label'>Готовые решения</p>
            <a href='#'>Лендинги</a>
            <a href='#'>Корпоративные</a>
            <a href='#'>Визитки</a>
            <a href='#'>Интернет-магазины</a>
          </div>
          <div className='footer-tags-line'>
            <p className='footer-tags-label'>Доп. услуги</p>
            <a href='#'>Логотипы</a>
            <a href='#'>Тюнинг сайта</a>
            <a href='#'>Готоые дизайны</a>
            <a href='#'>SEO продвижение</a>
            <a href='#'>Технический аудит</a>
            <a href='#'>Анилиз рынка</a>
          </div>
          <div className="row">
          <p>ИНН 770370050803 </p>
          <p>ОГРНИП 315774600171129 </p>
        </div>
        </div>

       
      </div>
      <div className='footer-bottom'>
        <p> © 2023. Agelar. Все права защищены.</p>
      </div>
    </footer>
  )
}

export default Footer
