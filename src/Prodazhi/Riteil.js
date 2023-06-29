import { Button, Modal } from '@mui/material';
import React, {useState,Component} from 'react'
import { Link } from 'react-router-dom';

export default function Riteil () {

    return (<riteil>
      <div >
         </div ><div className = 'panelcontent' >
            <div className='leftpanel'> <div className='cappanel'> 
            Панель показателей <span className='nameround'> RoundName </span>
            </div >
            <div className='infopanel'>
                <table cellSpacing={0} cellPadding={0} colls={6} border={0} >

                <tbody>
                        
                        <tr valign='top' >

                            <td>
                               <div className='nametd'>КПЭ</div> 
                            </td>
                            <td>
                               <div className='nametd'></div> 
                            </td>
                            <td>
                               <div className='nametd'>Ваш результат</div> 
                            </td>
                            <td>
                               <div className='nametd'>Лучший результат</div> 
                            </td>
                        </tr>
                        <tr valign='top' >

                            <td>
                               <div className='sourcetd'>Рентабельность (%)</div> 
                            </td>
                            <td>
                               <div className='sourcetd'></div> 
                            </td>
                            <td>
                               <div className='sourcetd'>number</div> 
                            </td>
                            <td>
                               <div className='sourcetd'>number</div> 
                            </td>
                        </tr>
                        <tr valign='top' >

                            <td>
                               <div className='sourcetd'>Компоненты отбраковки (%)</div> 
                            </td>
                            <td>
                               <div className='sourcetd'></div> 
                            </td>
                            <td>
                               <div className='sourcetd'>number</div> 
                            </td>
                            <td>
                               <div className='sourcetd'>number</div> 
                            </td>
                        </tr>
                        <tr valign='top' >

                            <td>
                               <div className='sourcetd'>Затраты на сырье (%)</div> 
                            </td>
                            <td>
                               <div className='sourcetd'></div> 
                            </td>
                            <td>
                               <div className='sourcetd'>number</div> 
                            </td>
                            <td>
                               <div className='sourcetd'>number</div> 
                            </td>
                        </tr>
                        <tr valign='top' >
       
                            <td>
                               <div className='sourcetd'>Поставщики надежности доставки</div> 
                            </td>
                            <td>
                               <div className='sourcetd'></div> 
                            </td>
                            <td>
                               <div className='sourcetd'>number</div> 
                            </td>
                            <td>
                               <div className='sourcetd'>number</div> 
                            </td>
                        </tr>
                        <tr>
                        <div className='cappanel2'> Отчет </div >
                        </tr>
                        <tr>
                            <div className='separattd'> <a href="URL">Поставщик</a></div>
                        </tr>
                        <tr>
                            <div className='linktd'> <a href="URL">Компоненты</a></div>
                        </tr>
                        <tr>
                            <div className='linktd'> <a href="URL">Финансы</a></div>
                        </tr>
                        <tr>
                           
                           <div className='linktd'> <a href='fc_logistics\src\Page\Test.js' target="blank">Анализ</a></div>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            <div className='rightpanel'><div className='cappanel'> 
            Решение <span className='nameround'> RoundName </span>
            
            </div >

            <div className='tabsbuttonlayer' >
            <Link to='/Riteil'><button className='tabsbuttonON'>Продажи</button></Link>
                        <Link to='/Nomenkl'><button className='tabsbutton'>Номенклатура</button></Link>
                        <Link to='/Prognoz'><button className='tabsbutton'>Прогнозирование</button></Link>
                        {/* <Link to='/HistoruSnab'><button className='tabsbutton'>Вкладка</button></Link> */}
                        <button className='tabsbuttonnone'></button></div>






            
                                <div >
                                
                                <div id="content-1">
                        <div className='cont1'>  


                        <fieldset className='fieldtd'><legend>Управление приоритетом заказа</legend>
                       <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Первый приоритет</div>
                                           </td>
                                           <td>
                                           <select className='modallistD'>
                                                            <option>ООО «Пятерочка»</option>
                                                            <option>ВКУСпродукт</option>
                                                            <option>Yogumi - йогурт-бар</option>
          
                                            </select>
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Второй приоритет</div>
                                           </td>
                                           <td>
                                           <select className='modallistD'>
                                           <option>ВКУСпродукт</option>
                                                            <option>ООО «Пятерочка»</option>
                                                            
                                                            <option>Yogumi - йогурт-бар</option>
          
                                            </select>
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Третий приоритет</div>
                                           </td>
                                           <td>
                                           <select className='modallistD'>
                                           <option>Yogumi - йогурт-бар</option>
                                                            <option>ООО «Пятерочка»</option>
                                                            <option>ВКУСпродукт</option>
                                                            
          
                                            </select>
                                           </td>
                                           </tr>
                                           

                                           

                                          

                                           

                                           <tr valign='top'>
                 <td>
                   <div className='contd' title=''></div>
                 </td>
                 <td>
                   <div className='contd'>
                     <button className="talkbut">Сохранить</button>
                   </div>
                 </td>
               </tr>
                                           
                           </table>
                       </fieldset>

                        
                        <fieldset className='fieldtd'><legend>Переговоры по продажам</legend>
                            <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'>Название</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>ООО «Пятерочка»</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd' >Уровень сервиса, %</div>
                                            </td>
                                            <td>
                                            <div className='contd'>80</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd' >Срок годности, %</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>60</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                           <div className='contd' >Торговая единица</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>Коробка</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'>Крайний срок заказа</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>14:00</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'>Условия оплаты, дн.</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>7</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'>Стимулирование продаж</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>Нет</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Вступить в переговоры</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>
                                            <button variant="contained"  class="talkbut">Да</button>
                                            </div>
                                            </td>
                                            </tr>
                                            
                            </table>
                        </fieldset>

                        <fieldset className='fieldtd'><legend>Переговоры по продажам</legend>
                            <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'>Название</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>Yogumi - йогурт-бар</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd' >Уровень сервиса, %</div>
                                            </td>
                                            <td>
                                            <div className='contd'>75</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd' >Срок годности, %</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>90</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                           <div className='contd' >Торговая единица</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>Коробка</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'>Крайний срок заказа</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>12:00</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'>Условия оплаты, дн.</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>50</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'>Стимулирование продаж</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>Среднее</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Вступить в переговоры</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>
                                            <button variant="contained"  class="talkbut">Да</button>
                                            </div>
                                            </td>
                                            </tr>
                                            
                            </table>
                        </fieldset>


                        <fieldset className='fieldtd'><legend>Переговоры по продажам</legend>
                            <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'>Название</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>ВКУСпродукт</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd' >Уровень сервиса, %</div>
                                            </td>
                                            <td>
                                            <div className='contd'>80</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd' >Срок годности, %</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>60</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                           <div className='contd' >Торговая единица</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>Коробка</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'>Крайний срок заказа</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>14:00</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'>Условия оплаты, дн.</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>7</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'>Стимулирование продаж</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>Нет</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Вступить в переговоры</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>
                                            <button variant="contained"  class="talkbut">Да</button>
                                            </div>
                                            </td>
                                            </tr>
                                            
                            </table>
                        </fieldset>

                        </div> 
                        </div> 
                    





                                       
                                       </div>  
                                        
                                       </div>  
                                          
                                       </div>
                     
      </riteil> )

}
