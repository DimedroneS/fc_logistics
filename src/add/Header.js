import React, {} from 'react';
import { Link } from 'react-router-dom';

export default function header() {
    return ( < header >
        <div >
        <span className = 'logo' > </span> 
        
         </div > <div className = 'picture' >
         <ul className='menu_lk'>
         <Link to='/Company'><li>Моя компания</li></Link>
         <Link to='/Inform'><li>Информация</li></Link>
         <Link to='/HelpPage'><li>Помощь</li></Link>
         <Link to='/Reitn'><li>Рейтинг</li></Link>
         <Link to='/Profile'><li>Профиль</li></Link>
        </ul>
        </div> </header >
    )
}