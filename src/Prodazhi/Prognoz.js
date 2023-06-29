import { Checkbox} from '@mui/material'//import { Button, Modal } from '@mui/material';
import React, {useState,Component} from 'react'
import { Link } from 'react-router-dom';

export default function Prognoz () {

    return (<prognoz>
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
            <Link to='/Riteil'><button className='tabsbutton'>Продажи</button></Link>
                        <Link to='/Nomenkl'><button className='tabsbutton'>Номенклатура</button></Link>
                        <Link to='/Prognoz'><button className='tabsbuttonON'>Прогнозирование</button></Link>
                        {/* <Link to='/HistoruSnab'><button className='tabsbutton'>Вкладка</button></Link> */}
                        <button className='tabsbuttonnone'></button></div>






            
                                <div >
                                
                                <div id="content-1">
                        <div className='cont1'>  
                        
                        <fieldset className='fieldtd'><legend>Прогнозирование товарных спросов</legend>
                       <table cellSpacing={0} cellPadding={0} colls={4} border={0} >
                       <tr valign='top' >
                                           <td>
                                           <div className='contd'>Продукция</div>
                                           </td>
                                           <td>
                                           <div >Спрос, шт</div> 
                                           </td>
                                           <td>
                                           <div >  Изменение, %</div> 
                                           </td>
                                           <td>
                                           <div >Прогноз, шт</div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт без наполнителя, 0.3 л</div>
                                           </td>
                                           <td>
                                           <div>66500</div> 
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="0%"></input></div> 
                                           </td>
                                           <td>
                                           <div>66500</div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт персик, 0.3 л</div>
                                           </td>
                                           <td>
                                           <div>42200</div> 
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="0%"></input></div> 
                                           </td>
                                           <td>
                                           <div>42200</div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт клубника, 0.3 л</div>
                                           </td>
                                           <td>
                                           <div>90700</div> 
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="10%"></input></div> 
                                           </td>
                                           <td>
                                           <div>99770</div> 
                                           </td>
                                           </tr>
                                          
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт ананас, 0.3 л</div>
                                           </td>
                                           <td>
                                           <div>113500</div> 
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="5%"></input></div> 
                                           </td>
                                           <td>
                                           <div>119175</div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт без наполнителя, 1 л</div>
                                           </td>
                                           <td>
                                           <div>51000</div> 
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="0%"></input></div> 
                                           </td>
                                           <td>
                                           <div>51000</div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт персик, 1 л</div>
                                           </td>
                                           <td>
                                           <div>15300</div> 
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="-5%"></input></div> 
                                           </td>
                                           <td>
                                           <div>14535</div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт клубника, 1 л</div>
                                           </td>
                                           <td>
                                           <div>34200</div> 
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="0%"></input></div> 
                                           </td>
                                           <td>
                                           <div>34200</div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт ананас, 1 л</div>
                                           </td>
                                           <td>
                                           <div>11900</div> 
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="0%"></input></div> 
                                           </td>
                                           <td>
                                           <div>11900</div> 
                                           </td>
                                           </tr>



                                           <tr valign='top'>
                 <td>
                   <div  title=''></div>
                 </td>
                 <td>
                   <div >
                     <button className="talkbut">Ок</button>
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
                     
      </prognoz> )

}
