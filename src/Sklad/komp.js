import { Button, Modal } from '@mui/material';
import React, {useState,Component} from 'react'
import { Link } from 'react-router-dom';



// const saveButtonSmena = document.querySelector('.talkbut');
// saveButtonSmena.addEventListener('click', () => {
//   const smena1 = document.getElementById('textsmena1').value;
//   const smena2 = document.getElementById('textsmena2').value;
//   const smena3 = document.getElementById('textsmena3').value;
//   const data = {
//    smena1: smena1,
//    smena2: smena2,
//    smena3: smena3
//   };
//   fetch('/saveData', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//     .then(response => response.text())
//     .then(result => {
//       console.log(result);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });





export default function komp() {

    return ( <komp>
        <div >
        </div ><div className = 'panelcontent' >
           <div className='leftpanel'> <div className='cappanel'> 
           Панель показателей <span className='nameround'> Раунд 0 </span>
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
                               <div className='sourcetd'>Возврат на инвестиции ROI(%)</div> 
                            </td>
                            <td>
                               <div className='sourcetd'></div> 
                            </td>
                            <td>
                               <div className='sourcetd'>-4,0%</div> 
                            </td>
                            <td>
                               <div className='sourcetd'>0,2%</div> 
                            </td>
                        </tr>
                        <tr valign='top' >

                            <td>
                               <div className='sourcetd'>Коэффициент использования  склада сырья</div> 
                            </td>
                            <td>
                               <div className='sourcetd'></div> 
                            </td>
                            <td>
                               <div className='sourcetd'>97,8%
</div> 
                            </td>
                            <td>
                               <div className='sourcetd'>97,8%
</div> 
                            </td>
                        </tr>
                        <tr valign='top' >

                            <td>
                               <div className='sourcetd'>коэффициент использования склада готовой продукции</div> 
                            </td>
                            <td>
                               <div className='sourcetd'></div> 
                            </td>
                            <td>
                               <div className='sourcetd'>70,7%
</div> 
                            </td>
                            <td>
                               <div className='sourcetd'>70,7%
</div> 
                            </td>
                        </tr>
                        <tr valign='top' >
       
                            <td>
                               <div className='sourcetd'>Выполнение производственного плана</div> 
                            </td>
                            <td>
                               <div className='sourcetd'></div> 
                            </td>
                            <td>
                               <div className='sourcetd'>78,7%
</div> 
                            </td>
                            <td>
                               <div className='sourcetd'>82,9%</div> 
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
           <Link to='/Komp'><button className='tabsbuttonON'>Склад сырья</button></Link>
                       <Link to='/Produkt'><button className='tabsbutton'>Склад продукции</button></Link>
                       <button className='tabsbuttonnone'></button></div>
                               <div >
                               
                               <div id="content-1">
                       <div className='cont1'>  
                       
                       <fieldset className='fieldtd'><legend>Склад сырья</legend>
                           <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Число мест хранения грузовой единицы</div> 
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="1~10000"></input></div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd'>Число рабочих смен</div> 
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="1~3"></input></div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                         <div className='contd'>Время приемки, дн.</div> 
                                           </td>
                                           <td>
                                          <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="1~10"></input></div>
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd' title=''>Контроль сырья</div> 
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
                                          <div className='contd'title=''>Тип склада</div> 
                                           </td>
                                           <td>
                                           <select className='modallistD'>
                                                            <option>Холодильник</option>
                                                            <option>С климатическим режимом</option>
                                                            <option>Неотапливаемый</option>
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
                                           <div className='contd'>Число работников (1 смена)</div>
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="0~100"></input></div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd' >Число работников (2 смена)</div>
                                           </td>
                                           <td>
                                           <div className='contd'><input className='modalinp' type="text" id="textInput" placeholder="0~100"></input></div> 
                                           </td>
                                           </tr>
                                           <tr valign='top' >
                                           <td>
                                           <div className='contd' >Число работников (3 смена)</div> 
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
                    

                                      </komp>  )

}
