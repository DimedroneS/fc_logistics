import React, { Component } from 'react'
import {} from '@mui/material'
import { Link } from 'react-router-dom';
export default class RinPostavok extends Component {
  render() {
    return (
        <><div>
       </div><div className='panelcontent'>
             <div className='leftpanel'> <div className='cappanel'>
                Панель показателей <span className='nameround'> RoundName </span>
             </div>
                <div className='infopanel'>
                   <table cellSpacing={0} cellPadding={0} colls={6} border={0}>

                      <tbody>

                         <tr valign='top'>
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
                         <tr valign='top'>
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
                         <tr valign='top'>
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
                         <tr valign='top'>
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
                         <tr valign='top'>
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
                            <div className='cappanel2'> Отчет </div>
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

             </div>

                <div className='tabsbuttonlayer'>
                   <Link to='/Soglash'><button className='tabsbutton'>Соглашение</button></Link>
                   <Link to='/RinPostavok'><button className='tabsbuttonON'>Рынок поставщиков</button></Link>
                   <Link to='/Kpi'><button className='tabsbutton'>KPI</button></Link>
                   <Link to='/HistoruSnab'><button className='tabsbutton'>История решений</button></Link>
                   <button className='tabsbuttonnone'></button></div>








                <div>

                <div>
                    <fieldset className='fieldtd'><legend>Рынок поставщиков</legend>
                                          <table cellSpacing={0} cellPadding={0} colls={2} border={0} >
                                          <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title='Компонент, в связи с которым необходимо выбрать поставщика'>Компоненты</div> 
                                                         </td>
                                                         <td>
                                                            <div>
                                                            <select className='postavki'>
                                                            <option>Молоко сырое</option>
                                                            <option>Упаковка</option>
                                                            <option>Молоко Сухое</option>
                                                            <option>Вкусовые добавки</option>
                                                            <option>Сахар</option>
                                                            <option>PET</option>
                                                            </select>
                                                            </div>
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title=''></div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'><button class="talkbut">Поиск</button></div>
                                                         </td>
                                                         </tr>
                                          </table>
                                       </fieldset>
                                       </div>







                </div>

             </div>

          </div></>
                    

                 
                                      





    )
  }
}
