import { Button, Modal } from '@mui/material';
import React, {useState,Component} from 'react'
import { Link } from 'react-router-dom';


export default function vhod() {





    return (<vhod>
 


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
                               <div className='nametd'>Тенденция</div> 
                            </td>
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
                               <div className='sourcetd'>PIC</div> 
                            </td>
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
                               <div className='sourcetd'>PIC</div> 
                            </td>
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
                               <div className='sourcetd'>PIC</div> 
                            </td>
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
                               <div className='sourcetd'>PIC</div> 
                            </td>
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
            <Link to='/Vhod'><button className='tabsbuttonON'>Входящий</button></Link>
                        <Link to='/RinPostavok'><button className='tabsbutton'>Вкладка</button></Link>
                        <Link to='/Kpi'><button className='tabsbutton'>Вкладка</button></Link>
                        <Link to='/HistoruSnab'><button className='tabsbutton'>Вкладка</button></Link>
                        <button className='tabsbuttonnone'></button></div>






            
                                <div >
                                
                                <div id="content-1">
                        <div className='cont1'>  
                        
                        <fieldset className='fieldtd'><legend>Упаковка</legend>
                            <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title='Наименование поставщика. Нажмите для справки.'>Название</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd' title='Регион где находиться поставщик. Нажмите для справки.'>Регион расположения</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd' title= 'Качество поставляемых материалов'>Срок отгрузки </div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd' title=''>Свободные мощности (%)</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Сертификация</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            
                            </table>
                        </fieldset>


                        </div> 
                        </div> 
                    





                                       
                                       </div>  
                                        
                                       </div>  
                                          
                                       </div>
                     

                  
                                       




        </vhod>)
  }

