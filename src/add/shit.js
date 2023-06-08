import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Shit() {

  const [open, setRedact1] = useState(false);

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



    return (
      <>{/*<div>shit</div>*/}<div className="mainpanel">
        {/* Остальной код компонента */}
        <Button variant="contained" onClick={redactOpen1}>
          Показать всплывающее окно
        </Button>
        <Modal open={open} onClose={redactClose1}>
          <div className="modalYES">
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
      </div></>
    )
}

