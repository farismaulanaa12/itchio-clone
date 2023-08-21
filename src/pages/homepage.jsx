import NavigationBar from '../components/navbar';
import SideBar from '../components/sidebar';
import Main from '../components/main';
import Footer from '../components/footer';

import { useState } from 'react';

function HomePage()
{
    const [togglePlay, setTogglePlay] = useState(false);

    return(
        <>
            <NavigationBar/>
            <div className="row">
                <div className="col-2" onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)} style={{backgroundColor: '#f4f4f4', overflowY: togglePlay ? "auto" : 'hidden', height: "100vh", position: "sticky", top: "2px", paddingLeft: '25px', width: '280px'}} id='sidebar'>
                    <div style={{width: '240px'}}>
                        <SideBar/>
                    </div>
                </div>
                <div className="col" id='main' style={{backgroundColor: 'white'}}>
                    <Main />
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default HomePage