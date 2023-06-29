
import { Checkbox} from '@mui/material'//import { Button, Modal } from '@mui/material';
import React, {useState,Component} from 'react'
import { Link } from 'react-router-dom';

export default function Nomenkl () {

    return (<nomenkl>
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
                        
                    </tbody>
                </table>
            </div>
            </div>
            <div className='rightpanel'><div className='cappanel'> 
            Решение <span className='nameround'> RoundName </span>
            
            </div >

            <div className='tabsbuttonlayer' >
            <Link to='/Riteil'><button className='tabsbutton'>Продажи</button></Link>
                        <Link to='/Nomenkl'><button className='tabsbuttonON'>Номенклатура</button></Link>
                        <Link to='/Prognoz'><button className='tabsbutton'>Прогнозирование</button></Link>
                        {/* <Link to='/HistoruSnab'><button className='tabsbutton'>Вкладка</button></Link> */}
                        <button className='tabsbuttonnone'></button></div>






            
                                <div >
                                
                                <div id="content-1">
                        <div className='cont1'>  
                        
                        <fieldset className='fieldtd'><legend>Выбор товара для поставки в ООО «Пятерочка»</legend>
                       <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                       <tr valign='top' >
                                           <td>
                                           <div className='contd'>Продукция</div>
                                           </td>
                                           <td>
                                           <div className='checkb'>Соглашение о поставке</div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт без наполнителя, 0.3 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт персик, 0.3 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт клубника, 0.3 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>
                                          
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт ананас, 0.3 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт без наполнителя, 1 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт персик, 1 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт клубника, 1 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт ананас, 1 л</div>
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

                       <fieldset className='fieldtd'><legend>Выбор товара для поставки в ВКУСпродукт</legend>
                       <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                       <tr valign='top' >
                                           <td>
                                           <div className='contd'>Продукция</div>
                                           </td>
                                           <td>
                                           <div className='checkb'>Соглашение о поставке</div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт без наполнителя, 0.3 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт персик, 0.3 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт клубника, 0.3 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>
                                          
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт ананас, 0.3 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт без наполнителя, 1 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт персик, 1 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт клубника, 1 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт ананас, 1 л</div>
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


                       <fieldset className='fieldtd'><legend>Выбор товара для поставки в Yogumi - йогурт-бар</legend>
                       <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                       <tr valign='top' >
                                           <td>
                                           <div className='contd'>Продукция</div>
                                           </td>
                                           <td>
                                           <div className='checkb'>Соглашение о поставке</div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт без наполнителя, 0.3 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт персик, 0.3 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт клубника, 0.3 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>
                                          
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт ананас, 0.3 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт без наполнителя, 1 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт персик, 1 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт клубника, 1 л</div>
                                           </td>
                                           <td>
                                           <div className='checkb'><Checkbox defaultChecked></Checkbox></div> 
                                           </td>
                                           </tr>

                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Йогурт ананас, 1 л</div>
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
                     
      </nomenkl> )

}
