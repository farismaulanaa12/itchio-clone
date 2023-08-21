import { useState } from "react";
import FooterMain from "../components/footer/footermain"
import NavigationBar from "../components/navbar"
import SideBarBrowseGames from "../components/sidebargames";

function BrowseGames() {
  return (
    <>
      <NavigationBar/>
      <div className="row">
          <div className="" style={{backgroundColor: '#f4f4f4', top: "2px", width: '280px'}} id='sidebar'>
              <SideBarBrowseGames/>
          </div>
          <div className="col" id='main'>
              <MainContent/>
              <FooterMain/>
          </div>
      </div>
    </>
  );
}

function MainContent()
{ 
  return(
    <div style={{backgroundColor: "white"}}>
      <div style={{position: "relative"}}>
        <h2 style={{fontSize: 24, margin: '0 20px 20px 20px', paddingTop: '16px', lineHeight: 1.8, color: '#434343', fontWeight: 900}}>
          <span>Top</span>
          <div className="btn-group" style={{lineHeight: 1.2, display: "inline-block"}}>
              <button style={{fontSize: 24, color: '#434343', fontWeight: 900, padding: '2px 15px 2px 15px', margin: '0px 8px', border: '2px solid', borderColor: '#dadada', borderRadius: '4px'}} class="btn btn-secondary-outline btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Games
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Games</a></li>
                <li><a className="dropdown-item" href="#">Tools</a></li>
                <li><a className="dropdown-item" href="#">Games assets</a></li>
                <li><a className="dropdown-item" href="#">Comics</a></li>
                <li><a className="dropdown-item" href="#">Books</a></li>
                <li><a className="dropdown-item" href="#">Physical games</a></li>
                <li><a className="dropdown-item" href="#">Album & soundtracks</a></li>
                <li><a className="dropdown-item" href="#">Game mods</a></li>
                <li><a className="dropdown-item" href="#">Everything else</a></li>
              </ul>
          </div>
          <span style={{color: '#858585', fontWeight: "normal"}}>(804,251 results)</span>
        </h2>
        <div style={{marginBottom: '10px'}}>
        <div className="d-flex align-items-center" style={{paddingRight: '20px', paddingLeft: '20px',fontSize: 16, borderBottom: '2px solid', borderColor: '#F4F4F4', gap: 10, marginBottom: '10px'}}>
                <span className="d-flex align-items-center" style={{paddingBottom: '7px', whiteSpace: "nowrap"}}>
                    <i className="bi bi-sort-down" style={{color: '#606060', marginRight: '10px', fontSize: 23}}></i>
                    <div className="d-inline-block" style={{fontSize: 14, color: '#858585'}}>Sort by</div>
                </span>
                <ul className="d-flex" style={{listStyle: "none", margin: '0px', padding: '0px', gap: 15}}>
                    <li>
                        <a className="d-block" href="" style={{color: '#de455f', paddingBottom: '10px', textDecorationLine: "none", fontWeight: "bold", position: "relative"}} >Popular</a>
                    </li >
                    <SortList title="New & Popular"/>
                    <SortList title="Top Sellers"/>
                    <SortList title="Top Rated"/>
                    <SortList title="Most recent"/>
                </ul>
            </div>
        </div>
        <div className="d-flex align-items-center" style={{flexWrap: "wrap", gap: '7px 10px', margin: '10px 20px'}}>
          <span style={{fontSize: 18, color: '#858585', whiteSpace: "nowrap"}}>
            <i className="bi bi-tag" style={{}}></i>
          </span>
          <div style={{minWidth: '200px', maxWidth: '200px', position: "relative"}}>
            <div style={{border: '1px solid', borderRadius: '2px', lineHeight: '16px', padding: '6px 8px', display: "block", fontSize: 14, backgroundColor: "white", backgroundImage: "none", boxShadow: "none", color: '#222', borderColor: '#cdcdcd'}}>
              <input type="undefined" autoComplete="off" placeholder="Select a tag..." style={{width: '76.25px', opacity: 1, position: "relative", left: '0px', border: 0, fontSize: 13}} />
            </div>
          </div>
          <GenreGame title="Horror"/>
          <GenreGame title="3D"/>
          <GenreGame title="Creepy"/>
          <GenreGame title="Atmospheric"/>
          <GenreGame title="First-Person"/>
          <GenreGame title="Singleplayer"/>
          <GenreGame title="Short"/>
          <GenreGame title="Psychological Horror"/>
          <GenreGame title="Adventure"/>
          <GenreGame title="Retro"/>
          <div style={{fontSize: 14, color: '#858585', whiteSpace: "nowrap"}}>
            <span>(<a href="" style={{color: '#767676'}}>View all tags</a>)</span>
          </div>
        </div>
        <p style={{margin: '15px 20px 10px 20px', color: '#858585', lineHeight: 1.5, fontSize: 16}}>
          Explore games on itch.io · <a href="" style={{color: '#606060'}}>Upload your games</a> to itch.io to have them show up here.
        </p>
      </div>
      <a className="d-flex align-items-center" id="yutub-baner" href="" style={{}}>
        <div style={{marginRight: '20px'}}> 
          <svg xmlns="http://www.w3.org/2000/svg" width="62" height="" fill="red" class="bi bi-youtube" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
          </svg> 
        </div>
        <div style={{marginRight: '20px'}}>
          <h4 className="d-flex align-items-center" style={{color: "inherit", margin: '0', fontWeight: 900, fontSize: 16}}>
            <span style={{borderRadius: '3px', padding: '2px 5px', marginRight: '6px', fontSize: 12, letterSpacing: '0.05em', fontWeight: "bold", color: '#40434E', backgroundColor: "white"}}>NEW</span>
            itch.io is now on YouTube!
          </h4>
          <p style={{fontSize: 14, margin: '0', color: "inherit"}}>
            Subscribe for game recommendations, clips, and more
          </p>
        </div>
        <div id="view-channel">View Channel <i style={{fontWeight: 'bold', marginLeft: '5px'}} className="bi bi-arrow-right" ></i></div>
      </a>
      <div style={{backgroundImage: "none", border: 0, padding: '20px 30px 20px 20px'}}>
        <div id="card-games" style={{fontSize: 16, display: "grid", gridGap: '25px 10px', alignItems: "start"}}>
          <GetCardGame 
            data={[
              {
                image: 'https://img.itch.zone/aW1nLzEzMDk5NzQzLnBuZw==/315x250%23c/HKdcxe.png',
                title: 'Night People',
                desc: 'Horror game.',
                author: 'steamvoy',
                genre: 'Survival',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyODY5Mjg4LmdpZg==/315x250%23cm/FOTUqd.gif',
                title: 'SOMETHING IN THE WOODS',
                desc: `There's something in the woods... it... screams...`,
                author: 'mik',
                genre: 'Adventure',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDk1Mjg5LnBuZw==/315x250%23c/Lgk9Nv.png',
                title: 'The Floor Is Wet',
                desc: 'clear dirt and get payment',
                author: 'SeriousDaniel',
                genre: 'Simulation',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyMTk5MTc2LnBuZw==/315x250%23c/aR3cMO.png',
                title: 'Deppart Prototype',
                author: 'steamvoy',
                genre: 'Survival',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDk5NzQzLnBuZw==/315x250%23c/HKdcxe.png',
                title: 'Night People',
                desc: 'Horror game.',
                author: 'N4bA',
                genre: 'Survival',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyOTMwNDgyLnBuZw==/315x250%23c/wAbsli.png',
                title: 'Sweet Dreams Demo',
                author: 'howWolf',
                genre: 'Survival',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDUyMDQyLnBuZw==/315x250%23c/%2FQTx4B.png',
                title: 'Liminal Gallery',
                desc: 'Gallery where pictures become reality',
                author: 'KenForest',
                genre: 'Adventure',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyOTEwMDk1LnBuZw==/315x250%23c/lwM9ua.png',
                title: 'THE PROTOTYPE',
                desc: 'He is unlike any other companion.',
                author: 'rainslices',
                genre: 'Visual Novel',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDI2MTc3LnBuZw==/315x250%23c/OPC9I6.png',
                title: 'The Duck Psychology (DEMO)',
                desc: 'Rubber ducks will lead you',
                author: 'SeriousDaniel',
                genre: 'Action',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyOTczMzQyLnBuZw==/315x250%23c/69VOrV.png',
                title: 'Home Alone',
                desc: 'Short atmospheric horror',
                author: 'Level',
                genre: 'Adventure',
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDQxMzcwLnBuZw==/315x250%23c/Osf3h2.png',
                title: 'Garten of Banban 4',
                desc: `You're slowly running out of friends to make here...`,
                author: 'Euphoric Brothers',
                genre: 'Adventure',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzQ0Mjk3NTAucG5n/315x250%23c/b2Cnvy.png',
                title: 'Wrong Floor',
                desc: 'do you want to be scared?',
                author: 'N4bA',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMTE4MzA4LnBuZw==/315x250%23c/xjSj24.png',
                title: 'Dark Stories: The Workshop',
                desc: 'A short lo-fi horror game',
                author: 'Voodoolew Studios',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDc4MzA5LmpwZw==/315x250%23c/NPraP7.jpg',
                title: 'Reaping Sins',
                desc: 'Are they here for revenge or is it just a dream?',
                author: 'GameDesignerr',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyOTQzOTYzLnBuZw==/315x250%23c/uY7ctb.png',
                title: 'MiSide DEMO',
                desc: 'Mita',
                author: 'Aihasto',
                genre: 'Simulation',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyNTM3MDQzLnBuZw==/315x250%23c/QddxRq.png',
                title: 'They Are Here: Alien Abduction Horror',
                desc: 'First-person horror story about a journalist who witnessed an alien abduction at the Grayswood farm',
                author: 'deklazon',
                genre: 'Adventure',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDk5NzQzLnBuZw==/315x250%23c/HKdcxe.png',
                title: 'Night People',
                desc: 'Horror game.',
                author: 'steamvoy',
                genre: 'Survival',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyODY5Mjg4LmdpZg==/315x250%23cm/FOTUqd.gif',
                title: 'SOMETHING IN THE WOODS',
                desc: `There's something in the woods... it... screams...`,
                author: 'mik',
                genre: 'Adventure',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDk1Mjg5LnBuZw==/315x250%23c/Lgk9Nv.png',
                title: 'The Floor Is Wet',
                desc: 'clear dirt and get payment',
                author: 'SeriousDaniel',
                genre: 'Simulation',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyMTk5MTc2LnBuZw==/315x250%23c/aR3cMO.png',
                title: 'Deppart Prototype',
                author: 'steamvoy',
                genre: 'Survival',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDk5NzQzLnBuZw==/315x250%23c/HKdcxe.png',
                title: 'Night People',
                desc: 'Horror game.',
                author: 'N4bA',
                genre: 'Survival',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyOTMwNDgyLnBuZw==/315x250%23c/wAbsli.png',
                title: 'Sweet Dreams Demo',
                author: 'howWolf',
                genre: 'Survival',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDUyMDQyLnBuZw==/315x250%23c/%2FQTx4B.png',
                title: 'Liminal Gallery',
                desc: 'Gallery where pictures become reality',
                author: 'KenForest',
                genre: 'Adventure',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyOTEwMDk1LnBuZw==/315x250%23c/lwM9ua.png',
                title: 'THE PROTOTYPE',
                desc: 'He is unlike any other companion.',
                author: 'rainslices',
                genre: 'Visual Novel',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDI2MTc3LnBuZw==/315x250%23c/OPC9I6.png',
                title: 'The Duck Psychology (DEMO)',
                desc: 'Rubber ducks will lead you',
                author: 'SeriousDaniel',
                genre: 'Action',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyOTczMzQyLnBuZw==/315x250%23c/69VOrV.png',
                title: 'Home Alone',
                desc: 'Short atmospheric horror',
                author: 'Level',
                genre: 'Adventure',
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDQxMzcwLnBuZw==/315x250%23c/Osf3h2.png',
                title: 'Garten of Banban 4',
                desc: `You're slowly running out of friends to make here...`,
                author: 'Euphoric Brothers',
                genre: 'Adventure',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzQ0Mjk3NTAucG5n/315x250%23c/b2Cnvy.png',
                title: 'Wrong Floor',
                desc: 'do you want to be scared?',
                author: 'N4bA',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMTE4MzA4LnBuZw==/315x250%23c/xjSj24.png',
                title: 'Dark Stories: The Workshop',
                desc: 'A short lo-fi horror game',
                author: 'Voodoolew Studios',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDc4MzA5LmpwZw==/315x250%23c/NPraP7.jpg',
                title: 'Reaping Sins',
                desc: 'Are they here for revenge or is it just a dream?',
                author: 'GameDesignerr',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyOTQzOTYzLnBuZw==/315x250%23c/uY7ctb.png',
                title: 'MiSide DEMO',
                desc: 'Mita',
                author: 'Aihasto',
                genre: 'Simulation',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyNTM3MDQzLnBuZw==/315x250%23c/QddxRq.png',
                title: 'They Are Here: Alien Abduction Horror',
                desc: 'First-person horror story about a journalist who witnessed an alien abduction at the Grayswood farm',
                author: 'deklazon',
                genre: 'Adventure',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDk5NzQzLnBuZw==/315x250%23c/HKdcxe.png',
                title: 'Night People',
                desc: 'Horror game.',
                author: 'steamvoy',
                genre: 'Survival',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyODY5Mjg4LmdpZg==/315x250%23cm/FOTUqd.gif',
                title: 'SOMETHING IN THE WOODS',
                desc: `There's something in the woods... it... screams...`,
                author: 'mik',
                genre: 'Adventure',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDk1Mjg5LnBuZw==/315x250%23c/Lgk9Nv.png',
                title: 'The Floor Is Wet',
                desc: 'clear dirt and get payment',
                author: 'SeriousDaniel',
                genre: 'Simulation',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyMTk5MTc2LnBuZw==/315x250%23c/aR3cMO.png',
                title: 'Deppart Prototype',
                author: 'steamvoy',
                genre: 'Survival',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDk5NzQzLnBuZw==/315x250%23c/HKdcxe.png',
                title: 'Night People',
                desc: 'Horror game.',
                author: 'N4bA',
                genre: 'Survival',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyOTMwNDgyLnBuZw==/315x250%23c/wAbsli.png',
                title: 'Sweet Dreams Demo',
                author: 'howWolf',
                genre: 'Survival',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDUyMDQyLnBuZw==/315x250%23c/%2FQTx4B.png',
                title: 'Liminal Gallery',
                desc: 'Gallery where pictures become reality',
                author: 'KenForest',
                genre: 'Adventure',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyOTEwMDk1LnBuZw==/315x250%23c/lwM9ua.png',
                title: 'THE PROTOTYPE',
                desc: 'He is unlike any other companion.',
                author: 'rainslices',
                genre: 'Visual Novel',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDI2MTc3LnBuZw==/315x250%23c/OPC9I6.png',
                title: 'The Duck Psychology (DEMO)',
                desc: 'Rubber ducks will lead you',
                author: 'SeriousDaniel',
                genre: 'Action',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyOTczMzQyLnBuZw==/315x250%23c/69VOrV.png',
                title: 'Home Alone',
                desc: 'Short atmospheric horror',
                author: 'Level',
                genre: 'Adventure',
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDQxMzcwLnBuZw==/315x250%23c/Osf3h2.png',
                title: 'Garten of Banban 4',
                desc: `You're slowly running out of friends to make here...`,
                author: 'Euphoric Brothers',
                genre: 'Adventure',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzQ0Mjk3NTAucG5n/315x250%23c/b2Cnvy.png',
                title: 'Wrong Floor',
                desc: 'do you want to be scared?',
                author: 'N4bA',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMTE4MzA4LnBuZw==/315x250%23c/xjSj24.png',
                title: 'Dark Stories: The Workshop',
                desc: 'A short lo-fi horror game',
                author: 'Voodoolew Studios',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDc4MzA5LmpwZw==/315x250%23c/NPraP7.jpg',
                title: 'Reaping Sins',
                desc: 'Are they here for revenge or is it just a dream?',
                author: 'GameDesignerr',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyOTQzOTYzLnBuZw==/315x250%23c/uY7ctb.png',
                title: 'MiSide DEMO',
                desc: 'Mita',
                author: 'Aihasto',
                genre: 'Simulation',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyNTM3MDQzLnBuZw==/315x250%23c/QddxRq.png',
                title: 'They Are Here: Alien Abduction Horror',
                desc: 'First-person horror story about a journalist who witnessed an alien abduction at the Grayswood farm',
                author: 'deklazon',
                genre: 'Adventure',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDk5NzQzLnBuZw==/315x250%23c/HKdcxe.png',
                title: 'Night People',
                desc: 'Horror game.',
                author: 'steamvoy',
                genre: 'Survival',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyODY5Mjg4LmdpZg==/315x250%23cm/FOTUqd.gif',
                title: 'SOMETHING IN THE WOODS',
                desc: `There's something in the woods... it... screams...`,
                author: 'mik',
                genre: 'Adventure',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDk1Mjg5LnBuZw==/315x250%23c/Lgk9Nv.png',
                title: 'The Floor Is Wet',
                desc: 'clear dirt and get payment',
                author: 'SeriousDaniel',
                genre: 'Simulation',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyMTk5MTc2LnBuZw==/315x250%23c/aR3cMO.png',
                title: 'Deppart Prototype',
                author: 'steamvoy',
                genre: 'Survival',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDk5NzQzLnBuZw==/315x250%23c/HKdcxe.png',
                title: 'Night People',
                desc: 'Horror game.',
                author: 'N4bA',
                genre: 'Survival',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyOTMwNDgyLnBuZw==/315x250%23c/wAbsli.png',
                title: 'Sweet Dreams Demo',
                author: 'howWolf',
                genre: 'Survival',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDUyMDQyLnBuZw==/315x250%23c/%2FQTx4B.png',
                title: 'Liminal Gallery',
                desc: 'Gallery where pictures become reality',
                author: 'KenForest',
                genre: 'Adventure',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyOTEwMDk1LnBuZw==/315x250%23c/lwM9ua.png',
                title: 'THE PROTOTYPE',
                desc: 'He is unlike any other companion.',
                author: 'rainslices',
                genre: 'Visual Novel',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDI2MTc3LnBuZw==/315x250%23c/OPC9I6.png',
                title: 'The Duck Psychology (DEMO)',
                desc: 'Rubber ducks will lead you',
                author: 'SeriousDaniel',
                genre: 'Action',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyOTczMzQyLnBuZw==/315x250%23c/69VOrV.png',
                title: 'Home Alone',
                desc: 'Short atmospheric horror',
                author: 'Level',
                genre: 'Adventure',
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDQxMzcwLnBuZw==/315x250%23c/Osf3h2.png',
                title: 'Garten of Banban 4',
                desc: `You're slowly running out of friends to make here...`,
                author: 'Euphoric Brothers',
                genre: 'Adventure',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzQ0Mjk3NTAucG5n/315x250%23c/b2Cnvy.png',
                title: 'Wrong Floor',
                desc: 'do you want to be scared?',
                author: 'N4bA',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMTE4MzA4LnBuZw==/315x250%23c/xjSj24.png',
                title: 'Dark Stories: The Workshop',
                desc: 'A short lo-fi horror game',
                author: 'Voodoolew Studios',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEzMDc4MzA5LmpwZw==/315x250%23c/NPraP7.jpg',
                title: 'Reaping Sins',
                desc: 'Are they here for revenge or is it just a dream?',
                author: 'GameDesignerr',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyOTQzOTYzLnBuZw==/315x250%23c/uY7ctb.png',
                title: 'MiSide DEMO',
                desc: 'Mita',
                author: 'Aihasto',
                genre: 'Simulation',
                platform: 'bi bi-windows'
              },
              {
                image: 'https://img.itch.zone/aW1nLzEyNTM3MDQzLnBuZw==/315x250%23c/QddxRq.png',
                title: 'They Are Here: Alien Abduction Horror',
                desc: 'First-person horror story about a journalist who witnessed an alien abduction at the Grayswood farm',
                author: 'deklazon',
                genre: 'Adventure',
                platform: 'bi bi-windows'
              }
            ]}
          />
        </div>
      </div>
    </div>
  )
}

