import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

export default function header() {
    return ( < header >
        <div >
        <span className = 'logo' > </span> 
        
         </div > <div className = 'picture' >
         <ul className='menu_lk'>
         <NavLink to='/Company'><li>Моя компания</li></NavLink>
         <NavLink to='/Inform'><li>Информация</li></NavLink>
         <NavLink to='/HelpPage'> <li>Помощь </li></NavLink>
         <NavLink to='/Reitn'> <li>Рейтинг</li></NavLink>
         <NavLink to='/Profile'><li>Профиль</li></NavLink>
        </ul>
        </div> </header >
    )
}