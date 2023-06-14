import { Checkbox} from '@mui/material'
import React, {} from 'react'
import { Link } from 'react-router-dom';
export default function MainPanel() {

   // git status
   // git add -A
   // git commit -a -m"_"
   // git remote add origin https://github.com/DimedroneS/fc_logistics.git
   // git branch -M main
   // git push -u origin main


    return ( <mainpanel>
    


    

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
                        <Link to='/Soglash'><button className='tabsbutton'>Соглашение</button></Link>
                        <Link to='/Shit'><button className='tabsbutton'>Рынок поставщиков</button></Link>
                        <Link to='/Shit'><button className='tabsbutton' href="#content-3">KPI</button></Link>
                        <Link to='/Shit'><button className='tabsbutton' href="#content-4">История решений</button></Link>
                        <button className='tabsbuttonnone'></button>
                        </div> 

                        {/* <div class="tabs__links">
                        <a href="#content-1">Соглашение</a>
                        <Link to='/Shit'><a >Рынок поставщиков</a></Link>
                        <a href="#content-3">KPI</a>
                        <a href="#content-4">История решений</a></div>  */}


                         {/* <div class="tabs__links">
                        <a href="#content-1">Соглашение</a>
                        <a href="#content-2">Рынок поставщиков</a>
                        <a href="#content-3">KPI</a>
                        <a href="#content-4">История решений</a>  
                        </div> href="src/add/shit.js" */}





            
                                <div class="tabs">
                                
                                <div id="content-1">
                        <div className='cont1'>  
                        
                        <fieldset className='fieldtd'><legend>Упаковка</legend>
                            <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'title='Наименование поставщика'>Название</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd' title='Индекс договора определяет соотношение согласованной премии или скидки к базовой покупной цене. Индекс, менее 1, является скидкой, в то время как индекс, превышающий 1, является премией.'>Контрактный индекс</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd' title= 'Качество поставляемых материалов'>Качество </div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd' title=''>Сроки поставок (дни)</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'title=''>Сертификация</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'title=''>Страна</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd' title=''>Вид транспорта</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'title=''>Свободные мощности</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'title=''>Период оплаты (недели)</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'title=''>Торговая единица</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'title=''>Согласованная надежность доставки(%)</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'title=''>Окно доставки</div> 
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
                                            <div className='contd'title=''>Развитие поставщика</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'title=''>VMI с поставщиками</div> 
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
                                            <div className='contd'title=''>Вступить в переговоры</div> 
                                            </td>
                                            <td>
                                            <div className='contd'><button class="talkbut">Да</button><button class="talkbut">Прекратить</button></div> 
                                            </td>
                                            </tr>
                            </table>
                        </fieldset>
                         
                        
                        <fieldset className='fieldtd'><legend>Компонент</legend>
                            <table cellSpacing={0} cellPadding={0} colls={2} border={0} >
                            <tr valign='top' >
                                            <td>
                                            <div className='contd'title='Наименование поставщика'>Название</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd' title='Индекс договора определяет соотношение согласованной премии или скидки к базовой покупной цене. Индекс, менее 1, является скидкой, в то время как индекс, превышающий 1, является премией.'>Контрактный индекс</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd' title= 'Качество поставляемых материалов'>Качество </div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd' title=''>Сроки поставок (дни)</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'title=''>Сертификация</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'title=''>Страна</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd' title=''>Вид транспорта</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'title=''>Свободные мощности</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'title=''>Период оплаты (недели)</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'title=''>Торговая единица</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'title=''>Согласованная надежность доставки(%)</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'title=''>Окно доставки</div> 
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
                                            <div className='contd'title=''>Развитие поставщика</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <div className='contd'title=''>VMI с поставщиками</div> 
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
                                            <div className='contd'title=''>Вступить в переговоры</div> 
                                            </td>
                                            <td>
                                            <div className='contd'><button class="talkbut">Да</button><button class="talkbut">Прекратить</button></div> 
                                            </td>
                                            </tr>
                            </table>
                        </fieldset>
                        </div> 
                        </div> 
                    
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
                                          <table cellSpacing={0} cellPadding={0} colls={2} border={0} >
                                          <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title='Наименование поставщика'>Название</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd' title='Индекс договора определяет соотношение согласованной премии или скидки к базовой покупной цене. Индекс, менее 1, является скидкой, в то время как индекс, превышающий 1, является премией.'>Контрактный индекс</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd' title= 'Качество поставляемых материалов'>Качество </div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd' title=''>Сроки поставок (дни)</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title=''>Сертификация</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title=''>Страна</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd' title=''>Вид транспорта</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title=''>Свободные мощности</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title=''>Период оплаты (недели)</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title=''>Торговая единица</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title=''>Согласованная надежность доставки(%)</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title=''>Окно доставки</div> 
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
                                                         <div className='contd'title=''>Развитие поставщика</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title=''>VMI с поставщиками</div> 
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
                                                         <div className='contd'title=''>Вступить в переговоры</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'><button class="talkbut">Да</button><button class="talkbut">Прекратить</button></div> 
                                                         </td>
                                                         </tr>
                                          </table>
                                       </fieldset>
                                       <fieldset className='fieldtd'><legend>Компонент</legend>
                                          <table cellSpacing={0} cellPadding={0} colls={2} border={0} >
                                          <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title='Наименование поставщика'>Название</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd' title='Индекс договора определяет соотношение согласованной премии или скидки к базовой покупной цене. Индекс, менее 1, является скидкой, в то время как индекс, превышающий 1, является премией.'>Контрактный индекс</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd' title= 'Качество поставляемых материалов'>Качество </div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd' title=''>Сроки поставок (дни)</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title=''>Сертификация</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title=''>Страна</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd' title=''>Вид транспорта</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title=''>Свободные мощности</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title=''>Период оплаты (недели)</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title=''>Торговая единица</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title=''>Согласованная надежность доставки(%)</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title=''>Окно доставки</div> 
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
                                                         <div className='contd'title=''>Развитие поставщика</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>value</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title=''>VMI с поставщиками</div> 
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
                                                         <div className='contd'title=''>Вступить в переговоры</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'><button class="talkbut">Да</button><button class="talkbut">Прекратить</button></div> 
                                                         </td>
                                                         </tr>
                                          </table>
                                       </fieldset>   
                                       </div>
                    </div>
                    <div id="content-2">
                    <fieldset className='fieldtd'><legend>Рынок поставщиков</legend>
                                          <table cellSpacing={0} cellPadding={0} colls={2} border={0} >
                                          <tr valign='top' >
                                                         <td>
                                                         <div className='contd'title='Компонент, в связи с которым необходимо выбрать поставщика'>Компоненты</div> 
                                                         </td>
                                                         <td>
                                                            <div>
                                                            <select className='postavki'>
                                                            <option>Пункт 1</option>
                                                            <option>Пункт 2</option>
                                                            <option>Пункт 3</option>
                                                            <option>Пункт 4</option>
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


                                       <div id="content-3">
                                       <div className='cont2'>  
                    <fieldset className='fieldtd'><legend>Упаковка</legend>
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
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
                                                         </td>
                                                         <td>
                                                         <div className='checkb'><Checkbox></Checkbox></div> 
                                                         </td>
                                                         </tr>

                                                         <tr valign='top' >
                                                         <td>
                                                         <div className='contd4'title=''>name</div> 
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
                                          
                                       </div>
                     

                  
                                       





        </mainpanel>)
}
