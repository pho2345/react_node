import React from 'react';
import Topbar from '../components/Topbar/Topbar'
import Sidebar from '../components/Sidebar/Sidebar';
function Warpper(){
    return(
        <div>
        <Topbar/>
        <Sidebar/>
        </div>
    );
}
export default Warpper;