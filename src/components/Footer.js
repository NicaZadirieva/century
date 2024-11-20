import React from 'react';
export default function Footer(props) {
    return (
        <div className="footer d-flex flex-row justify-content-between">
             <div className="company d-lg-flex flex-row desk">
                        <div className="logo">
          
                        </div>
                        <p className="logo-title">Новый век технологий</p>
                      
                        
                    </div>
                <ul className="desk-header-contact-list desk">
                    <li><div className="tick"></div>Капельное орошение</li>
                    <li><div className="tick"></div>Упаковка для кормовых культур</li>
                    <li><div className="tick"></div>Упаковка для овощных культур</li>
                </ul>
               <div className="info d-flex flex-column">

                    <div className="tel-block ">
                         <div className="tel">8 800 555-86-88</div>
                         <p>Звонок по России - бесплатный</p>
                    </div>
                    <div className="site-block">
                         <div className="site">info@neo-agriservis.ru</div>
                         <p>Пн.-Пт.:8:30 - 17:00</p>
                      </div>
               </div>
              <div className="socials">
                  <p>Мы в соц.сетях</p>
                  <div className="socials-btn d-flex flex-row justify-content-between">
                      <div className="social-btn" id="insta">
                         
                      </div>
                      <div className="social-btn" id="vk">

                      </div>
                      <div className="social-btn" id="ut">

                      </div>
                  </div>
              </div>
        </div>
    )
}