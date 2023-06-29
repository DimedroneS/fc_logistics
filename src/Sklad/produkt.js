import { Button, Modal } from '@mui/material';
import React, {useState,Component} from 'react'
import { Link } from 'react-router-dom';

export default function produkt() {
    return ( <produkt>
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
            Решение <span className='nameround'> Раунд 1 </span>
           
           </div >

           <div className='tabsbuttonlayer' >
           <Link to='/Komp'><button className='tabsbutton'>Склад сырья</button></Link>
                       <Link to='/Produkt'><button className='tabsbuttonON'>Склад продукции</button></Link>
                       {/* <Link to='/Kpi'><button className='tabsbutton'>Вкладка</button></Link>
                       <Link to='/HistoruSnab'><button className='tabsbutton'>Вкладка</button></Link> */}
                       <button className='tabsbuttonnone'></button></div>






           
                               <div >
                               
                               <div id="content-1">
                       <div className='cont1'>  
                       
                       <fieldset className='fieldtd'><legend>Склад готовой продукции</legend>
                       <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                                           <tr valign='top' >
                                           <td>
                                           <Link to="/HelpPage" className='helplink'><div className='contd'>Вид складирования </div> </Link>
                                           </td>
                                           <td>
                                           <select className='modallistD'>
                                                            <option>Штабелирование</option>
                                                            <option>Мобильные стеллажи</option>
                                                            <option>Гравитационные стеллажи</option>
                                                            <option>Широкопроходные стеллажи</option>
                                                            <option>Узкопроходные стеллажи</option>
                                                            <option>Набивные стеллажи</option>
                                            </select>
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <Link to="/HelpPage" className='helplink'><div className='contd' >Число рабочих смен</div> </Link>
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="1~3"></input></div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <Link to="/HelpPage" className='helplink'><div className='contd' >Время приемки, дн.</div> </Link>
                                           </td>
                                           <td>
                                          <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="1~10"></input></div>
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <Link to="/HelpPage" className='helplink'><div className='contd' title=''>Контроль сырья</div> </Link>
                                           </td>
                                           <td>
                                           <select className='modallistD'>
                                                            <option>Да</option>
                                                            <option>Нет</option>
          
                                            </select>
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <Link to="/HelpPage" className='helplink'><div className='contd'>Тип склада</div> </Link>
                                           </td>
                                           <td>
                                           <select className='modallistD'>
                                                            <option>Автоматизированный</option>
                                                            <option>Механизированный</option>
                                                            <option>Не механизированный</option>
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


                       <fieldset className='fieldtd'><legend>Число постоянных работников на смене</legend>
                       <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                                           <tr valign='top' >
                                           <td>
                                           <Link to="/HelpPage" className='helplink'><div className='contd'title='Наименование поставщика. Нажмите для справки.'>Число работников (1 смена)</div> </Link>
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="0~100"></input></div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <Link to="/HelpPage" className='helplink'><div className='contd' title='Регион где находиться поставщик. Нажмите для справки.'>Число работников (2 смена)</div> </Link>
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="0~100"></input></div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <Link to="/HelpPage" className='helplink'><div className='contd' title= 'Качество поставляемых материалов'>Число работников (3 смена)</div> </Link>
                                           </td>
                                           <td>
                                          <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="0~100"></input></div>
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
                    

                                      </produkt>  )

}
