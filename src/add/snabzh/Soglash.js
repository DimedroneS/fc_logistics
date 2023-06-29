import { Button, Modal } from '@mui/material';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
export default function Soglash() {


   const [open, setOpen] = useState(false);

   const handleOpen = () => {
     setOpen(true);
   };
 
   const handleClose = () => {
     setOpen(false);
   };
 
   const handleConfirm = () => {
     // Действия при нажатии кнопки "Ок"
     handleClose();
   };

   const [open_redact1, setRedact1] = useState(false);

   const redactOpen1 = () => {
     setRedact1(true);
   };
 
   const redactClose1 = () => {
     setRedact1(false);
   };
 
   // const redact1 = () => {
   //   // Действия при нажатии кнопки "Ок"
   //   redactClose1();
   // };



    return ( <soglash>
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
                               <div className='sourcetd'>Рентабельность (%)</div> 
                            </td>
                            <td>
                               <div className='sourcetd'></div> 
                            </td>
                            <td>
                               <div className='sourcetd'>-4,0 %</div> 
                            </td>
                            <td>
                               <div className='sourcetd'>0,2 %</div> 
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
                               <div className='sourcetd'>2,9 %</div> 
                            </td>
                            <td>
                               <div className='sourcetd'>2,9 %</div> 
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
                               <div className='sourcetd'>37,0 %</div> 
                            </td>
                            <td>
                               <div className='sourcetd'>33,0 %</div> 
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
                               <div className='sourcetd'>92,1 %</div> 
                            </td>
                            <td>
                               <div className='sourcetd'>92,4 %</div> 
                            </td>
                        </tr>
                        {/* <tr>
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
                        </tr> */}
                    </tbody>
                </table>
            </div>
            </div>
            <div className='rightpanel'><div className='cappanel'> 
            Решение <span className='nameround'> Раунд 1 </span>
            
            </div >

            <div className='tabsbuttonlayer' >
            <Link to='/Soglash'><button className='tabsbuttonON'>Соглашение</button></Link>
                        <Link to='/RinPostavok'><button className='tabsbutton'>Рынок поставщиков</button></Link>
                        {/* <Link to='/Kpi'><button className='tabsbutton'>KPI</button></Link> */}
                        {/* <Link to='/HistoruSnab'><button className='tabsbutton'>История решений</button></Link> */}
                        <button className='tabsbuttonnone'></button></div>






            
                                <div >
                                
                                <div id="content-1">
                        <div className='cont1'>  
                        
                        <fieldset className='fieldtd'><legend>Упаковка</legend>
                            <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title='Наименование поставщика. Нажмите для справки.'>Название</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>УпаковкаТорг</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title='Регион где находиться поставщик. Нажмите для справки.'>Регион расположения</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>Пермская обл. (700 км)</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title= 'Качество поставляемых материалов'>Срок отгрузки </div> 
                                            </td>
                                            <td>
                                            <div className='contd'>6</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title=''>Свободные мощности (%)</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>50</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Сертификация</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>Нет</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Вид транспорта</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>ЖД</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title=''>Грузовая единица</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>Паллет</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Согласованная надежность доставки (%)</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>90</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Качество сырья</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>Высокое</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Условия поставки</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>FCA</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Начало цикла оплаты</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>Заказ</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Период оплаты, дн</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>10</div> 
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
                                                         <div className='contd'>Нет</div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                          <div className='contd'title=''>VMI с поставщиками</div> 
                                                         </td>
                                                         <td>
                                                         <div className='contd'>Нет</div> 
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
                                            <div className='contd'>
                                            <button variant="contained" onClick={redactOpen1} class="talkbut">Да</button>
                                             <button variant="contained" onClick={handleOpen} class="talkbut" >Прекратить</button></div> {/*<Link to="/shit" className='helplink'></Link> */}
                                            </td>
                                            </tr>
                            </table>
                        </fieldset>
                         
                        
                        <fieldset className='fieldtd'><legend>Молоко сырое</legend>
                            <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title='Наименование поставщика. Нажмите для справки.'>Название</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>Каскара</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title='Регион где находиться поставщик. Нажмите для справки.'>Регион расположения</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>Тюменская обл. (30 км)</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title= 'Качество поставляемых материалов'>Срок отгрузки </div> 
                                            </td>
                                            <td>
                                            <div className='contd'>2</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title=''>Свободные мощности (%)</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>10</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Сертификация</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>Да</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Вид транспорта</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title=''>Грузовая единица, л</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Согласованная надежность доставки (%)</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Качество сырья</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Условия поставки</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Начало цикла оплаты</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Период оплаты</div> 
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
                                            <div className='contd'>
                                            <button variant="contained" onClick={redactOpen1} class="talkbut">Да</button>
                                             <button variant="contained" onClick={handleOpen} class="talkbut" >Прекратить</button></div> {/*<Link to="/shit" className='helplink'></Link> */}
                                            </td>
                                            </tr>
                            </table>
                        </fieldset>

                        <fieldset className='fieldtd'><legend>Молоко сухое</legend>
                            <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title='Наименование поставщика. Нажмите для справки.'>Название</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title='Регион где находиться поставщик. Нажмите для справки.'>Регион расположения</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title= 'Качество поставляемых материалов'>Срок отгрузки </div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title=''>Свободные мощности (%)</div> 
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
                                             <div className='contd'title=''>Вид транспорта</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title=''>Грузовая единица, л</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Согласованная надежность доставки (%)</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Качество сырья</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Условия поставки</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Начало цикла оплаты</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Период оплаты</div> 
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
                                            <div className='contd'>
                                            <button variant="contained" onClick={redactOpen1} class="talkbut">Да</button>
                                             <button variant="contained" onClick={handleOpen} class="talkbut" >Прекратить</button></div> {/*<Link to="/shit" className='helplink'></Link> */}
                                            </td>
                                            </tr>
                            </table>
                        </fieldset>

                        <fieldset className='fieldtd'><legend>Вкусовые добавки</legend>
                            <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title='Наименование поставщика. Нажмите для справки.'>Название</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title='Регион где находиться поставщик. Нажмите для справки.'>Регион расположения</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title= 'Качество поставляемых материалов'>Срок отгрузки </div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title=''>Свободные мощности (%)</div> 
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
                                             <div className='contd'title=''>Вид транспорта</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title=''>Грузовая единица, л</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Согласованная надежность доставки (%)</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Качество сырья</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Условия поставки</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Начало цикла оплаты</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Период оплаты</div> 
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
                                            <div className='contd'>
                                            <button variant="contained" onClick={redactOpen1} class="talkbut">Да</button>
                                             <button variant="contained" onClick={handleOpen} class="talkbut" >Прекратить</button></div> {/*<Link to="/shit" className='helplink'></Link> */}
                                            </td>
                                            </tr>
                            </table>
                        </fieldset>

                        <fieldset className='fieldtd'><legend>Сахар</legend>
                            <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title='Наименование поставщика. Нажмите для справки.'>Название</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title='Регион где находиться поставщик. Нажмите для справки.'>Регион расположения</div> 
                                             </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title= 'Качество поставляемых материалов'>Срок отгрузки </div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title=''>Свободные мощности (%)</div> 
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
                                             <div className='contd'title=''>Вид транспорта</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title=''>Грузовая единица, л</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Согласованная надежность доставки (%)</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Качество сырья</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Условия поставки</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Начало цикла оплаты</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Период оплаты</div> 
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
                                            <div className='contd'>
                                            <button variant="contained" onClick={redactOpen1} class="talkbut">Да</button>
                                             <button variant="contained" onClick={handleOpen} class="talkbut" >Прекратить</button></div> {/*<Link to="/shit" className='helplink'></Link> */}
                                            </td>
                                            </tr>
                            </table>
                        </fieldset>

                        <fieldset className='fieldtd'><legend>PET</legend>
                            <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title='Наименование поставщика. Нажмите для справки.'>Название</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title='Регион где находиться поставщик. Нажмите для справки.'>Регион расположения</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title= 'Качество поставляемых материалов'>Срок отгрузки </div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title=''>Свободные мощности (%)</div> 
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
                                             <div className='contd'title=''>Вид транспорта</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title=''>Грузовая единица, л</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Согласованная надежность доставки (%)</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Качество сырья</div>
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Условия поставки</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Начало цикла оплаты</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>value</div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Период оплаты</div> 
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
                                            <div className='contd'>
                                            <button variant="contained" onClick={redactOpen1} class="talkbut">Да</button>
                                             <button variant="contained" onClick={handleOpen} class="talkbut" >Прекратить</button></div> {/*<Link to="/shit" className='helplink'></Link> */}
                                            </td>
                                            </tr>
                            </table>
                        </fieldset>

                        </div> 
                        </div> 
                    





                                       
                                       </div>  
                                        
                                       </div>  
                                          
                                       </div>
                     

                  
                                       

                                       <Modal open={open} onClose={handleClose}>
          <div className="modal">
            <h2 className='modal_text'>Подтвердите действие</h2>
            <p className='modal_text'>Вы уверены, что хотите прервать этот контракт?</p>
            <div className="modal__buttons">
              <Button  variant="contained" onClick={handleConfirm}>
                Ок
              </Button>
              <Button  variant="contained" onClick={handleClose}>
                Отмена
              </Button>
            </div>
          </div>
        </Modal>



        <Modal open={open_redact1} onClose={redactClose1}>
          <div className="modalYES">
          <h2 className='modal_text'>Редактирование поставки</h2>
          <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
          <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Вид транспорта</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>
                                              
                                            <select className='modallist'>
                                                            <option>Авто</option>
                                                            <option>ЖД</option>
                                            </select>
                                              </div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd' title=''>Грузовая единица</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>
                                              
                                            <select className='modallist'>
                                                            <option>Паллет</option>
                                                            <option>Контейнер</option>
                                            </select>

                                              </div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Согласованная надежность доставки (%)</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>
                                            <input className='modalinp' type="text" id="textInput" placeholder="70~100"></input>
                                              </div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Качество сырья</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>
                                              
                                            <select className='modallist'>
                                                            <option>Высокое</option>
                                                            <option>Среднее</option>
                                                            <option>Низкое</option>
                                            </select>

                                              </div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Условия поставки</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>
                                            <select className='modallist'>
                                                            <option>CPT</option>
                                                            <option>FCA</option>
                                            </select>
                                              </div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Начало цикла оплаты</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>
                                              
                                            <select className='modallist'>
                                                            <option>Заказ</option>
                                                            <option>Отгрузка</option>
                                                            <option>Получение</option>
                                                            <option>Продажа</option>
                                            </select>
                                              </div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                             <div className='contd'title=''>Период оплаты, дн</div> 
                                            </td>
                                            <td>
                                            <div className='contd'>
                                            <input className='modalinp' type="text" id="textInput" placeholder="0~90"></input>
                                              </div> 
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
                                                         <div className='contd'>
                                                         <select className='modallist'>
                                                            <option>Да</option>
                                                            <option>Нет</option>

                                            </select>
                                                          </div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                          <div className='contd'title=''>VMI с поставщиками</div> 
                                                         </td>
                                                         <td>
                                            <div className='contd'>
                                            <select className='modallist'>
                                                            <option>Да</option>
                                                            <option>Нет</option>
                                            </select>
                                              </div> 
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
                                            
                                            </table>
            <div className="modal__buttons">
              {/* <Button className='modalbut' variant="contained" onClick={redact1}>
                Подсчитать
              </Button> */}
              <Button  variant="contained" onClick={redactClose1}>
                Согласие
              </Button>
              <Button  variant="contained" onClick={redactClose1}>
                Отмена
              </Button>
            </div>
          </div>

        </Modal>





      </soglash> )
}