import { useState } from 'react';


function BottomSideBar()
{
  return(
    <div className='mb-4'>
      <BottomMenuSideBar 
        title="FROM THE ITCH.IO BLOG"
        data={[
          {
            title : "Games of the Week:Sludge, Stickers, and Seals",
            title2 : "9d"
          },
          {
            title : "Welcome to the itch.io Summer Sale!",
            title2 : "36d"
          },
          {
            title : "Friday, March 17th is the next Creator Day! (Now Extended)",
            title2 : "142d"
          },
          {
            title : "Looking for a new Tabletop RPG to play? Here are some of our favorites!",
            title2 : "177d"
          },
          {
            title : "The itch.io Winter Sale and Tabletop itch.io Selects bundle start now!",
            title2 : "225d"
          },
          {
            title : "The next itch.io Creator Day is November 25th!",
            title2 : "254d"
          },
          {
            title : "itch.io Recommends: 3 new games, and 9 old ones!",
            title2 : "261d"
          },
          {
            title : "The itch.io Halloween Sale and Selects Bundle are on now!",
            title2 : "279d"
          }, 
          {
            title: "View all updates ", icon : "bi bi-arrow-right"
          },
        ]}
        />
    </div>
  )
}

function BottomMenuSideBar(props)
{
  return(
    <div className='' style={{padding: '20px 0px 20px 7px'}}>
      <div className="row">
        <div className="">
          <h2 style={{fontWeight: 900, color: "#222222", fontSize: '15px'}} className='px-1'>{props.title}</h2>
        </div>
        <div className="col">
          {
            props.data?.map((item, key) => {
              return(
                <>
                  <BottomLabelTag key={key} item={item}/>
                </>
              )
            })  
          }
        </div>
      </div>
    </div>
  )
}

function BottomLabelTag(props)
{
  const [togglePlay, setTogglePlay] = useState(false);

  return (
    <>  
        <div className="d-flex" key={props.key} >
          <div onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)} className='pb-1' style={{paddingLeft: 4}}>
            <a href="" style={{fontSize: '14px', color: togglePlay ? '#ff2449' : '#222222', opacity: 0.8, textDecorationLine: togglePlay ? 'underline' : 'none'}}>{props.item.title} <i className={props.item.icon}></i></a>
          </div>
          <div onMouseOver={() => setToggle(true)} onMouseOut={() => setToggle(false)}>
            <a href="" style={{fontSize: '14px', color: togglePlay ? '#ff2449' : '#222222', opacity: 0.5, textDecorationLine: 'none'}} className='p-1 ms-4'>{props.item.title2}</a>
          </div>
        </div>
    </>
  )
}

export default BottomSideBar