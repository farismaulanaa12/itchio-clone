import FooterMain from "../components/footer/footermain"
import NavigationBar from "../components/navbar"

function GameJams()
{
    return(
        <>
            <NavigationBar/>
            <MainContent/>
            <FooterMain/>  
        </>
    )
}

function MainContent()
{
    // const ele = document.getElementById('calender-scrolling');
    // ele.scrollTop = 100;
    // ele.scrollLeft = 150;

    // let pos = { top: 0, left: 0, x: 0, y: 0 };

    // const mouseDownHandler = function (e) {
    //     pos = {
    //         // The current scroll
    //         left: ele.scrollLeft,
    //         top: ele.scrollTop,
    //         // Get the current mouse position
    //         x: e.clientX,
    //         y: e.clientY,
    //     };

    //     document.addEventListener('mousemove', mouseMoveHandler);
    //     document.addEventListener('mouseup', mouseUpHandler);
    // };

    // const mouseMoveHandler = function (e) {
    //     // How far the mouse has been moved
    //     const dx = e.clientX - pos.x;
    //     const dy = e.clientY - pos.y;
    
    //     // Scroll the element
    //     ele.scrollTop = pos.top - dy;
    //     ele.scrollLeft = pos.left - dx;
    // };

    // const mouseUpHandler = function () {
    //     document.removeEventListener('mousemove', mouseMoveHandler);
    //     document.removeEventListener('mouseup', mouseUpHandler);
    
    //     ele.style.removeProperty('user-select');
    // };

    return(
        <div style={{backgroundColor: '#F4F4F4', paddingBottom: '40px'}}>
            <section style={{backgroundColor: "white", overflow: "hidden", display: "flex", alignItems: "center"}}>
                <div>
                    <h2 style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontSize: 26, fontWeight: 900, color:'#434343', margin: '20px 40px 0 40px' }}>
                        Game Jams on itch.io
                    </h2>
                    <p style={{lineHeight: 1.5, fontSize: 16, margin: '24px 40px', maxWidth: '600px'}}>
                        itch.io is a place for hosting and participating in game jams online. Anyone can instantly create and host a jam. <strong>289,933 games</strong> have been created for jams hosted on itch.io.
                    </p>
                </div>
                <div style={{flex: 'none', marginRight: '20px', textAlign: "center"}}>
                    <a href="" style={{fontSize: 18, letterSpacing: '0.025em', lineHeight: '38px', fontWeight: 900, height: 40, padding: '0 20px', display: "inline-block", textDecorationLine: "none", backgroundColor: '#FF2449', color: "white", textShadow: '0 1px 0 #c3223e', borderRadius: '3px', textAlign: "center", border: '1px solid', alignItems: "center"}}>
                        Host a jam
                    </a>
                </div>
            </section>
            <section style={{paddingBottom: '30px', backgroundColor: "white"}}>
                <h3 style={{padding: '0 40px 20px 40px', margin: 0, fontSize: 18, display: "flex", alignItems: "center", fontWeight: 900, color: '#434343'}}>
                    <i class="bi bi-star" style={{marginRight: '10px', opacity: 0.8, flex: 'none'}}></i>
                    Featured Jams
                </h3>
                <div style={{marginLeft: '0px', marginRight: '0px', paddingLeft: '40px', paddingRight: '0px', whiteSpace: "nowrap", overflowX: "auto", display: 'flex', alignItems: "flex-start"}}>
                    <JamsCardList 
                    data={[
                        {
                            image: 'https://img.itch.zone/aW1nLzEyNjg3NzE3LnBuZw==/140x111%23/7hYuxn.png',
                            title: 'Metroidvania Month 21',
                            desc: 'A month-long metroidvania game jam!',
                            host: 'Falcon Nova',
                            day: '28 days',
                            width: '8%',
                            displaySub: 'none',
                            member: '741',
                            display: 'flex'
                        }
                    ]}/>
                    <JamsCardPreList 
                    data={[
                        {
                            image: 'https://img.itch.zone/aW1nLzExMDYyODU0LnBuZw==/140x111%23/OuaoL6.png',
                            title: 'Game Off 2023',
                            desc: 'GitHub Game Off runs for the entire month of November',
                            host: 'GitHub',
                            host2: 'Lee Reilly',
                            startDate: '2 months',
                            lastDay: '30 days',
                            member: '3,001',
                        }
                    ]}/>
                    <JamsCardPreList 
                    data={[
                        {
                            image: 'https://img.itch.zone/aW1nLzEzMDU5NTEzLmdpZg==/140x111%23m/vbgARK.gif',
                            title: 'Spooktober 5th Annual Visual Novel Jam',
                            desc: 'The Halloween Themed Visual Novel Jam Contest!',
                            host: 'Remort Studios',
                            host2: 'Crystal Game Works',
                            startDate: '13 days',
                            lastDay: '30 days',
                            member: '425',
                        }
                    ]}/>
                    <JamsCardList 
                    data={[
                        {
                            image: 'https://img.itch.zone/aW1nLzEyMTg2NTExLnBuZw==/140x111%23/qDWfI%2B.png',
                            title: 'Summer Slow Jams 2023: Crafting',
                            desc: 'Make a craftting game in just over two weeks!',
                            host: 'Portland Indie Game Squad',
                            day: '10 days',
                            width: '37%',
                            member: '656',
                            displaySub: '',
                            memberSub: '13',
                            display: 'none'
                        }
                    ]}/>
                    <JamsCardPreList 
                    data={[
                        {
                            image: 'https://img.itch.zone/aW1nLzEyOTkxNTcwLnBuZw==/140x111%23/RRRGdu.png',
                            title: 'GBJam11',
                            desc: 'Gameboy Style Games!',
                            host: 'Polyducks',
                            startDate: '27 days',
                            lastDay: '10 days',
                            member: '1,496',
                        }
                    ]}/>
                    <JamsCardPreList 
                    data={[
                        {
                            image: 'https://img.itch.zone/aW1nLzEwOTg1Mzc2LnBuZw==/140x111%23/h5gTeM.png',
                            title: '💀 SCREAM JAM 2023 💀',
                            desc: 'THE HORRIFICALLY WONDERFUL HORROR JAM RETURNS',
                            host: 'Kitsch Digital',
                            host2: 'SCREAM CATALOGUE',
                            startDate: 'a month',
                            lastDay: '7 days',
                            member: '1,349 ',
                        }
                    ]}/>
                    <JamsCardPreList 
                    data={[
                        {
                            image: 'https://img.itch.zone/aW1nLzEyMTM5NjQ0LnBuZw==/140x111%23/CbKfG4.png',
                            title: 'Gamedev.js Jam 2024',
                            desc: `Let's build Web games together!`,
                            host: 'end3r',
                            host2: 'Enclave Games',
                            startDate: '7 months',
                            lastDay: '13 days',
                            member: '128',
                        }
                    ]}/>
                    <JamsCardPreList 
                    data={[
                        {
                            image: 'https://img.itch.zone/aW1nLzEyNjU4NzkxLmpwZw==/140x111%23/aV8MhK.jpg',
                            title: 'FMV Jam NYC',
                            desc: 'Full Motion Video themed Game Jam in NYC 2023!',
                            host: 'ahintoflime',
                            host2: 'Escape Character',
                            startDate: '21 days',
                            lastDay: '3 days',
                            member: '28',
                        }
                    ]}/>
                </div>
            </section>
            <section className="d-flex align-items-center" style={{backgroundColor: 'white', padding: '0 40px 20px 40px'}}>
                <h3 className="d-flex align-items-center" style={{margin: '0 20px 0 0', fontSize: 18, fontWeight: 900, color: '#434343'}}>
                    <i class="bi bi-grid" style={{marginRight: '10px', opacity: 0.8, flex: 'none'}}></i>Browse Jams
                </h3>
                <ul className="d-flex align-items-center" style={{flexWrap: "wrap", listStyle: "none", padding: 0, margin: '0'}}>
                    <li style={{marginTop: '5px', marginRight: '10px'}}>
                        <a href="" style={{backgroundColor: "transparent", border: '1px solid rgba(255,36,73,0.4)', color: '#FF2449', textShadow: "none", userSelect: "none", boxSizing: "border-box", display: "inline-block", textDecorationLine: "none", padding: '0 10px', fontSize: 14, borderRadius: '3px', boxShadow: 'inset 0 0 1px rgba(255,255,255,0.21)', textAlign: "center", lineHeight: '33px', fontWeight: "bold", height: '35px'}}>Upcoming This Month</a>
                    </li>
                    <li style={{marginTop: '5px', marginRight: '10px'}}>
                        <a href="" style={{backgroundColor: "transparent", border: '1px solid rgba(255,36,73,0.4)', color: '#FF2449', textShadow: "none", userSelect: "none", boxSizing: "border-box", display: "inline-block", textDecorationLine: "none", padding: '0 10px', fontSize: 14, borderRadius: '3px', boxShadow: 'inset 0 0 1px rgba(255,255,255,0.21)', textAlign: "center", lineHeight: '33px', fontWeight: "bold", height: '35px'}}>Featured Jams</a>
                    </li>
                    <li style={{marginTop: '5px', marginRight: '10px'}}>
                        <a href="" style={{backgroundColor: "transparent", border: '1px solid rgba(255,36,73,0.4)', color: '#FF2449', textShadow: "none", userSelect: "none", boxSizing: "border-box", display: "inline-block", textDecorationLine: "none", padding: '0 10px', fontSize: 14, borderRadius: '3px', boxShadow: 'inset 0 0 1px rgba(255,255,255,0.21)', textAlign: "center", lineHeight: '33px', fontWeight: "bold", height: '35px'}}>Top Past Jams</a>
                    </li>
                    <li style={{marginTop: '5px', marginRight: '10px'}}>
                        <a href="" style={{backgroundColor: "transparent", border: '1px solid rgba(255,36,73,0.4)', color: '#FF2449', textShadow: "none", userSelect: "none", boxSizing: "border-box", display: "inline-block", textDecorationLine: "none", padding: '0 10px', fontSize: 14, borderRadius: '3px', boxShadow: 'inset 0 0 1px rgba(255,255,255,0.21)', textAlign: "center", lineHeight: '33px', fontWeight: "bold", height: '35px'}}>In Progress</a>
                    </li>
                </ul>   
            </section>
            <section>
                <h3 className="d-flex align-items-center" style={{margin: '0', padding: '0 40px 20px 40px', fontSize: 18, fontWeight: 900, color: '#434343', backgroundColor: "white"}}>
                    <i class="bi bi-calendar4" style={{marginRight: '10px', opacity: 0.8, flex: 'none'}}></i> Jam Calendar
                </h3>
                <div>
                    <section>
                        <div className="d-flex align-items-center" style={{position: "relative", padding: '0 40px 10px 40px', backgroundColor: "white", zIndex: 10}}>
                            <div style={{fontWeight: "bold", fontSize: 14, marginRight: '10px', color: '#606060'}}>Filter</div>
                            {/* <div className="d-inline-block" style={{marginRight: '5px', boxSizing: "border-box", minWidth: '30px', position: "relative", border: '2px solid', borderColor: '#cdcdcd', backgroundColor: "white", padding: '4px 8px 4px 10px', borderRadius: '4px', height: '35px'}}>

                            </div> */}
                            <div className="dropdown d-inline-block" style={{marginRight: '5px'}}>
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: "transparent", border: '2px solid', borderColor: '#cdcdcd', borderRadius: '4px', height: '35px', padding: '4px 12px 4px 10px', color: '#434343', fontSize: 14}}>
                                    Participants
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Any number</a></li>
                                    <li><a className="dropdown-item" href="#">More than 10</a></li>
                                    <li><a className="dropdown-item" href="#">More than 100</a></li>
                                </ul>
                            </div>
                            <div className="dropdown d-inline-block" style={{marginRight: '5px'}}>
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: "transparent", border: '2px solid', borderColor: '#cdcdcd', borderRadius: '4px', height: '35px', padding: '4px 12px 4px 10px', color: '#434343', fontSize: 14}}>
                                    Duration
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Any duration</a></li>
                                    <li><a className="dropdown-item" href="#">Less than 3 days</a></li>
                                    <li><a className="dropdown-item" href="#">Less than 7 days</a></li>
                                    <li><a className="dropdown-item" href="#">Less than 15 days</a></li>
                                    <li><a className="dropdown-item" href="#">Greater than 3 days</a></li>
                                </ul>
                            </div>
                            <label htmlFor="" style={{marginRight: '5px'}}>
                                <input type="checkbox" style={{margin: '3px 3px 3px 4px'}}/>
                                <span style={{fontSize: 13}}>Featured</span>
                            </label>
                        </div>
                        <section id="jam-calender">
                            <div id="calender-scrolling" >
                                <div id="calender-rows">
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                    <div id="calender-row"> 
                                        <GetJadwalJams/>
                                    </div>
                                </div>
                                <div id="day-markers">
                                    <GetDayMarker/>
                                </div>
                                <div style={{userSelect: "none", height: '20px', backgroundColor: "black", position: "relative", zIndex: 5}}>
                                    <GetMonthMarker/>
                                </div>
                                <div style={{width: '3900px', boxSizing: "border-box", position: "absolute", top: 0, bottom: 0, left: 0, backgroundColor: '#F4F4F4', borderRight: '5px solid', borderColor: '#dadada'}}>

                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
            <section style={{marginTop: '20px'}}>
                <h3 className="d-flex align-items-center" style={{padding: '0 40px', margin: '0', fontSize: 18, fontWeight: 900, color: '#434343'}}>
                    Don't see something you like?
                </h3>
                <p style={{lineHeight: 1.5, fontSize: 16, margin: '24px 40px', maxWidth: '600px'}}>
                    <a href="" style={{fontSize: 14, lineHeight: '33px', fontWeight: "bold", height: '35px', padding: '0 10px', display: "inline-block", textDecorationLine: "none", backgroundColor: '#FF2449', color: "white", textShadow: '0 1px 0 #c3223e', borderRadius: '3px', textAlign: "center", border: '1px solid', alignItems: "center"}}>
                        Host Your Own Jam
                    </a> or <a href="" style={{fontSize: 14, lineHeight: '33px', fontWeight: "bold", height: '35px', padding: '0 10px', display: "inline-block", textDecorationLine: "none", backgroundColor: '#FF2449', color: "white", textShadow: '0 1px 0 #c3223e', borderRadius: '3px', textAlign: "center", border: '1px solid', alignItems: "center"}}>
                        Explore All Jams
                    </a>
                </p>
            </section>
        </div>
    )
}

