import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HistoruSnab extends Component {
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
                    <Link to='/RinPostavok'><button className='tabsbutton'>Рынок поставщиков</button></Link>
                    <Link to='/Kpi'><button className='tabsbutton'>KPI</button></Link>
                    <Link to='/HistoruSnab'><button className='tabsbuttonON'>История решений</button></Link>
                    <button className='tabsbuttonnone'></button></div>
 
 
 
 
 
 
 
 
                 <div>
 
                 <div id="content-4">

                               


                                       <div className='cont2'>  

                                       <div >
                              <button className='buttonlog'>1</button>
                              <button className='buttonlog'>2</button>
                              <button className='buttonlog'>3</button>
                              <button className='buttonlog'>4</button>
                              <button className='buttonlog'>5</button>
                              </div>

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
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Вид транспорта</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd' title=''>Грузовая единица, л</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Согласованная надежность доставки (%)</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Качество сырья</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Условия поставки</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Начало цикла оплаты</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Период оплаты</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>

                                            
                                            <tr valign='top' >
                                                         <td>
                                                         <div className='separator'></div> 
                                                         </td>
                                                         <td>
                                                         <div className='separator'></div> 
                                                         </td>
                                                         </tr>
                                                         
                                                         <tr valign='top' >
                                                         <td>
                                                         <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Развитие поставщика</div> </Link>
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <Link to="/HelpPage" className='helplink'><div className='contd'title=''>VMI с поставщиками</div> </Link>
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>


                            </table>
                        </fieldset>
                         
                        
                        <fieldset className='fieldtd'><legend>Молоко сырое</legend>
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
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Вид транспорта</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd' title=''>Грузовая единица, л</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Согласованная надежность доставки (%)</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Качество сырья</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Условия поставки</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Начало цикла оплаты</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Период оплаты</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>

                                            
                                            <tr valign='top' >
                                                         <td>
                                                         <div className='separator'></div> 
                                                         </td>
                                                         <td>
                                                         <div className='separator'></div> 
                                                         </td>
                                                         </tr>
                                                         
                                                         <tr valign='top' >
                                                         <td>
                                                         <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Развитие поставщика</div> </Link>
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <Link to="/HelpPage" className='helplink'><div className='contd'title=''>VMI с поставщиками</div> </Link>
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>


                            </table>
                        </fieldset>

                        <fieldset className='fieldtd'><legend>Молоко сухое</legend>
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
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Вид транспорта</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd' title=''>Грузовая единица, л</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Согласованная надежность доставки (%)</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Качество сырья</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Условия поставки</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Начало цикла оплаты</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Период оплаты</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>

                                            
                                            <tr valign='top' >
                                                         <td>
                                                         <div className='separator'></div> 
                                                         </td>
                                                         <td>
                                                         <div className='separator'></div> 
                                                         </td>
                                                         </tr>
                                                         
                                                         <tr valign='top' >
                                                         <td>
                                                         <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Развитие поставщика</div> </Link>
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <Link to="/HelpPage" className='helplink'><div className='contd'title=''>VMI с поставщиками</div> </Link>
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>


                            </table>
                        </fieldset>

                        <fieldset className='fieldtd'><legend>Вкусовые добавки</legend>
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
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Вид транспорта</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd' title=''>Грузовая единица, л</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Согласованная надежность доставки (%)</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Качество сырья</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Условия поставки</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Начало цикла оплаты</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Период оплаты</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>

                                            
                                            <tr valign='top' >
                                                         <td>
                                                         <div className='separator'></div> 
                                                         </td>
                                                         <td>
                                                         <div className='separator'></div> 
                                                         </td>
                                                         </tr>
                                                         
                                                         <tr valign='top' >
                                                         <td>
                                                         <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Развитие поставщика</div> </Link>
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <Link to="/HelpPage" className='helplink'><div className='contd'title=''>VMI с поставщиками</div> </Link>
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>


                            </table>
                        </fieldset>

                        <fieldset className='fieldtd'><legend>Сахар</legend>
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
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Вид транспорта</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd' title=''>Грузовая единица, л</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Согласованная надежность доставки (%)</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Качество сырья</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Условия поставки</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Начало цикла оплаты</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Период оплаты</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>

                                            
                                            <tr valign='top' >
                                                         <td>
                                                         <div className='separator'></div> 
                                                         </td>
                                                         <td>
                                                         <div className='separator'></div> 
                                                         </td>
                                                         </tr>
                                                         
                                                         <tr valign='top' >
                                                         <td>
                                                         <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Развитие поставщика</div> </Link>
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <Link to="/HelpPage" className='helplink'><div className='contd'title=''>VMI с поставщиками</div> </Link>
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>


                            </table>
                        </fieldset>

                        <fieldset className='fieldtd'><legend>PET</legend>
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
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Вид транспорта</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd' title=''>Грузовая единица, л</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Согласованная надежность доставки (%)</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Качество сырья</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Условия поставки</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Начало цикла оплаты</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Период оплаты</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>

                                            
                                            <tr valign='top' >
                                                         <td>
                                                         <div className='separator'></div> 
                                                         </td>
                                                         <td>
                                                         <div className='separator'></div> 
                                                         </td>
                                                         </tr>
                                                         
                                                         <tr valign='top' >
                                                         <td>
                                                         <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Развитие поставщика</div> </Link>
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <Link to="/HelpPage" className='helplink'><div className='contd'title=''>VMI с поставщиками</div> </Link>
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
 
           </div></>
                     
 
                  
                                       
 
 
 
 
    )
  }
}
