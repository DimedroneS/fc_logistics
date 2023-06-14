import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';


function Panel () {

  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (

    <div className="panel">
      <NavLink
        to='/Soglash'
        activeClassName="active-link"
        onClick={() => handleButtonClick('Закупки')}
        className={activeButton === 'Закупки' ? 'button active' : 'button'}
      >
        Закупки
      </NavLink>
      <NavLink
        to="/Komp"
        activeClassName="active-link"
        onClick={() => handleButtonClick('Склад')}
        className={activeButton === 'Склад' ? 'button active' : 'button'}
      >Склад</NavLink>
      <NavLink
        to="/vhod"
        activeClassName="active-link"
        onClick={() => handleButtonClick('Производственная линия')}
        className={activeButton === 'Производственная линия' ? 'button active' : 'button'}
      >Производство</NavLink>
      {/* <NavLink to='/MainPanel' activeClassName="active-link"><button className="button">Снабжение</button></NavLink>
      <NavLink to='/Test'  activeClassName="active-link"><button className="button">Операции</button></NavLink> */}
      
      <NavLink
        to="/Riteil"
        activeClassName="active-link"
        onClick={() => handleButtonClick('Продажи')}
        className={activeButton === 'Продажи' ? 'button active' : 'button'}
      >Продажи</NavLink>
      <NavLink
        to="/UpZapas"
        activeClassName="active-link"
        onClick={() => handleButtonClick('Управление')}
        className={activeButton === 'Управление' ? 'button active' : 'button'} 
      >Управление</NavLink>
      <NavLink
        to="/ReportFin"
        activeClassName="active-link"
        onClick={() => handleButtonClick('Финансы')}
        className={activeButton === 'Финансы' ? 'button active' : 'button'}
      >Финансы</NavLink>
      {/* <button className="button">Продажи</button>
      <button className="button">Управление</button>
      <button className="button">Финансы</button> */}
    </div>

  );
}

export default Panel;