import { Checkbox} from '@mui/material'
//import { Button, Modal } from '@mui/material';
import React, {useState,Component} from 'react'
import { Link } from 'react-router-dom';

export default function Rozliv () {

    return (<rozliv>
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
            <Link to='/Smesh'><button className='tabsbutton'>Смешивание</button></Link>
                          <Link to='/Rozliv'><button className='tabsbuttonON'>Розлив</button></Link>
                          {/* <Link to='/UpTovar'><button className='tabsbutton'>Управление товаром</button></Link> */}
                        {/* <Link to='/HistoruSnab'><button className='tabsbutton'>Вкладка</button></Link> */}
                        <button className='tabsbuttonnone'></button></div>






            
                                <div >
                                
                                <div id="content-1">
                        <div className='cont1'>  
                        
                        <fieldset className='fieldtd'><legend>Линия розлива</legend>
                       <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Выберите количество голов розлива</div>
                                           </td>
                                           <td>
                                           <select className='modallistD'>
                                                            <option>4</option>
                                                            <option>6</option>
                                                            <option>8</option>
                                                            <option>10</option>
                                                            <option>12</option>
          
                                            </select>
                                           </td>
                                           </tr>
                                          
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Число смен</div>
                                           </td>
                                           <td>
                                           <select className='modallistD'>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                      
          
                                            </select>
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Профилактическое обслуживание</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Увеличение скорости работы линии</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox></Checkbox></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Быстрая переналадка</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox></Checkbox></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Контроль сырья</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
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


                       <fieldset className='fieldtd'><legend>Распределение продукции по линии розлива</legend>
                       <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                       <tr valign='top' >
                                           <td>
                                           <div className='contd'>Продукция</div>
                                           </td>
                                           <td>
                                           <div className='checkb'>Линия розлива</div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт в упаковке PET бутылках</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт в мягкой упаковке</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
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
                     
      </rozliv> )

}
