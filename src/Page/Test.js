import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Test() {
  const [selectedTab, setSelectedTab] = useState('');
  const [content, setContent] = useState('');

  const handleSearch = () => {
    // Здесь вы можете выполнить логику поиска и установить соответствующий контент
    // Например, если выбрана вкладка 'Молоко сырое', вы можете установить контент для этой вкладки
    if (selectedTab === 'Молоко сырое') {
      const tableContent = (
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
                                            <button variant="contained"  class="talkbut">Да</button>
                                             <button variant="contained"  class="talkbut" >Прекратить</button></div> {/*<Link to="/shit" className='helplink'></Link> */}
                                            </td>
                                            </tr>
                            </table>
      );
      setContent(tableContent);
    }
    // Добавьте логику для других вкладок
  };

  return (
   <>
     <div><div className='panelcontent'>
     <div className='leftpanel'> <div className='cappanel'>
                Панель показателей <span className='nameround'> RoundName </span>
             </div>
                <div className='infopanel'>
                   <table cellSpacing={0} cellPadding={0} colls={6} border={0}>

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
     <div className='rightpanel'>
     <div className='cappanel'>
                Решение <span className='nameround'> RoundName </span>
                </div>

                <div className='tabsbuttonlayer'>
                   <Link to='/Soglash'><button className='tabsbutton'>Соглашение</button></Link>
                   <Link to='/RinPostavok'><button className='tabsbuttonON'>Рынок поставщиков</button></Link>
                   {/* <Link to='/Kpi'><button className='tabsbutton'>KPI</button></Link>
                   <Link to='/HistoruSnab'><button className='tabsbutton'>История решений</button></Link> */}
                   <button className='tabsbuttonnone'></button></div>

       <div>

         <div>
           <fieldset className='fieldtd'>
             <legend>Рынок поставщиков</legend>
             <table cellSpacing={0} cellPadding={0} colls={2} border={0}>
               <tr valign='top'>
                 <td>
                   <div className='contd' title='Компонент, в связи с которым необходимо выбрать поставщика'>Компоненты</div>
                 </td>
                 <td>
                   <div>
                     <select className='postavki' onChange={(e) => setSelectedTab(e.target.value)}>
                       <option value="">Выберите компонент</option>
                       <option value="Молоко сырое">Молоко сырое</option>
                       <option value="Упаковка">Упаковка</option>
                       <option value="Молоко Сухое">Молоко Сухое</option>
                        <option value="Вкусовые добавки">Вкусовые добавки</option>
                         <option value="Сахар">Сахар</option>
                         <option value="PET">PET</option>
                       {/* Добавьте другие варианты компонентов */}
                     </select>
                   </div>
                 </td>
               </tr>
               <tr valign='top'>
                 <td>
                   <div className='contd' title=''></div>
                 </td>
                 <td>
                   <div className='contd'>
                     <button className="talkbut" onClick={handleSearch}>Поиск</button>
                   </div>
                 </td>
               </tr>
             </table>
           </fieldset>
         </div>
         {/* Отображение контента */}
         {selectedTab && <div>{content}</div>}
       </div>
     </div>
     </div>
     </div>
   </>
 );
}