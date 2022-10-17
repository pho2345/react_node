import React from 'react';
import "./Home.css"
import WidgetLg from '../../components/widgetLg/widgetLg';
import WidgetSm from '../../components/widgetSm/widgetSm';
import Warpper from '../../Warpper/Warpper';
function Home(props){
    // const handleLogout = () => {
    //     props.history.push('/login');
    // }
    return(
            <div className='warpper'>
                    <Warpper/>
                <div className='homeWidget'>
                        <WidgetSm/>
                        <WidgetLg/>
                </div>
            </div>

    );
}
export default Home;