function GetJadwalJams()
{
    return(
        <>
            <JadwalJams
            data={[
                {
                    left: '205px',
                    width: '265px',
                    txtShadow: 'rgb(59, 186, 120) 1px 1px 1px',
                    jamName: 'Kenney Jam 2023',
                    joined: '(3,167 joined)',
                    backgroundColor: '#7cd07f',
                },
                {
                    left: '610px',
                    width: '1799px',
                    txtShadow: 'rgb(59, 186, 120) 1px 1px 1px',
                    jamName: 'My First Game Jam: Summer 2023',
                    joined: '(3,247 joined)',
                    backgroundColor: 'rgb(92, 204, 146)',
                },
                {
                    left: '2560px',
                    width: '840px',
                    txtShadow: 'rgb(95, 59, 186) 1px 1px 1px',
                    jamName: 'HaxeJam 2023: Summer Jam',
                    joined: '(69 joined)',
                    backgroundColor: 'rgb(124, 92, 204)',
                },
                {
                    left: '3480px',
                    width: '120px',
                    jamName: 'Brackeys Game Jam 2023.2',
                    joined: '(4,510 joined)',
                    backgroundColor: '#898989',
                },
                {
                    left: '3685px',
                    width: '840px',
                    txtShadow: 'rgb(186, 59, 105) 1px 1px 1px',
                    jamName: 'Brackeys Game Jam 2023.2',
                    joined: '(4,510 joined)',
                    backgroundColor: 'rgb(204, 92, 133)',
                },
                {
                    left: '4650px',
                    width: '120px',
                    jamName: 'NSJS | Summer 2023 Jam #15',
                    joined: '(5 joined)',
                    backgroundColor: '#898989',
                },
                {
                    left: '4825px',
                    width: '239px',
                    jamName: 'Pink platformer jam #2',
                    joined: '(0 joined)',
                    backgroundColor: '#898989',
                },
                {
                    left: '5095px',
                    width: '3719px',
                    txtShadow: 'rgb(186, 184, 59) 1px 1px 1px',
                    jamName: 'Spooktober 5th Annual Visual Novel Jam',
                    joined: '(471 joined)',
                    backgroundColor: 'rgb(204, 202, 92)',
                },
                {
                    left: '9205px',
                    width: '405px',
                    jamName: 'ZandtJam #5',
                    joined: '(7 joined)',
                    backgroundColor: '#898989',
                },
                {
                    left: '10125px',
                    width: '261px',
                    jamName: 'AdaBrain GameJams 2nd Gears!: Nights Before Halloween',
                    joined: '(5 joined)',
                    backgroundColor: '#898989',
                },
                {
                    left: '9205px',
                    width: '405px',
                    jamName: 'ZandtJam #5',
                    joined: '(7 joined)',
                    backgroundColor: '#898989',
                },
                {
                    left: '10635px',
                    width: '405px',
                    txtShadow: 'rgb(59, 99, 186) 1px 1px 1px',
                    jamName: '💀 SCREAM JAM 2023 💀',
                    joined: '(1,390 joined)',
                    backgroundColor: 'rgb(92, 127, 204)',
                },
            ]}/>
        </>
    )
}

