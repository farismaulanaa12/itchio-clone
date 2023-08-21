import { useState } from 'react';

function TopSideBar()
{
  return (
    <>
      <TopMenuSideBar title = "POPULAR TAGS"
        data={[
        {
          title : "Horror games",
          title2 : "Multiplayer"
        },
        {
          title : "Visual novels",
          title2 : "HTML5 games"
        },
        {
          title : "Simulation",
          title2 : "macOS games"
        },
        {
          title : "Roguelike",
          title2 : "Linux games"
        },
        {
          title : "Browse all tags", icon : "bi bi-arrow-right"
        },
      ]}/>
            
      <TopMenuSideBar title = "BROWSE"
        data={[
        {
          title : "Games",
          title2 : "Game asset"
        },
        {
          title : "Tools",
          title2 : "Album & soundtracks"
        },
        {
          title : "Physical games",
          title2 : "Comics",
        },
        {
          title : "Book",
          title2 :"Randomizer", icon2 : "bi bi-shuffle"
        },
      ]}/>
      <TopMenuSideBar title = "GAMES BY PRICE"
        data={[
        {
          title : "On Sale",
          title2 : "Free games"
        },
        {
          title : "With demo",
          title2 : "Top sellers"
        },
        {
          title : "$5 or less",
          title2 : "$15 or less",
        }
      ]}/>
    </>
  )
}

function TopMenuSideBar(props)
{
  return(
    <div className='' style={{padding: '20px 0px 20px 7px'}}>
      <div className="row">
        <div className="">
          <h2 style={{fontWeight: 'bold', color: "#434343", fontSize: '16px', fontWeight: 900}} className=''>{props.title}</h2>
        </div>
          {
            props.data?.map((item, key) => {
              return(
                <div className="">
                  <TopLableTag key={key} item={item}/>
                </div>
              )
            })  
          }
      </div>
    </div>
  )
}

function TopLableTag(props)
{
  const [togglePlay, setTogglePlay] = useState(false);
  const [toggle2, setToggle] = useState(false);

  return (
    <>  
        <div className="d-flex" key={props.key} >
          <div onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)} className='col-6'>
            <a href="/games" style={{fontSize: '14px', color: togglePlay ? '#ff2449' : '#222222', opacity: 0.8, textDecorationLine: togglePlay ? 'underline' : 'none'}} className=''>{props.item.title} <i style={{fontWeight: 'bold'}} className={props.item.icon}></i></a>
          </div>
          <div onMouseOver={() => setToggle(true)} onMouseOut={() => setToggle(false)} className="col-6 px-1">
            <a href="/games" style={{fontSize: '14px', color: toggle2 ? '#ff2449' : '#222222', opacity: 0.8, textDecorationLine: toggle2 ? 'underline' : 'none', maxWidth: ''}} className=''><i style={{fontWeight: 'bold'}} className={props.item.icon2}></i> {props.item.title2}</a>
          </div>
        </div>
    </>
  )
}

export default TopSideBar