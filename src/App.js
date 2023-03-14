
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40" >
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/379421_sneakers_icon.png" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/6330641_basket_cart_ecommerce_online_shop_icon.png" />
            <span>1205 руб</span>
          </li>

          <li>
            <img width={18} height={18} src="/img/290120_account_avatar_man_profile_user_icon.png" />
          </li>
        </ul>

      </header>

      <div className="content p-40">
        <div className="d-flex align-center justify-between md-40 ">
          <h1 >Все кроссовки</h1>



          <div className="search-block">
            <img src="/img/search.svg" alt="Search"></img>
            <input placeholder="Поиск..." />
          </div>
        </div>
      </div>


      <div className="d-flex">
        <div className="card">
          <div className="favorite">
            <img src="/img/heart-unlike.svg" alt="unliked"></img>
          </div>
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
          <h5>Кроссовки женские Puma ‘Jada’ White</h5>
          <div className="d-flex justify-between align-center" >
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/1540157_plus_add_create_cross_new_icon.png" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers" />
          <h5>Кроссовки женские Puma ‘Jada’ White</h5>
          <div className="d-flex justify-between align-center" >
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/1540157_plus_add_create_cross_new_icon.png" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers" />
          <h5>Кроссовки женские Puma ‘Jada’ White</h5>
          <div className="d-flex justify-between align-center" >
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/1540157_plus_add_create_cross_new_icon.png" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers" />
          <h5>Кроссовки женские Puma ‘Jada’ White</h5>
          <div className="d-flex justify-between align-center" >
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/1540157_plus_add_create_cross_new_icon.png" alt="Plus" />
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
