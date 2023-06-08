import React, { } from 'react'
import { Checkbox} from '@mui/material'
import { Link } from 'react-router-dom';
export default function KPI() {


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
                <Link to='/KPI'><button className='tabsbuttonON'>KPI</button></Link>
                <Link to='/HistoruSnab'><button className='tabsbutton'>История решений</button></Link>
                <button className='tabsbuttonnone'></button></div>








             <div>

             <div id="content-3">
                                       <div className='cont2'>  
                    <fieldset className='fieldtd'><legend>KPI</legend>
                                          <table cellSpacing={0} cellPadding={0} colls={2} border={0} >
                                         
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title='Возврат на инвестиции (ROI - Return on Investment) - это отношение операционной прибыли к инвестициям выраженное в %'>Возврат на инвестиции ROI(%)</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Себестоимость (%)</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Затраты на дистрибьюцию (%)</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Затраты на обработку (%)</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Стоимость материалов (%)</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>накладные расходы (%)</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Затраты на производство (%)</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Затраты на хранение (%)</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Прибыль (%)</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Отбракованное сырье (%)</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Доступность компонентов</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Надежность поставки поставщика</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Количество строк во входящих заказах</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>входящие поставки</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Показатель загруженности линии розлива</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Коэффициент использования склада сырья</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Показатель загруженности цистерно хранилища</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>коэффициент использования склада готовой продукции</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Потери при переналадке оборудования</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Потери от поломок на линии</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Контрактные рабочие на складе сырья</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Контрактные рабочие на линии розлива</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>Контрактные рабочие на складе готовой продукции</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>


                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'></div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'><button class="talkbut">Сохранить</button></div>
                                                         </td>
                                                         </tr>

                                          </table>
                                       </fieldset>
                                       </div></div>







             </div>

          </div>

       </div></>
                 

              
                                   





)
}