function GenreGame(props)
{
  const [togglePlay, setTogglePlay] = useState(false);

  return(
    <>
      <div onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)} className="d-flex" style={{color: '#606060', fontSize: 14, height: '30px', boxSizing: "border-box"}}>
        <a href="" className="d-flex align-items-center" style={{backgroundColor: togglePlay ? '#ff2449' : '', height: 30, borderRadius: '3px', border: '1px solid', borderColor: '#dadada', textDecorationLine: "none", fontWeight: "bold", color: togglePlay ? 'white' : "inherit", padding: '0px 8px'}}>{props.title}</a>
      </div>
    </>
  )
}

function SortList(props)
{
  const [togglePlay, setTogglePlay] = useState(false);

  return (
    <>
      <li onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)}>
          <a className="d-block" href="" style={{color: togglePlay ? '#de455f' : '#434343', paddingBottom: '10px', textDecorationLine: "none", fontWeight: "bold", position: "relative"}} >{props.title}</a>
      </li >
    </>
  )
}

function GetCardGame(props)
{
  return (
    <>
      
        {
          props.data?.map((item, key) => {
              return(
                  <CardGameList key={key} item={item}/>
              )
          })  
        }
    </>
  )
}

function CardGameList(props)
{
  return(
    <>

        <div style={{minWidth: 0}}>
          <div style={{backgroundColor: '#000000', position: "relative", boxShadow: '0 0 2px rgba(0,0,0,0.15)', boxSizing: "border-box", overflow: "hidden"}}>
            <a href="" className="d-block" style={{textDecorationLine: "none"}}>
              <img src={props.item.image} alt="" style={{display: "block", width: '100%', height: 'auto', border: 0}}/>
            </a>
          </div>
          <div style={{marginTop: '0.3em'}}>
            <div style={{fontSize: '1em', overflow: "hidden", marginBottom: '5px'}}>
              <a href="" style={{fontWeight: "bold", color: "inherit", textDecorationLine: "none", marginRight: '6px', wordWrap: "break-word"}}>{props.item.title}</a>
            </div>
          </div>
          <div style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: '#606060', fontSize: '0.875em', marginBottom: '5px'}}>{props.item.desc}</div>
          <div className="d-flex align-items-center" style={{fontSize: '0.875em', color: '#606060', marginBottom: '5px'}}>
            <a href="" style={{minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "inherit", textDecorationLine: "none"}}>{props.item.author}</a>
          </div>
          <div style={{fontSize: '0.875em', color: '#858585', marginBottom: '5px'}}>{props.item.genre}</div>
          <div style={{marginBottom: 0, fontSize: '0.875em', color: "#858585"}}><i className={props.item.platform} style={{display: "inline-block", verticalAlign: 'middle', marginRight: '3px'}}></i></div>
        </div>
    </>
  )
}

export default BrowseGames;
