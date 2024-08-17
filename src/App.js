import React from 'react';
import pic1 from './images/pic1.webp';
import pic2 from './images/pic2.webp';
import pic3 from './images/pic3.webp';
import pic4 from './images/pic4.webp';

class App extends React.Component {
  componentDidMount(){

  };
  render(){  
  return (
      <div className="main">
        <div className="menu">
          <input type="radio" id="description" name="tab-btn" defaultChecked/>
          <label htmlFor="description">ОПИСАНИЕ</label>
          <input type="radio" id="reviews" name="tab-btn"/>
          <label htmlFor="reviews">ОТЗЫВЫ</label>
          <input type="radio" id="where-from" name="tab-btn"/>
          <label htmlFor="where-from">ОТКУДА?</label>
        </div>
        
        <hr className="separator-strip"></hr>

        <div className="main-content">
          <div className="main-content__tab" id="main-content__description">
            <p>
            Томаты на ветке красные (помидоры) - более плотные, яркие и ароматные по сравнению с обычными. 
            Они славятся низкой калорийностью и высоким содержанием витаминов, клетчатки, пектина и минеральных веществ. 
            В них содержатся также каротиноиды, кислоты и мощный антиоксидант ликопин.</p>

            <p>Помидор - незаменимый продукт в мировой кулинарии. Он - основа многочисленных соусов, маринадов, кетчупа, 
            испанского холодного супа Гаспачо или итальянской закуски Капрезе. С ним делают салаты, его тушат, солят и 
            консервируют. Помидоры на веточке особенно красиво смотрятся в запеченном виде.</p>

            <div className="product-card-description">
              <div className="product-characteristics-content">
                <div className="product-characterisctics__group">
                  <div className="product-characterisctics__group-title">ХАРАКТЕРИСТИКИ</div>

                  <div className="product-characteristics__spec">
                    <div className="product-characteristics__spec-title">Страна</div>
                    <div className="product-characteristics__spec-value">Россия</div>
                  </div>

                  <div className="product-characteristics__spec">
                    <div className="product-characteristics__spec-title">Поставщик</div>
                    <div className="product-characteristics__spec-value">Фермеры: Наталья и Юрий Лейшан</div>
                  </div>

                  <div className="product-characteristics__spec">
                    <div className="product-characteristics__spec-title">Тип упаковки</div>
                    <div className="product-characteristics__spec-value">Крафтовый пакет</div>
                  </div>

                  <div className="product-characteristics__spec">
                    <div className="product-characteristics__spec-title">Сертификаты качества</div>
                    <div className="product-characteristics__spec-value">В наличии</div>
                  </div>
                </div>
                <div className="product-characterisctics__group">
                  <div className="product-characterisctics__group-title">ПИЩЕВАЯ ЦЕННОСТЬ НА 100Г</div>
                  
                  <div className="product-characteristics__spec">
                    <div className="product-characteristics__spec-title">Энергетическая ценность</div>
                    <div className="product-characteristics__spec-value">18 кКал</div>
                  </div>

                  <div className="product-characteristics__spec">
                    <div className="product-characteristics__spec-title">Белки</div>
                    <div className="product-characteristics__spec-value">0.9 г</div>
                  </div>

                  <div className="product-characteristics__spec">
                    <div className="product-characteristics__spec-title">Жиры</div>
                    <div className="product-characteristics__spec-value">0.2 г</div>
                  </div>

                  <div className="product-characteristics__spec">
                    <div className="product-characteristics__spec-title">Углеводы</div>
                    <div className="product-characteristics__spec-value">3.9 г</div>
                  </div>
                </div>
                <div className="product-characterisctics__group">
                  <div className="product-characterisctics__group-title">УСЛОВИЯ ХРАНЕНИЯ</div>
                  
                  <div className="product-characteristics__spec">
                    <div className="product-characteristics__spec-title">Срок хранения</div>
                    <div className="product-characteristics__spec-value">7 дней</div>
                  </div>

                  <div className="product-characteristics__spec">
                    <div className="product-characteristics__spec-title">Температура хранения</div>
                    <div className="product-characteristics__spec-value">от 3° до 7°</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="more-products">
              <div className="more-products__title">С этим товаром покупают</div>
              <div className="more-products__list">
                <div className="more-products__wrapper">
                  <img src={ pic1 } alt="" className="more-products__wrapper-image" />
                  <div className="more-products__wrapper-info">
                    <div className="more-products__wrapper-title">Молоко 3,2&nbsp;%</div>
                    <div className="more-products__wrapper-author">от Вадима Рошки</div>
                    <div className="more-products__wrapper-line">
                      <span className="more-products__wrapper-cost">95&nbsp;₽&nbsp;</span>
                      <span className="more-products__wrapper-size">/&nbsp;0,93&nbsp;л</span>
                    </div>
                    <div class="more-products__rating-result">
                      <span class="active"></span>	
                      <span class="active"></span>    
                      <span class="active"></span>  
                      <span class="active"></span>    
                      <span class="active"></span>
                    </div>
                  </div>
                  <button className="buy-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  </button>
                  <button className="like-button">
                    <svg data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" fill="#fff"><title/><path d="M116.22,16.68C108,8.8,95.16,4.88,83.44,6.71,75,8,68.17,12.26,64.07,18.68c-4-6.53-10.62-10.84-18.93-12.22-11.61-1.91-25,2.19-33.37,10.21A38.19,38.19,0,0,0,0,44.05,39.61,39.61,0,0,0,11.74,72.65L59,119.94a7,7,0,0,0,9.94,0l47.29-47.3A39.61,39.61,0,0,0,128,44.05,38.19,38.19,0,0,0,116.22,16.68ZM112,68.4,64.73,115.7a1,1,0,0,1-1.46,0L16,68.4A33.66,33.66,0,0,1,6,44.11,32.23,32.23,0,0,1,15.94,21c5.89-5.67,14.78-9,23.29-9a30.38,30.38,0,0,1,4.94.4c5,.82,11.67,3.32,15.42,10.56A5.06,5.06,0,0,0,64,25.68h0a4.92,4.92,0,0,0,4.34-2.58h0c3.89-7.2,10.82-9.66,15.94-10.46,9.77-1.52,20.9,1.84,27.7,8.37A32.23,32.23,0,0,1,122,44.11,33.66,33.66,0,0,1,112,68.4Z"/></svg>
                  </button>
                </div>

                <div className="more-products__wrapper">
                  <img src={ pic2 } alt="" className="more-products__wrapper-image" />
                  <div className="more-products__wrapper-info">
                    <div className="more-products__wrapper-title">Хлеб пшеничный</div>
                    <div className="more-products__wrapper-author">от Дарьи и Марии</div>
                    <div className="more-products__wrapper-line">
                      <span className="more-products__wrapper-cost">95&nbsp;₽&nbsp;</span>
                      <span className="more-products__wrapper-size">/&nbsp;930&nbsp;г</span>
                    </div>
                    <div class="more-products__rating-result">
                      <span class="active"></span>	
                      <span class="active"></span>    
                      <span class="active"></span>  
                      <span class="active"></span>    
                      <span class="active"></span>
                    </div>
                  </div>
                  <button type="buy" className="buy-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  </button>
                  <button className="like-button">
                    <svg data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" fill="#fff"><title/><path d="M116.22,16.68C108,8.8,95.16,4.88,83.44,6.71,75,8,68.17,12.26,64.07,18.68c-4-6.53-10.62-10.84-18.93-12.22-11.61-1.91-25,2.19-33.37,10.21A38.19,38.19,0,0,0,0,44.05,39.61,39.61,0,0,0,11.74,72.65L59,119.94a7,7,0,0,0,9.94,0l47.29-47.3A39.61,39.61,0,0,0,128,44.05,38.19,38.19,0,0,0,116.22,16.68ZM112,68.4,64.73,115.7a1,1,0,0,1-1.46,0L16,68.4A33.66,33.66,0,0,1,6,44.11,32.23,32.23,0,0,1,15.94,21c5.89-5.67,14.78-9,23.29-9a30.38,30.38,0,0,1,4.94.4c5,.82,11.67,3.32,15.42,10.56A5.06,5.06,0,0,0,64,25.68h0a4.92,4.92,0,0,0,4.34-2.58h0c3.89-7.2,10.82-9.66,15.94-10.46,9.77-1.52,20.9,1.84,27.7,8.37A32.23,32.23,0,0,1,122,44.11,33.66,33.66,0,0,1,112,68.4Z"/></svg>
                  </button>
                </div>

                <div className="more-products__wrapper">
                  <img src={ pic3 } alt="" className="more-products__wrapper-image" />
                  <div className="more-products__wrapper-info">
                    <div className="more-products__wrapper-title">Яйца куринные</div>
                    <div className="more-products__wrapper-author">от Евгения Рошаль</div>
                    <div className="more-products__wrapper-line">
                      <span className="more-products__wrapper-cost">120&nbsp;₽&nbsp;</span>
                      <span className="more-products__wrapper-size">/&nbsp;10&nbsp;шт</span>
                    </div>
                    <div class="more-products__rating-result">
                      <span class="active"></span>	
                      <span class="active"></span>    
                      <span class="active"></span>  
                      <span class="active"></span>    
                      <span class="active"></span>
                    </div>
                  </div>
                  <button type="buy" className="buy-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  </button>
                  <button className="like-button">
                    <svg data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" fill="#fff"><title/><path d="M116.22,16.68C108,8.8,95.16,4.88,83.44,6.71,75,8,68.17,12.26,64.07,18.68c-4-6.53-10.62-10.84-18.93-12.22-11.61-1.91-25,2.19-33.37,10.21A38.19,38.19,0,0,0,0,44.05,39.61,39.61,0,0,0,11.74,72.65L59,119.94a7,7,0,0,0,9.94,0l47.29-47.3A39.61,39.61,0,0,0,128,44.05,38.19,38.19,0,0,0,116.22,16.68ZM112,68.4,64.73,115.7a1,1,0,0,1-1.46,0L16,68.4A33.66,33.66,0,0,1,6,44.11,32.23,32.23,0,0,1,15.94,21c5.89-5.67,14.78-9,23.29-9a30.38,30.38,0,0,1,4.94.4c5,.82,11.67,3.32,15.42,10.56A5.06,5.06,0,0,0,64,25.68h0a4.92,4.92,0,0,0,4.34-2.58h0c3.89-7.2,10.82-9.66,15.94-10.46,9.77-1.52,20.9,1.84,27.7,8.37A32.23,32.23,0,0,1,122,44.11,33.66,33.66,0,0,1,112,68.4Z"/></svg>
                  </button>
                </div>

                <div className="more-products__wrapper">
                  <img src={ pic4 } alt="" className="more-products__wrapper-image" />
                  <div className="more-products__wrapper-info">
                    <div className="more-products__wrapper-title">Масло сливочное 82&nbsp;%</div>
                    <div className="more-products__wrapper-author">от Вадима Рошки</div>
                    <div className="more-products__wrapper-line">
                      <span className="more-products__wrapper-cost">290&nbsp;₽&nbsp;</span>
                      <span className="more-products__wrapper-size">/&nbsp;250&nbsp;г</span>
                    </div>
                    <div class="more-products__rating-result">
                      <span class="active"></span>	
                      <span class="active"></span>    
                      <span class="active"></span>  
                      <span class="active"></span>    
                      <span class="active"></span>
                    </div>
                  </div>
                  <button type="buy" className="buy-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  </button>
                  <button className="like-button">
                    <svg data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" fill="#fff"><title/><path d="M116.22,16.68C108,8.8,95.16,4.88,83.44,6.71,75,8,68.17,12.26,64.07,18.68c-4-6.53-10.62-10.84-18.93-12.22-11.61-1.91-25,2.19-33.37,10.21A38.19,38.19,0,0,0,0,44.05,39.61,39.61,0,0,0,11.74,72.65L59,119.94a7,7,0,0,0,9.94,0l47.29-47.3A39.61,39.61,0,0,0,128,44.05,38.19,38.19,0,0,0,116.22,16.68ZM112,68.4,64.73,115.7a1,1,0,0,1-1.46,0L16,68.4A33.66,33.66,0,0,1,6,44.11,32.23,32.23,0,0,1,15.94,21c5.89-5.67,14.78-9,23.29-9a30.38,30.38,0,0,1,4.94.4c5,.82,11.67,3.32,15.42,10.56A5.06,5.06,0,0,0,64,25.68h0a4.92,4.92,0,0,0,4.34-2.58h0c3.89-7.2,10.82-9.66,15.94-10.46,9.77-1.52,20.9,1.84,27.7,8.37A32.23,32.23,0,0,1,122,44.11,33.66,33.66,0,0,1,112,68.4Z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="main-content__tab" id="main-content__reviews">
            <p>ahha</p>
          </div>

          <div className="main-content__tab" id="main-content__where-from">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
