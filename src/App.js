import Header from "./add/Header";
import Panel from './add/Panel';
import Topik from './add/Topik';
import Router from "./Router";
//import MainPanel from './add/MainPanel';
// import Test from "./Page/Test";


function App() {
    return ( <div className = 'base' >
        <Topik/>
        <Header/>
        <Panel/>
        <div className='router'>
        <Router/>
        </div>
        
        {/* <MainPanel/> */}
        </div>
        );
    }


    export default App;