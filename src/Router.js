import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import MainPanel from './add/MainPanel';
import Test from './Page/Test.js';
import Kpi from './add/snabzh/KPI';
import Shit from './add/shit.js';
import Soglash from './add/snabzh/Soglash';
import RinPostavok from './add/snabzh/RinPostavok';
import HistoruSnab from './add/snabzh/HistoruSnab';
import HelpPage from './add/Header_page/HelpPage.js';
import ReportFin from './Financ/ReportFin.js';


const Router = () => {
  return (
    <Routes>
      {/* тест */}
      {/* <Route exact path="/MainPanel" element={<MainPanel/>} default /> */}
      <Route path="/Test" element={<Test/>} />
      <Route path="/Shit" element={<Shit/>}/>
      {/* закупка */}
      <Route path="/Soglash" element={<Soglash/>}default/>
      <Route path="/RinPostavok" element={<RinPostavok/>}/>
      <Route path="/KPI" element={<Kpi/>}/>
      <Route path="/HistoruSnab" element={<HistoruSnab/>}/>
      {/* справка */}
      <Route path='/HelpPage' element={<HelpPage/>}/>
      {/* финансы */}
      <Route path='/ReportFin' element={<ReportFin/>}/>
      {/* продажи */}
      {/* склад */}
    </Routes>
  );
};

export default Router;