function JadwalJams(props)
{
    return(
        <>
            {
                props.data?.map((item, key) => {
                    return(
                        <JadwalJamList key={key} item={item}/>
                    )
                })  
            }
        </>
    )
}

function JadwalJamList(props)
{
    return(
        <>
            <div id="jam-jadwal" style={{backgroundColor: `${props.item.backgroundColor}`, left: `${props.item.left}`, width: `${props.item.width}` , textShadow: `${props.item.txtShadow}`}}>
                <span id="sticky-label">
                    <a href="" style={{color: "inherit", textDecorationLine: "none"}}>{props.item.jamName}</a>
                    <span style={{fontSize: 14, opacity: 0.85, marginLeft: '5px', fontWeight: "normal"}}>{props.item.joined}</span>
                </span>
            </div>
        </>
    )   
}

function GetMonthMarker()
{
    return(
        <>
            <MonthMarker
            data={[
                {
                    borderLeft: 0,
                    left: 0,
                    width: '1560px',
                    month: 'July',
                },
                {
                    borderLeft: '1px solid',
                    left: '1440px',
                    width: '3720px',
                    month: 'August',
                },
                {
                    borderLeft: '1px solid',
                    left: '5160px',
                    width: '3600px',
                    month: 'September',
                },
                {
                    borderLeft: '1px solid',
                    left: '8760px',
                    width: '2280px',
                    month: 'October',
                },
            ]}/>
        </>
    )
}

