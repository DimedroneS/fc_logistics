import { Checkbox} from '@mui/material'
//import { Button, Modal } from '@mui/material';
import React, {useState,Component} from 'react'
import { Link } from 'react-router-dom';

export default function Smesh () {

    return (<smesh>
      <div >
         </div ><div className = 'panelcontent' >
            <div className='leftpanel'> <div className='cappanel'> 
            Панель показателей <span className='nameround'> Раунд 0</span>
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
                               <div className='sourcetd'>Коэффициент использования  склада сырья (%)</div> 
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
                               <div className='sourcetd'>Коэффициент использования склада продукции (%)</div> 
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
                               <div className='sourcetd'>Выполнение производственного плана (%)</div> 
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
            Решение <span className='nameround'> Раунд 1 </span>
            
            </div >

            <div className='tabsbuttonlayer' >
            <Link to='/Smesh'><button className='tabsbuttonON'>Смешивание</button></Link>
                          <Link to='/Rozliv'><button className='tabsbutton'>Розлив</button></Link>
                        <button className='tabsbuttonnone'></button></div>
                                <div >                              
                                <div id="content-1">
                        <div className='cont1'>  
                        
                        <fieldset className='fieldtd'><legend>Производственный миксер</legend>
                       <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Выберите миксер</div>
                                           </td>
                                           <td>
                                           <select className='modallistD'>
                                                            <option>М-5</option>
                                                            <option>М-10</option>
                                                            <option>М-15</option>
                                                            <option>М-25</option>
          
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
                                           <div className='checkb'><Checkbox></Checkbox></div> 
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

                       <fieldset className='fieldtd'><legend>Распределение продукции по миксерам</legend>
                       <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                       <tr valign='top' >
                                           <td>
                                           <div className='contd'>Продукция</div>
                                           </td>
                                           <td>
                                           <div className='checkb'>Миксер</div> 
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
                     
      </smesh> )

}
