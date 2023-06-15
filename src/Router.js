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
import Vhod from './Proizvod/vhod.js';
import Komp from './Sklad/komp.js';
import Riteil from './Prodazhi/Riteil.js';
import Company from './add/Header_page/Company.js'
import Inform from './add/Header_page/Inform.js'
import Reitn from './add/Header_page/Reitn.js';
import Profile from './add/Header_page/Profile.js';
import Produkt from './Sklad/produkt.js';
import UpZapas from './Uprav/UpZapas.js';
import Prognoz from './Prodazhi/Prognoz.js';
import Nomenkl from './Prodazhi/Nomenkl.js';
import UpProizv from './Uprav/UpProizv.js';
import UpTovar from './Uprav/UpTovar.js';
import Smesh from './Proizvod/Smesh.js';
import Rozliv from './Proizvod/Rozliv.js';



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
      {/* верхняя панель */}
      <Route path='/HelpPage' element={<HelpPage/>}/>
      <Route path='/Company' element={<Company/>}/>
      <Route path='/Inform' element={<Inform/>}/>
      <Route path='/Reitn' element={<Reitn/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      {/* финансы */}
      <Route path='/ReportFin' element={<ReportFin/>}/>
      {/* продажи */}
      <Route path='/Riteil' element={<Riteil/>}/>
      <Route path='/Prognoz' element={<Prognoz/>}/>
      <Route path='/Nomenkl' element={<Nomenkl/>}/>
      {/* склад */}
      <Route path='/komp' element={<Komp/>}/>
      <Route path='/produkt' element={<Produkt/>}/>
      {/* производство */}
      {/* <Route path='/vhod' element={<Vhod/>}/> */}
      <Route path='/Smesh' element={<Smesh/>}/>
      <Route path='/Rozliv' element={<Rozliv/>}/>
      {/* управление */}
      <Route path='/UpZapas' element={<UpZapas/>}/>
      <Route path='/UpProizv' element={<UpProizv/>}/>
      <Route path='/UpTovar' element={<UpTovar/>}/>
    </Routes>
  );
};

export default Router;