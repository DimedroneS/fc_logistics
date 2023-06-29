import React, { Component } from 'react'
import {} from '@mui/material'
import { Link } from 'react-router-dom';

export default function UpZapas () {
    return (<upzapas>
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
              <Link to='/UpZapas'><button className='tabsbuttonON'>Управление запасами</button></Link>
                          <Link to='/UpProizv'><button className='tabsbutton'>Управление производства</button></Link>
                          <Link to='/UpTovar'><button className='tabsbutton'>Управление товаром</button></Link>
                          {/* <Link to='/HistoruSnab'><button className='tabsbutton'>Вкладка</button></Link> */}
                          <button className='tabsbuttonnone'></button></div>
  
  
  
  
  
  
              
                                  <div >
                                  
                                  <div id="content-1">
                          <div className='cont1'>  
                          
                          <fieldset className='fieldtd'><legend>Склад сырья</legend>
                           <table cellSpacing={0} cellPadding={0} colls={3} border={0} >

                           <tr valign='top' >
                                           <td>
                                          <div className='contd'>Наименование</div>
                                           </td>
                                           <td>
                                           <div className='contd'>Страховой запас</div> 
                                           </td>
                                           <td>
                                           <div >Размер партии</div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                          <div className='contd'>Упаковка</div>
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="1~10000"></input></div> 
                                           </td>
                                           <td>
                                           <div ><input className='modalinp' type="text" id="textInput" placeholder="1~10000"></input></div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                          <div className='contd'>Молоко сырое</div>
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="1~10000"></input></div> 
                                           </td>
                                           <td>
                                           <div ><input className='modalinp' type="text" id="textInput" placeholder="1~10000"></input></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                          <div className='contd'>Молоко сухое</div>
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="1~10000"></input></div> 
                                           </td>
                                           <td>
                                           <div ><input className='modalinp' type="text" id="textInput" placeholder="1~10000"></input></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                          <div className='contd'>Вкусовые добавки</div>
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="1~10000"></input></div> 
                                           </td>
                                           <td>
                                           <div ><input className='modalinp' type="text" id="textInput" placeholder="1~10000"></input></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                          <div className='contd'>Сахар</div>
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="1~10000"></input></div> 
                                           </td>
                                           <td>
                                           <div><input className='modalinp' type="text" id="textInput" placeholder="1~10000"></input></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                          <div className='contd'>PET</div>
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="1~10000"></input></div> 
                                           </td>
                                           <td>
                                           <div ><input className='modalinp' type="text" id="textInput" placeholder="1~10000"></input></div> 
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
  
  
                          </div> 
                          </div> 
                      
  
  
  
  
  
                                         
                                         </div>  
                                          
                                         </div>  
                                            
                                         </div>
                       
        </upzapas> )
  
  }
  