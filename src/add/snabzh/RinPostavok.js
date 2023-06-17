import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RinPostavok() {
  const [selectedTab, setSelectedTab] = useState('');
  const [content, setContent] = useState('');

  const handleSearch = () => {
    if (selectedTab === 'Молоко сырое') {
      const tableContent = (
         <><fieldset className='fieldtd'><legend></legend>
            <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Наименование поставщика.  '>Название</div>
                  </td>
                  <td>
                     <div className='contd'>Каскара</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                  </td>
                  <td>
                     <div className='contd'>Тюменская обл. (30 км)</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                  </td>
                  <td>
                     <div className='contd'>2</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Свободные мощности (%)</div>
                  </td>
                  <td>
                     <div className='contd'>10</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Сертификация ISO</div>
                  </td>
                  <td>
                     <div className='contd'>Да</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Вид транспорта</div>
                  </td>
                  <td>
                     <div className='contd'>Авто</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Грузовая единица, л</div>
                  </td>
                  <td>
                     <div className='contd'>6000/ 9000/ 25000</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                  </td>
                  <td>
                     <div className='contd'>От 70 до 100 </div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Качество сырья</div>
                  </td>
                  <td>
                     <div className='contd'>1 сорт</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Условия поставки</div>
                  </td>
                  <td>
                     <div className='contd'>CPT, FCA</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Начало цикла оплаты</div>
                  </td>
                  <td>
                     <div className='contd'>Заказ/ Отгрузка/ Получение/ Продажа</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Период оплаты, дн</div>
                  </td>
                  <td>
                     <div className='contd'>От 0 до 90</div>
                  </td>
               </tr>



               <tr valign='top'>
                  <td>
                     <div className='separator'></div>
                  </td>
                  <td>
                     <div className='separator'></div>
                  </td>
               </tr>

               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Принять поставщика</div>
                  </td>
                  <td>
                     <button class="talkbut">ОК</button>
                  </td>
               </tr>
            </table>
         </fieldset><fieldset className='fieldtd'><legend></legend>
               <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Наименование поставщика.  '>Название</div>
                     </td>
                     <td>
                        <div className='contd'>Исетское</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                     </td>
                     <td>
                        <div className='contd'>Тюменская обл. (120 км)</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                     </td>
                     <td>
                        <div className='contd'>3</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Свободные мощности (%)</div>
                     </td>
                     <td>
                        <div className='contd'>20</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Сертификация ISO</div>
                     </td>
                     <td>
                        <div className='contd'>Да</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Вид транспорта</div>
                     </td>
                     <td>
                        <div className='contd'>Авто</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Грузовая единица, л</div>
                     </td>
                     <td>
                        <div className='contd'>6000/ 9000/ 25000</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                     </td>
                     <td>
                        <div className='contd'>От 70 до 100</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Качество сырья</div>
                     </td>
                     <td>
                        <div className='contd'>Высший сорт</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Условия поставки</div>
                     </td>
                     <td>
                        <div className='contd'>CPT, FCA</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Начало цикла оплаты</div>
                     </td>
                     <td>
                        <div className='contd'>Заказ/ Отгрузка/ Получение/ Продажа</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Период оплаты, дн</div>
                     </td>
                     <td>
                        <div className='contd'>От 0 до 90</div>
                     </td>
                  </tr>



                  <tr valign='top'>
                     <td>
                        <div className='separator'></div>
                     </td>
                     <td>
                        <div className='separator'></div>
                     </td>
                  </tr>

                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Принять поставщика</div>
                     </td>
                     <td>
                        <button class="talkbut">ОК</button>
                     </td>
                  </tr>
               </table>
            </fieldset><fieldset className='fieldtd'><legend></legend>
               <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Наименование поставщика.  '>Название</div>
                     </td>
                     <td>
                        <div className='contd'>Новая деревня</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                     </td>
                     <td>
                        <div className='contd'>Тюменская обл. (180 км)</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                     </td>
                     <td>
                        <div className='contd'>5</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Свободные мощности (%)</div>
                     </td>
                     <td>
                        <div className='contd'>25</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Сертификация ISO</div>
                     </td>
                     <td>
                        <div className='contd'>Да</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Вид транспорта</div>
                     </td>
                     <td>
                        <div className='contd'>Авто</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Грузовая единица, л</div>
                     </td>
                     <td>
                        <div className='contd'>6000/ 9000/ 25000</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                     </td>
                     <td>
                        <div className='contd'>От 70 до 100</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Качество сырья</div>
                     </td>
                     <td>
                        <div className='contd'>1 сорт/Высший сорт</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Условия поставки</div>
                     </td>
                     <td>
                        <div className='contd'>CPT, FCA</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Начало цикла оплаты</div>
                     </td>
                     <td>
                        <div className='contd'>Заказ/ Отгрузка/ Получение/ Продажа</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Период оплаты, дн</div>
                     </td>
                     <td>
                        <div className='contd'>От 0 до 90</div>
                     </td>
                  </tr>



                  <tr valign='top'>
                     <td>
                        <div className='separator'></div>
                     </td>
                     <td>
                        <div className='separator'></div>
                     </td>
                  </tr>

                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Принять поставщика</div>
                     </td>
                     <td>
                        <button class="talkbut">ОК</button>
                     </td>
                  </tr>
               </table>
            </fieldset><fieldset className='fieldtd'><legend></legend>
            <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Наименование поставщика.  '>Название</div>
                  </td>
                  <td>
                     <div className='contd'>Богдановичи</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                  </td>
                  <td>
                     <div className='contd'>Тюменская обл. (250 км)</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                  </td>
                  <td>
                     <div className='contd'>4</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Свободные мощности (%)</div>
                  </td>
                  <td>
                     <div className='contd'>40</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Сертификация ISO</div>
                  </td>
                  <td>
                     <div className='contd'>Да</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Вид транспорта</div>
                  </td>
                  <td>
                     <div className='contd'>Авто</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Грузовая единица, л</div>
                  </td>
                  <td>
                     <div className='contd'>6000/ 9000/ 25000</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                  </td>
                  <td>
                     <div className='contd'>От 70 до 100</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Качество сырья</div>
                  </td>
                  <td>
                     <div className='contd'>1 сорт/Высший сорт</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Условия поставки</div>
                  </td>
                  <td>
                     <div className='contd'>CPT, FCA</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Начало цикла оплаты</div>
                  </td>
                  <td>
                     <div className='contd'>Заказ/ Отгрузка/ Получение/ Продажа</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Период оплаты, дн</div>
                  </td>
                  <td>
                     <div className='contd'>От 0 до 90</div>
                  </td>
               </tr>



               <tr valign='top'>
                  <td>
                     <div className='separator'></div>
                  </td>
                  <td>
                     <div className='separator'></div>
                  </td>
               </tr>

               <tr valign='top'>
                  <td>
                  <div className='contd' title=''>Принять поставщика</div>
                  </td>
                  <td>
                     <button class="talkbut">ОК</button>
                  </td>
               </tr>
            </table>
         </fieldset><fieldset className='fieldtd'><legend></legend>
            <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Наименование поставщика.  '>Название</div>
                  </td>
                  <td>
                     <div className='contd'>Троицкий</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                  </td>
                  <td>
                     <div className='contd'>Омская обл.(800 км)</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                  </td>
                  <td>
                     <div className='contd'>5</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Свободные мощности (%)</div>
                  </td>
                  <td>
                     <div className='contd'>30</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Сертификация ISO</div>
                  </td>
                  <td>
                     <div className='contd'>Да</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Вид транспорта</div>
                  </td>
                  <td>
                     <div className='contd'>Авто</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Грузовая единица, л</div>
                  </td>
                  <td>
                     <div className='contd'>6000/ 9000/ 25000</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                  </td>
                  <td>
                     <div className='contd'>От 70 до 100</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Качество сырья</div>
                  </td>
                  <td>
                     <div className='contd'>Высший сорт</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Условия поставки</div>
                  </td>
                  <td>
                     <div className='contd'>CPT, FCA</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Начало цикла оплаты</div>
                  </td>
                  <td>
                     <div className='contd'>Заказ/ Отгрузка/ Получение/ Продажа</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Период оплаты, дн</div>
                  </td>
                  <td>
                     <div className='contd'>От 0 до 90</div>
                  </td>
               </tr>



               <tr valign='top'>
                  <td>
                     <div className='separator'></div>
                  </td>
                  <td>
                     <div className='separator'></div>
                  </td>
               </tr>

               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Принять поставщика</div>
                  </td>
                  <td>
                     <button class="talkbut">ОК</button>
                  </td>
               </tr>
            </table>
         </fieldset></>
      );
      setContent(tableContent);
    }
    else if (selectedTab === 'Упаковка') {
      const tableContent = (
         <><fieldset className='fieldtd'><legend></legend>
         <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
            <tr valign='top'>
               <td>
                  <div className='contd' title='Наименование поставщика.  '>Название</div>
               </td>
               <td>
                  <div className='contd'>УпаковкаТорг</div>
               </td>
            </tr>
            <tr valign='top'>
               <td>
                  <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
               </td>
               <td>
                  <div className='contd'>Пермская обл. (700 км)</div>
               </td>
            </tr>
            <tr valign='top'>
               <td>
                  <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
               </td>
               <td>
                  <div className='contd'>6</div>
               </td>
            </tr>
            <tr valign='top'>
               <td>
                  <div className='contd' title=''>Свободные мощности (%)</div>
               </td>
               <td>
                  <div className='contd'>50</div>
               </td>
            </tr>
            <tr valign='top'>
               <td>
                  <div className='contd' title=''>Сертификация ISO</div>
               </td>
               <td>
                  <div className='contd'>Нет</div>
               </td>
            </tr>
            <tr valign='top'>
               <td>
                  <div className='contd' title=''>Вид транспорта</div>
               </td>
               <td>
                  <div className='contd'>Авто/ ЖД</div>
               </td>
            </tr>
            <tr valign='top'>
               <td>
                  <div className='contd' title=''>Грузовая единица</div>
               </td>
               <td>
                  <div className='contd'>Паллет</div>
               </td>
            </tr>
            <tr valign='top'>
               <td>
                  <div className='contd' title=''>Согласованная надежность доставки (%)</div>
               </td>
               <td>
                  <div className='contd'>От 70 до 100</div>
               </td>
            </tr>
            <tr valign='top'>
               <td>
                  <div className='contd' title=''>Качество сырья</div>
               </td>
               <td>
                  <div className='contd'>Высокое/ Среднее/Низкое</div>
               </td>
            </tr>
            <tr valign='top'>
               <td>
                  <div className='contd' title=''>Условия поставки</div>
               </td>
               <td>
                  <div className='contd'>CPT, FCA </div>
               </td>
            </tr>
            <tr valign='top'>
               <td>
                  <div className='contd' title=''>Начало цикла оплаты</div>
               </td>
               <td>
                  <div className='contd'>Заказ/ Отгрузка/ Получение/ Продажа</div>
               </td>
            </tr>
            <tr valign='top'>
               <td>
                  <div className='contd' title=''>Период оплаты, дн</div>
               </td>
               <td>
                  <div className='contd'>От 0 до 90</div>
               </td>
            </tr>



            <tr valign='top'>
               <td>
                  <div className='separator'></div>
               </td>
               <td>
                  <div className='separator'></div>
               </td>
            </tr>

            <tr valign='top'>
               <td>
                  <div className='contd' title=''>Принять поставщика</div>
               </td>
               <td>
                  <button class="talkbut">ОК</button>
               </td>
            </tr>
         </table>
      </fieldset><fieldset className='fieldtd'><legend></legend>
            <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Наименование поставщика.  '>Название</div>
                  </td>
                  <td>
                     <div className='contd'>УпакСнаб</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                  </td>
                  <td>
                     <div className='contd'>Московская обл. (2500 км)</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                  </td>
                  <td>
                     <div className='contd'>3</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Свободные мощности (%)</div>
                  </td>
                  <td>
                     <div className='contd'>15</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Сертификация ISO</div>
                  </td>
                  <td>
                     <div className='contd'>Да</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Вид транспорта</div>
                  </td>
                  <td>
                     <div className='contd'>Авто/ ЖД</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Грузовая единица</div>
                  </td>
                  <td>
                     <div className='contd'>Паллет</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                  </td>
                  <td>
                     <div className='contd'>От 70 до 100</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Качество сырья</div>
                  </td>
                  <td>
                     <div className='contd'>Высокое/ Среднее/Низкое</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Условия поставки</div>
                  </td>
                  <td>
                     <div className='contd'>CPT, FCA</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Начало цикла оплаты</div>
                  </td>
                  <td>
                     <div className='contd'>Заказ/ Отгрузка/ Получение/ Продажа</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Период оплаты, дн</div>
                  </td>
                  <td>
                     <div className='contd'>От 0 до 90</div>
                  </td>
               </tr>



               <tr valign='top'>
                  <td>
                     <div className='separator'></div>
                  </td>
                  <td>
                     <div className='separator'></div>
                  </td>
               </tr>

               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Принять поставщика</div>
                  </td>
                  <td>
                     <button class="talkbut">ОК</button>
                  </td>
               </tr>
            </table>
         </fieldset><fieldset className='fieldtd'><legend></legend>
            <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Наименование поставщика.  '>Название</div>
                  </td>
                  <td>
                     <div className='contd'>PackSoftPlastic</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                  </td>
                  <td>
                     <div className='contd'>Китай (4000 км)</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                  </td>
                  <td>
                     <div className='contd'>5</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Свободные мощности (%)</div>
                  </td>
                  <td>
                     <div className='contd'>40</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Сертификация ISO</div>
                  </td>
                  <td>
                     <div className='contd'>Да</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Вид транспорта</div>
                  </td>
                  <td>
                     <div className='contd'>ЖД (контейнер)/ Морской+ЖД</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Грузовая единица</div>
                  </td>
                  <td>
                     <div className='contd'>Контейнер</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                  </td>
                  <td>
                     <div className='contd'>От 70 до 100</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Качество сырья</div>
                  </td>
                  <td>
                     <div className='contd'>Высокое/ Среднее/Низкое</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Условия поставки</div>
                  </td>
                  <td>
                     <div className='contd'>CPT, FCA</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Начало цикла оплаты</div>
                  </td>
                  <td>
                     <div className='contd'>Заказ/ Отгрузка/ Получение/ Продажа</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Период оплаты, дн</div>
                  </td>
                  <td>
                     <div className='contd'>От 0 до 90</div>
                  </td>
               </tr>



               <tr valign='top'>
                  <td>
                     <div className='separator'></div>
                  </td>
                  <td>
                     <div className='separator'></div>
                  </td>
               </tr>

               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Принять поставщика</div>
                  </td>
                  <td>
                     <button class="talkbut">ОК</button>
                  </td>
               </tr>
            </table>
         </fieldset></>
      );
      setContent(tableContent);
    }
    else if (selectedTab === 'Вкусовые добавки') {
      const tableContent = (
         <><fieldset className='fieldtd'><legend></legend>
            <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Наименование поставщика.  '>Название</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Свободные мощности (%)</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Сертификация ISO</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Вид транспорта</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Грузовая единица, л</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Качество сырья</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Условия поставки</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Начало цикла оплаты</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Период оплаты, дн</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>



               <tr valign='top'>
                  <td>
                     <div className='separator'></div>
                  </td>
                  <td>
                     <div className='separator'></div>
                  </td>
               </tr>

               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Принять поставщика</div>
                  </td>
                  <td>
                     <button class="talkbut">ОК</button>
                  </td>
               </tr>
            </table>
         </fieldset><fieldset className='fieldtd'><legend></legend>
               <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Наименование поставщика.  '>Название</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Свободные мощности (%)</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Сертификация ISO</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Вид транспорта</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Грузовая единица, л</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Качество сырья</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Условия поставки</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Начало цикла оплаты</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Период оплаты, дн</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>



                  <tr valign='top'>
                     <td>
                        <div className='separator'></div>
                     </td>
                     <td>
                        <div className='separator'></div>
                     </td>
                  </tr>

                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Принять поставщика</div>
                     </td>
                     <td>
                        <button class="talkbut">ОК</button>
                     </td>
                  </tr>
               </table>
            </fieldset><fieldset className='fieldtd'><legend></legend>
               <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Наименование поставщика.  '>Название</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Свободные мощности (%)</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Сертификация ISO</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Вид транспорта</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Грузовая единица, л</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Качество сырья</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Условия поставки</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Начало цикла оплаты</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Период оплаты, дн</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>



                  <tr valign='top'>
                     <td>
                        <div className='separator'></div>
                     </td>
                     <td>
                        <div className='separator'></div>
                     </td>
                  </tr>

                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Принять поставщика</div>
                     </td>
                     <td>
                        <button class="talkbut">ОК</button>
                     </td>
                  </tr>
               </table>
            </fieldset></>
      );
      setContent(tableContent);
    }
    else if (selectedTab === 'Сахар') {
      const tableContent = (
         <><fieldset className='fieldtd'><legend></legend>
            <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Наименование поставщика.  '>Название</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Свободные мощности (%)</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Сертификация ISO</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Вид транспорта</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Грузовая единица, л</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Качество сырья</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Условия поставки</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Начало цикла оплаты</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Период оплаты, дн</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>



               <tr valign='top'>
                  <td>
                     <div className='separator'></div>
                  </td>
                  <td>
                     <div className='separator'></div>
                  </td>
               </tr>

               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Принять поставщика</div>
                  </td>
                  <td>
                     <button class="talkbut">ОК</button>
                  </td>
               </tr>
            </table>
         </fieldset><fieldset className='fieldtd'><legend></legend>
               <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Наименование поставщика.  '>Название</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Свободные мощности (%)</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Сертификация ISO</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Вид транспорта</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Грузовая единица, л</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Качество сырья</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Условия поставки</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Начало цикла оплаты</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Период оплаты, дн</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>



                  <tr valign='top'>
                     <td>
                        <div className='separator'></div>
                     </td>
                     <td>
                        <div className='separator'></div>
                     </td>
                  </tr>

                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Принять поставщика</div>
                     </td>
                     <td>
                        <button class="talkbut">ОК</button>
                     </td>
                  </tr>
               </table>
            </fieldset><fieldset className='fieldtd'><legend></legend>
               <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Наименование поставщика.  '>Название</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Свободные мощности (%)</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Сертификация ISO</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Вид транспорта</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Грузовая единица, л</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Качество сырья</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Условия поставки</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Начало цикла оплаты</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Период оплаты, дн</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>



                  <tr valign='top'>
                     <td>
                        <div className='separator'></div>
                     </td>
                     <td>
                        <div className='separator'></div>
                     </td>
                  </tr>

                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Принять поставщика</div>
                     </td>
                     <td>
                        <button class="talkbut">ОК</button>
                     </td>
                  </tr>
               </table>
            </fieldset></>
      );
      setContent(tableContent);
    }
    else if (selectedTab === 'PET') {
      const tableContent = (
         <><fieldset className='fieldtd'><legend></legend>
            <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Наименование поставщика.  '>Название</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Свободные мощности (%)</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Сертификация ISO</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Вид транспорта</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Грузовая единица, л</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Качество сырья</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Условия поставки</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Начало цикла оплаты</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Период оплаты, дн</div>
                  </td>
                  <td>
                     <div className='contd'>value</div>
                  </td>
               </tr>



               <tr valign='top'>
                  <td>
                     <div className='separator'></div>
                  </td>
                  <td>
                     <div className='separator'></div>
                  </td>
               </tr>

               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Принять поставщика</div>
                  </td>
                  <td>
                     <button class="talkbut">ОК</button>
                  </td>
               </tr>
            </table>
         </fieldset><fieldset className='fieldtd'><legend></legend>
               <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Наименование поставщика.  '>Название</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Свободные мощности (%)</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Сертификация ISO</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Вид транспорта</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Грузовая единица, л</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Качество сырья</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Условия поставки</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Начало цикла оплаты</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Период оплаты, дн</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>



                  <tr valign='top'>
                     <td>
                        <div className='separator'></div>
                     </td>
                     <td>
                        <div className='separator'></div>
                     </td>
                  </tr>

                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Принять поставщика</div>
                     </td>
                     <td>
                        <button class="talkbut">ОК</button>
                     </td>
                  </tr>
               </table>
            </fieldset><fieldset className='fieldtd'><legend></legend>
               <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Наименование поставщика.  '>Название</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Свободные мощности (%)</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Сертификация ISO</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Вид транспорта</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Грузовая единица, л</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Качество сырья</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Условия поставки</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Начало цикла оплаты</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Период оплаты, дн</div>
                     </td>
                     <td>
                        <div className='contd'>value</div>
                     </td>
                  </tr>



                  <tr valign='top'>
                     <td>
                        <div className='separator'></div>
                     </td>
                     <td>
                        <div className='separator'></div>
                     </td>
                  </tr>

                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Принять поставщика</div>
                     </td>
                     <td>
                        <button class="talkbut">ОК</button>
                     </td>
                  </tr>
               </table>
            </fieldset></>
      );
      setContent(tableContent);
    }
    else if (selectedTab === 'Milk') {
      const tableContent = (
         <><fieldset className='fieldtd'><legend></legend>
            <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Наименование поставщика.  '>Название</div>
                  </td>
                  <td>
                     <div className='contd'>Предо</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                  </td>
                  <td>
                     <div className='contd'>Курская область (2500 км)</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                  </td>
                  <td>
                     <div className='contd'>5</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Свободные мощности (%)</div>
                  </td>
                  <td>
                     <div className='contd'>30</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Сертификация ISO</div>
                  </td>
                  <td>
                     <div className='contd'>Нет</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Вид транспорта</div>
                  </td>
                  <td>
                     <div className='contd'>Авто/ ЖД/ Авиа</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Грузовая единица</div>
                  </td>
                  <td>
                     <div className='contd'>Коробка/ Паллет/ Контейнер/ FTL</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                  </td>
                  <td>
                     <div className='contd'>От 70 до 100</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Качество сырья</div>
                  </td>
                  <td>
                     <div className='contd'>Высокое/ Среднее/Низкое</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Условия поставки</div>
                  </td>
                  <td>
                     <div className='contd'>CPT, FCA</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Начало цикла оплаты</div>
                  </td>
                  <td>
                     <div className='contd'>Заказ/ Отгрузка/ Получение/ Продажа</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Период оплаты, дн</div>
                  </td>
                  <td>
                     <div className='contd'>От 0 до 90</div>
                  </td>
               </tr>



               <tr valign='top'>
                  <td>
                     <div className='separator'></div>
                  </td>
                  <td>
                     <div className='separator'></div>
                  </td>
               </tr>

               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Принять поставщика</div>
                  </td>
                  <td>
                     <button class="talkbut">ОК</button>
                  </td>
               </tr>
            </table>
         </fieldset><fieldset className='fieldtd'><legend></legend>
               <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Наименование поставщика.  '>Название</div>
                     </td>
                     <td>
                        <div className='contd'>Месягутовский комбинат</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                     </td>
                     <td>
                        <div className='contd'>Республика Башкортостан (800км)</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                     </td>
                     <td>
                        <div className='contd'>3</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Свободные мощности (%)</div>
                     </td>
                     <td>
                        <div className='contd'>15</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Сертификация ISO</div>
                     </td>
                     <td>
                        <div className='contd'>Да</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Вид транспорта</div>
                     </td>
                     <td>
                        <div className='contd'>Авто/ ЖД/ Авиа</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Грузовая единица</div>
                     </td>
                     <td>
                        <div className='contd'>Коробка/ Паллет/ Контейнер/ FTL</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                     </td>
                     <td>
                        <div className='contd'>От 70 до 100</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Качество сырья</div>
                     </td>
                     <td>
                        <div className='contd'>Высокое/ Среднее/Низкое</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Условия поставки</div>
                     </td>
                     <td>
                        <div className='contd'>CPT, FCA</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Начало цикла оплаты</div>
                     </td>
                     <td>
                        <div className='contd'>Заказ/ Отгрузка/ Получение/ Продажа</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Период оплаты, дн</div>
                     </td>
                     <td>
                        <div className='contd'>От 0 до 90</div>
                     </td>
                  </tr>



                  <tr valign='top'>
                     <td>
                        <div className='separator'></div>
                     </td>
                     <td>
                        <div className='separator'></div>
                     </td>
                  </tr>

                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Принять поставщика</div>
                     </td>
                     <td>
                        <button class="talkbut">ОК</button>
                     </td>
                  </tr>
               </table>
            </fieldset><fieldset className='fieldtd'><legend></legend>
               <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Наименование поставщика.  '>Название</div>
                     </td>
                     <td>
                        <div className='contd'>Евромол</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                     </td>
                     <td>
                        <div className='contd'>Московская область (2500 км)</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                     </td>
                     <td>
                        <div className='contd'>4</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Свободные мощности (%)</div>
                     </td>
                     <td>
                        <div className='contd'>20</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Сертификация ISO</div>
                     </td>
                     <td>
                        <div className='contd'>Да</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Вид транспорта</div>
                     </td>
                     <td>
                        <div className='contd'>Авто/ ЖД/ Авиа</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Грузовая единица</div>
                     </td>
                     <td>
                        <div className='contd'>Коробка/ Паллет/ Контейнер/ FTL</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                     </td>
                     <td>
                        <div className='contd'>От 70 до 100</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Качество сырья</div>
                     </td>
                     <td>
                        <div className='contd'>Высокое/ Среднее/Низкое</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Условия поставки</div>
                     </td>
                     <td>
                        <div className='contd'>CPT, FCA</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Начало цикла оплаты</div>
                     </td>
                     <td>
                        <div className='contd'>Заказ/ Отгрузка/ Получение/ Продажа</div>
                     </td>
                  </tr>
                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Период оплаты, дн</div>
                     </td>
                     <td>
                        <div className='contd'>От 0 до 90</div>
                     </td>
                  </tr>



                  <tr valign='top'>
                     <td>
                        <div className='separator'></div>
                     </td>
                     <td>
                        <div className='separator'></div>
                     </td>
                  </tr>

                  <tr valign='top'>
                     <td>
                        <div className='contd' title=''>Принять поставщика</div>
                     </td>
                     <td>
                        <button class="talkbut">ОК</button>
                     </td>
                  </tr>
               </table>
            </fieldset><fieldset className='fieldtd'><legend></legend>
            <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Наименование поставщика.  '>Название</div>
                  </td>
                  <td>
                     <div className='contd'>Русская сырьевая компания</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                  </td>
                  <td>
                     <div className='contd'>Саратовская область (1800 км)</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                  </td>
                  <td>
                     <div className='contd'>7</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Свободные мощности (%)</div>
                  </td>
                  <td>
                     <div className='contd'>40</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Сертификация ISO</div>
                  </td>
                  <td>
                     <div className='contd'>Нет</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Вид транспорта</div>
                  </td>
                  <td>
                     <div className='contd'>Авто/ ЖД/ Авиа</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Грузовая единица</div>
                  </td>
                  <td>
                     <div className='contd'>Коробка/ Паллет/ Контейнер/ FTL</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                  </td>
                  <td>
                     <div className='contd'>От 70 до 100</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Качество сырья</div>
                  </td>
                  <td>
                     <div className='contd'>Высокое/ Среднее/Низкое</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Условия поставки</div>
                  </td>
                  <td>
                     <div className='contd'>CPT, FCA</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Начало цикла оплаты</div>
                  </td>
                  <td>
                     <div className='contd'>Заказ/ Отгрузка/ Получение/ Продажа</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Период оплаты, дн</div>
                  </td>
                  <td>
                     <div className='contd'>От 0 до 90</div>
                  </td>
               </tr>



               <tr valign='top'>
                  <td>
                     <div className='separator'></div>
                  </td>
                  <td>
                     <div className='separator'></div>
                  </td>
               </tr>

               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Принять поставщика</div>
                  </td>
                  <td>
                     <button class="talkbut">ОК</button>
                  </td>
               </tr>
            </table>
         </fieldset><fieldset className='fieldtd'><legend></legend>
            <table cellSpacing={0} cellPadding={0} colls={3} border={0}>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Наименование поставщика.  '>Название</div>
                  </td>
                  <td>
                     <div className='contd'>Новогрудские Дары</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Регион где находиться поставщик.  '>Регион расположения</div>
                  </td>
                  <td>
                     <div className='contd'>Беларусь (3000 км)</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title='Качество поставляемых материалов'>Срок отгрузки </div>
                  </td>
                  <td>
                     <div className='contd'>5</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Свободные мощности (%)</div>
                  </td>
                  <td>
                     <div className='contd'>50</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Сертификация ISO</div>
                  </td>
                  <td>
                     <div className='contd'>Да</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Вид транспорта</div>
                  </td>
                  <td>
                     <div className='contd'>Авто/ ЖД/ Авиа</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Грузовая единица</div>
                  </td>
                  <td>
                     <div className='contd'>Коробка/ Паллет/ Контейнер/ FTL</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Согласованная надежность доставки (%)</div>
                  </td>
                  <td>
                     <div className='contd'>От 70 до 100</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Качество сырья</div>
                  </td>
                  <td>
                     <div className='contd'>Высокое/ Среднее/Низкое</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Условия поставки</div>
                  </td>
                  <td>
                     <div className='contd'>CPT, FCA</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Начало цикла оплаты</div>
                  </td>
                  <td>
                     <div className='contd'>Заказ/ Отгрузка/ Получение/ Продажа</div>
                  </td>
               </tr>
               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Период оплаты, дн</div>
                  </td>
                  <td>
                     <div className='contd'>От 0 до 90</div>
                  </td>
               </tr>



               <tr valign='top'>
                  <td>
                     <div className='separator'></div>
                  </td>
                  <td>
                     <div className='separator'></div>
                  </td>
               </tr>

               <tr valign='top'>
                  <td>
                     <div className='contd' title=''>Принять поставщика</div>
                  </td>
                  <td>
                     <button class="talkbut">ОК</button>
                  </td>
               </tr>
            </table>
         </fieldset></>
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

       <div className='cont1'>

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
                       <option value="Milk">Молоко Сухое</option>
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
         {selectedTab && <div className='contentTabO'>{content}</div>}
       </div>
     </div>
     </div>
     </div>
   </>
 );
}