function MonthMarker(props)
{
    return(
        <>
            {
                props.data?.map((item, key) => {
                    return(
                        <MonthMarkerList key={key} item={item}/>
                    )
                })  
            }
        </>
    )
}

function MonthMarkerList(props)
{
    return(
        <>
            <div id="month-marker" style={{borderLeft: `${props.item.borderLeft}`, left: `${props.item.left}`, width: `${props.item.width}`, borderColor: '#dadada'}}>
                <span className="d-inline-block" style={{position: "sticky", left: 0, padding: '0 20px', boxSizing: "border-box", maxWidth: '100%', overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>{props.item.month}</span>
            </div>
        </>
    )   
}

function GetDayMarker()
{
    return(
        <>
            <DayMarker
            data={[
                {
                    left: '0',
                    date: '20th',
                    day: 'THU',
                },
                {
                    left: '120px',
                    date: '21st',
                    day: 'FRI',
                },
                {
                    left: '240px',
                    date: '22nd',
                    day: 'SAT',
                },
                {
                    left: '360px',
                    date: '23rd',
                    day: 'SUN',
                },
                {
                    left: '480px',
                    date: '24th',
                    day: 'MON',
                },
                {
                    left: '600px',
                    date: '25th',
                    day: 'TUE',
                },
                {
                    left: '720px',
                    date: '26th',
                    day: 'WED',
                },
                {
                    left: '840px',
                    date: '27th',
                    day: 'THU',
                },
                {
                    left: '960px',
                    date: '28th',
                    day: 'FRI',
                },
                {
                    left: '1080px',
                    date: '29th',
                    day: 'SAT',
                },
                {
                    left: '1200px',
                    date: '30th',
                    day: 'SUN',
                },
                {
                    left: '1320px',
                    date: '31th',
                    day: 'MON',
                },
                {
                    left: '1440px',
                    date: '1st',
                    day: 'TUE',
                },
                {
                    left: '1560px',
                    date: '2nd',
                    day: 'WED',
                },
                {
                    left: '1680px',
                    date: '3nd',
                    day: 'THU',
                },
                {
                    left: '1800px',
                    date: '4th',
                    day: 'FRI',
                },
                {
                    left: '1920px',
                    date: '5th',
                    day: 'SAT',
                },
                {
                    left: '2040px',
                    date: '6th',
                    day: 'SUN',
                },
                {
                    left: '2160px',
                    date: '7th',
                    day: 'MON',
                },
                {
                    left: '2280px',
                    date: '8th',
                    day: 'TUE',
                },
                {
                    left: '2400px',
                    date: '9th',
                    day: 'WED',
                },
                {
                    left: '2520px',
                    date: '10th',
                    day: 'THU',
                },
                {
                    left: '2640px',
                    date: '11th',
                    day: 'FRI',
                },
                {
                    left: '2760px',
                    date: '12th',
                    day: 'SAT',
                },
                {
                    left: '2880px',
                    date: '13th',
                    day: 'SUN',
                },
                {
                    left: '3000px',
                    date: '14th',
                    day: 'MON',
                },
                {
                    left: '3120px',
                    date: '15th',
                    day: 'TUE',
                },
                {
                    left: '3240px',
                    date: '16th',
                    day: 'WED',
                },
                {
                    left: '3360px',
                    date: '17th',
                    day: 'THU',
                },
                {
                    left: '3480px',
                    date: '18th',
                    day: 'FRI',
                },
                {
                    left: '3600px',
                    date: '19th',
                    day: 'SAT',
                },
                {
                    left: '3720px',
                    date: '20th',
                    day: 'SUN',
                },
                {
                    left: '3840px',
                    date: '21st',
                    day: 'MON',
                },
                {
                    left: '3960px',
                    date: '22nd',
                    day: 'TUE',
                },
                {
                    left: '4080px',
                    date: '23rd',
                    day: 'WED',
                },
                {
                    left: '4200px',
                    date: '24th',
                    day: 'THU',
                },
                {
                    left: '4320px',
                    date: '25th',
                    day: 'FRI',
                },
                {
                    left: '4440px',
                    date: '26th',
                    day: 'SAT',
                },
                {
                    left: '4560px',
                    date: '27th',
                    day: 'SUN',
                },
                {
                    left: '4680px',
                    date: '28th',
                    day: 'MON',
                },
                {
                    left: '4800px',
                    date: '29th',
                    day: 'TUE',
                },
                {
                    left: '4920px',
                    date: '30th',
                    day: 'WED',
                },
                {
                    left: '5040px',
                    date: '31th',
                    day: 'THU',
                },
                {
                    left: '5160px',
                    date: '1st',
                    day: 'FRI',
                },
                {
                    left: '5280px',
                    date: '2nd',
                    day: 'SAT',
                },
                {
                    left: '5400px',
                    date: '3nd',
                    day: 'SUN',
                },
                {
                    left: '5520px',
                    date: '4th',
                    day: 'MON',
                },
                {
                    left: '5640px',
                    date: '5th',
                    day: 'TUE',
                },
                {
                    left: '5760px',
                    date: '6th',
                    day: 'WED',
                },
                {
                    left: '5880px',
                    date: '7th',
                    day: 'THU',
                },
                {
                    left: '6000px',
                    date: '8th',
                    day: 'FRI',
                },
                {
                    left: '6120px',
                    date: '9th',
                    day: 'SAT',
                },
                {
                    left: '6240px',
                    date: '10th',
                    day: 'SUN',
                },
                {
                    left: '6360px',
                    date: '11th',
                    day: 'MON',
                },
                {
                    left: '6480px',
                    date: '12th',
                    day: 'TUE',
                },
                {
                    left: '6600px',
                    date: '13th',
                    day: 'WED',
                },
                {
                    left: '6720px',
                    date: '14th',
                    day: 'THU',
                },
                {
                    left: '6840px',
                    date: '15th',
                    day: 'FRI',
                },
                {
                    left: '6960px',
                    date: '16th',
                    day: 'SAT',
                },
                {
                    left: '7080px',
                    date: '17th',
                    day: 'SUN',
                },
                {
                    left: '7200px',
                    date: '18th',
                    day: 'MON',
                },
                {
                    left: '7320px',
                    date: '19th',
                    day: 'TUE',
                },
                {
                    left: '7440px',
                    date: '20th',
                    day: 'WED',
                },
                {
                    left: '7560px',
                    date: '21st',
                    day: 'THU',
                },
                {
                    left: '7680px',
                    date: '22nd',
                    day: 'FRI',
                },
                {
                    left: '7800px',
                    date: '23rd',
                    day: 'SAT',
                },
                {
                    left: '7920px',
                    date: '24th',
                    day: 'SUN',
                },
                {
                    left: '8040px',
                    date: '25th',
                    day: 'MON',
                },
                {
                    left: '8160px',
                    date: '26th',
                    day: 'TUE',
                },
                {
                    left: '8280px',
                    date: '27th',
                    day: 'WED',
                },
                {
                    left: '8400px',
                    date: '28th',
                    day: 'THU',
                },
                {
                    left: '8520px',
                    date: '29th',
                    day: 'FRI',
                },
                {
                    left: '8640px',
                    date: '30th',
                    day: 'SAT',
                },
                {
                    left: '8760px',
                    date: '1st',
                    day: 'SUN',
                },
                {
                    left: '8880px',
                    date: '2nd',
                    day: 'MON',
                },
                {
                    left: '9000px',
                    date: '3nd',
                    day: 'TUE',
                },
                {
                    left: '9120px',
                    date: '4th',
                    day: 'WED',
                },
                {
                    left: '9240px',
                    date: '5th',
                    day: 'THU',
                },
                {
                    left: '9360px',
                    date: '6th',
                    day: 'FRI',
                },
                {
                    left: '9480px',
                    date: '7th',
                    day: 'SAT',
                },
                {
                    left: '9600px',
                    date: '8th',
                    day: 'SUN',
                },
                {
                    left: '9720px',
                    date: '9th',
                    day: 'MON',
                },
                {
                    left: '9840px',
                    date: '10th',
                    day: 'TUE',
                },
                {
                    left: '9960px',
                    date: '11th',
                    day: 'WED',
                },
                {
                    left: '10080px',
                    date: '12th',
                    day: 'THU',
                },
                {
                    left: '10200px',
                    date: '13th',
                    day: 'FRI',
                },
                {
                    left: '10320px',
                    date: '14th',
                    day: 'SAT',
                },
                {
                    left: '10440px',
                    date: '15th',
                    day: 'SUN',
                },
                {
                    left: '10560px',
                    date: '16th',
                    day: 'MON',
                },
                {
                    left: '10680px',
                    date: '17th',
                    day: 'TUE',
                },
                {
                    left: '10800px',
                    date: '18th',
                    day: 'WED',
                },
                {
                    left: '10920px',
                    date: '19th',
                    day: 'THU',
                }
            ]}/>
        </>
    )
}

function DayMarker(props)
{
    return(
        <>
            {
                props.data?.map((item, key) => {
                    return(
                        <DayMarkerList key={key} item={item}/>
                    )
                })  
            }
        </>
    )
}

function DayMarkerList(props)
{
    return(
        <>
            <div id="day-marker" style={{left: `${props.item.left}`}}>
                    <div id="day-ordinal">{props.item.date}</div>
                <div id="day-name">{props.item.day}</div>
            </div>
        </>
    )
}

function JamsCardList(props)
{
    return(
        <>
            {
                props.data?.map((item, key) => {
                    return(
                        <JamsCard key={key} item={item}/>
                    )
                })  
            }
        </>
    )
}
function JamsCardPreList(props)
{
    return(
        <>
            {
                props.data?.map((item, key) => {
                    return(
                        <JamsCardPre key={key} item={item}/>
                    )
                })  
            }
        </>
    )
}

function JamsCardPre(props)
{
    return (
        <>
            <div id="jam" style={{marginRight: '15px', marginBottom: '15px', width: '330px', maxWidth:'75vw', flex: 'none', whiteSpace: "normal", fontSize: 14, verticalAlign: top, backgroundColor: "white", padding: '10px 15px', border: '1px solid', borderColor: '#e7e7e7', borderRadius: '3px'}}>
                <div className="d-flex align-items-center" style={{gap: 15, marginBottom: '15px'}}>
                    <div id="jam-cover" style={{backgroundImage: `url(${props.item.image})`}}>
                        <div>
                            <a href="" style={{position: "absolute", display: "block", top: 0, left: 0, width: '100%', height: '100%'}}></a>
                        </div>
                    </div>
                    <div style={{flex: 1, minWidth: 0}}>
                        <h3 style={{margin: 0, fontSize: 18, fontWeight: 900}}>
                            <div>
                                <a href="" style={{color: '#da2c49', textDecorationLine: "none"}}>{props.item.title}</a>
                                <p style={{color: '#606060', fontSize: 13, margin: '3px 0 0 0', lineHeight: 1.4, maxWidth: '600px', fontWeight: "normal"}}>{props.item.desc}</p>
                            </div>
                        </h3>
                    </div>
                </div>
                <div style={{color: '#606060', marginTop: '0px', marginBottom: '10px'}}>
                    Hosted by <a href="" style={{color: "inherit"}}>{props.item.host}</a>, <a href="" style={{color: "inherit"}}>{props.item.host2}</a>
                </div>
                <div style={{marginTop: '2px'}}>
                    <strong>Starts in <span>{props.item.startDate}</span></strong> · Lasts <span>{props.item.lastDay}</span>
                </div>
                <div className="d-flex" style={{margin: '3px 0', justifyContent: "space-between", gap: 10}}>
                    <div style={{textDecorationLine: "none", fontWeight: "bold", color: '#858585'}}>
                        <span style={{fontSize: 18, color: '#434343'}}>{props.item.member}</span> joined
                    </div>
                </div>
                <div className="d-flex align-items-center" style={{marginTop: '', color: '#434343', gap: 3}}>
                    <i class="bi bi-award" style={{fontSize: 20}}></i>
                    <strong style={{}}>Ranked</strong>
                </div>
            </div>
        </>
    )
}

function JamsCard(props)
{
    return(
        <>
            <div style={{marginRight: '15px', marginBottom: '15px', width: '330px', maxWidth:'75vw', flex: 'none', whiteSpace: "normal", fontSize: 14, verticalAlign: top, backgroundColor: "white", padding: '10px 15px', border: '1px solid', borderColor: '#e7e7e7', borderRadius: '3px'}}>
                <div className="d-flex align-items-center" style={{gap: 15, marginBottom: '15px'}}>
                    <div id="jam-cover" style={{backgroundImage: `url(${props.item.image})`}}>
                        <div>
                            <a href="" style={{position: "absolute", display: "block", top: 0, left: 0, width: '100%', height: '100%'}}></a>
                        </div>
                    </div>
                    <div style={{flex: 1, minWidth: 0}}>
                        <h3 style={{margin: 0, fontSize: 18, fontWeight: 900}}>
                            <div>
                                <a href="" style={{color: '#da2c49', textDecorationLine: "none"}}>{props.item.title}</a>
                                <p style={{color: '#606060', fontSize: 13, margin: '3px 0 0 0', lineHeight: 1.4, maxWidth: '600px', fontWeight: "normal"}}>{props.item.desc}</p>
                            </div>
                        </h3>
                    </div>
                </div>
                <div style={{color: '#606060', marginTop: '0px', marginBottom: '10px'}}>
                    Hosted by <a href="" style={{color: "inherit"}}>{props.item.host}</a>
                </div>
                <div style={{marginTop: '2px'}}>
                    Submission closes in <span>{props.item.day}</span>
                </div>
                <div style={{margin: '7px 0', height: '8px', backgroundColor: '#F4F4F4', borderRadius: '8px', overflow: "hidden"}}>
                    <div style={{width: `${props.item.width}`, height: '100%', minWidth: '1%', backgroundColor: '#FF2449', borderRadius: '0 8px 8px 0'}}>
                    </div>
                </div>
                <div className="d-flex" style={{margin: '0', justifyContent: "space-between", gap: 10}}>
                    <div style={{textDecorationLine: "none", fontWeight: "bold", color: '#858585'}}>
                        <span style={{fontSize: 18, color: '#434343'}}>{props.item.member}</span> joined
                    </div>
                    <a href="" style={{textDecorationLine: "none", fontWeight: "bold", color: '#858585', display: `${props.item.displaySub}`}}>
                        <span style={{fontSize: 18, color: '#434343'}}>{props.item.memberSub}</span> submissions
                    </a>
                </div>
                <div className="align-items-center" style={{marginTop: '', color: '#434343', gap: 3, display: `${props.item.display}`}}>
                    <i class="bi bi-award" style={{fontSize: 20}}></i>
                    <strong style={{}}>Ranked</strong>
                </div>
            </div>
        </>
    )
}

export default GameJams