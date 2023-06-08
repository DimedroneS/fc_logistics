import React, { Component,} from "react";
import { Link} from 'react-router-dom';




 export default class Test extends Component {



     render() {

    

         return (
             <div>
                
   {/* <Routes>
      <Route path="../add/snabzh/KPI" element={<Kpi/>}/>
       <Route path="/Test" element={<Test/>} /> 
    </Routes> */}



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
             {/* <Link to='../add/snabzh/KPI'></Link> */}
             <div class="tabs__links">
             <Link to='../add/snabzh/KPI'><button>Соглашение</button> </Link>
      <button>Рынок поставщиков</button>
      <button>KPI</button>
      <button>История решений</button>
      </div> 

             </div>

             </div>
             </div>
         )
     }
    }