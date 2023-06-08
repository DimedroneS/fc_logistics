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
 
   const redact1 = () => {
     // Действия при нажатии кнопки "Ок"
     redactClose1();
   };



    return ( <soglash>
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
            <Link to='/Soglash'><button className='tabsbuttonON'>Соглашение</button></Link>
                        <Link to='/RinPostavok'><button className='tabsbutton'>Рынок поставщиков</button></Link>
                        <Link to='/Kpi'><button className='tabsbutton'>KPI</button></Link>
                        <Link to='/HistoruSnab'><button className='tabsbutton'>История решений</button></Link>
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
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Вступить в переговоры</div> </Link>
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
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Вступить в переговоры</div> </Link>
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
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Вступить в переговоры</div> </Link>
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
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Вступить в переговоры</div> </Link>
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
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Вступить в переговоры</div> </Link>
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
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Вступить в переговоры</div> </Link>
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
          <h2 className='modal_text'>Редактирование закупок</h2>
          <table cellSpacing={0} cellPadding={0} colls={3} border={0} >
          <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Вид транспорта</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>
                                              
                                            <select className='modallist'>
                                                            <option>Первый выбор</option>
                                                            <option>Второй выбор</option>
                                                            <option>Третий выбор</option>
                                            </select>
                                              </div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd' title=''>Грузовая единица, л</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>
                                              
                                            <select className='modallist'>
                                                            <option>Первый выбор</option>
                                                            <option>Второй выбор</option>
                                                            <option>Третий выбор</option>
                                            </select>

                                              </div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Согласованная надежность доставки (%)</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>
                                            <input className='modalinp' type="text" id="textInput" placeholder="70~100"></input>
                                              </div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Качество сырья</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>
                                              
                                            <select className='modallist'>
                                                            <option>Первый выбор</option>
                                                            <option>Второй выбор</option>
                                                            <option>Третий выбор</option>
                                            </select>

                                              </div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Условия поставки</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>
                                            <select className='modallist'>
                                                            <option>Первый выбор</option>
                                                            <option>Второй выбор</option>
                                                            <option>Третий выбор</option>
                                            </select>
                                              </div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Начало цикла оплаты</div> </Link>
                                            </td>
                                            <td>
                                            <div className='contd'>
                                              
                                            <select className='modallist'>
                                                            <option>Первый выбор</option>
                                                            <option>Второй выбор</option>
                                                            <option>Третий выбор</option>
                                            </select>
                                              </div> 
                                            </td>
                                            </tr>
                                            <tr valign='top' >
                                            <td>
                                            <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Период оплаты, дн</div> </Link>
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
                                                         <Link to="/HelpPage" className='helplink'><div className='contd'title=''>Развитие поставщика</div> </Link>
                                                         </td>
                                                         <td>
                                                         <div className='contd'>
                                                         <select className='modallist'>
                                                            <option>Первый выбор</option>
                                                            <option>Второй выбор</option>
                                                            <option>Третий выбор</option>
                                            </select>
                                                          </div> 
                                                         </td>
                                                         </tr>
                                                         <tr valign='top' >
                                                         <td>
                                                         <Link to="/HelpPage" className='helplink'><div className='contd'title=''>VMI с поставщиками</div> </Link>
                                                         </td>
                                                         <td>
                                            <div className='contd'>
                                            <select className='modallist'>
                                                            <option>Первый выбор</option>
                                                            <option>Второй выбор</option>
                                                            <option>Третий выбор</option>
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
              <Button className='modalbut' variant="contained" onClick={redact1}>
                Подсчитать
              </Button>
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