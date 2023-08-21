import { useReducer, useRef, useState } from "react";


function SideBarDevLogs()
{
  const [togglePlay, setTogglePlay] = useState(false);

  return(
    <>
      <h2 style={{fontSize: 15, padding: '20px 20px 0 20px', margin: '0', fontWeight: 900, color: '#434343'}}>FILTER RESULTS</h2>
      <section>
        <MenuSideBar title="Platform"
          data={[
            {
              icon: "bi bi-windows",
              menuName: 'Windows'
            },
            {
              icon: "bi bi-apple",
              menuName: 'macOS'
            },
            {
              icon: "bi bi-ubuntu",
              menuName: 'Linux'
            },
            {
              icon: "bi bi-android2",
              menuName: 'Android'
            },
            {
              icon: "bi bi-apple",
              menuName: 'iOS'
            },
            {
              icon: "bi bi-globe2",
              menuName: 'Web'
            }
        ]}/>
        <MenuSideBar title="Price"
          data={[
            {
              icon: "bi bi-star-fill",
              menuName: 'Free'
            },
            {
              icon: "bi bi-star-fill",
              menuName: 'On Sale'
            },
            {
              icon: "bi bi-cart4",
              menuName: 'Paid'
            },
            {
              icon: "bi bi-cart4",
              menuName: '$5 or less'
            },
            {
              icon: "bi bi-cart4",
              menuName: '$15 or less'
            }
        ]}/>
        <MenuSideBar title="When"
          data={[
            {
              icon: "bi bi-stopwatch",
              menuName: 'Last Day'
            },
            {
              icon: "bi bi-stopwatch",
              menuName: 'Last 7 Day'
            },
            {
              icon: "bi bi-stopwatch",
              menuName: 'Last 30 Day'
            }
        ]}/> 
        <MenuSideBar title="Genre"
          data={[
            {
              icon: "bi bi-tag-fill",
              menuName: 'Action'
            },
            {
              icon: "bi bi-tag-fill",
              menuName: 'Adventure'
            },
            {
              icon: "bi bi-tag-fill",
              menuName: 'Card Game'
            },
            {
              icon: "bi bi-tag-fill",
              menuName: 'Educational'
            },
            {
              icon: "bi bi-tag-fill",
              menuName: 'Comics'
            },
            {
              icon: "bi bi-tag-fill",
              menuName: 'Fighting'
            },
            {
              icon: "bi bi-tag-fill",
              menuName: 'Interactive Fiction'
            },
            {
              icon: "bi bi-tag-fill",
              menuName: 'Platformer'
            },
            {
              icon: "bi bi-tag-fill",
              menuName: 'Puzzle'
            },
            {
              icon: "bi bi-tag-fill",
              menuName: 'Racing'
            },
            {
              icon: "bi bi-tag-fill",
              menuName: 'Rhythm'
            },
            {
              icon: "bi bi-tag-fill",
              menuName: 'Role Playing'
            },
            {
              icon: "bi bi-tag-fill",
              menuName: 'Shooter'
            },
            {
              icon: "bi bi-tag-fill",
              menuName: 'Simulation'
            },
            {
              icon: "bi bi-tag-fill",
              menuName: 'Sports'
            },
            {
              icon: "bi bi-tag-fill",
              menuName: 'Strategy'
            },
            {
              icon: "bi bi-tag-fill",
              menuName: 'Survival'
            },
            {
              icon: "bi bi-tag-fill",
              menuName: 'Visual Novel'
            },
            {
              icon: "bi bi-tag-fill",
              menuName: 'Other'
            }
        ]}/>
        <MenuSideBar title="Input methods"
          data={[
            {
              icon: "bi bi-controller",
              menuName: 'Keyboard'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Mouse'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Xbox controller'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Gamepad (any)'
            },
            {
              icon: "bi bi-controller",
              menuName: 'JoyStick'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Touchscreen'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Voice control'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Oculus Rift'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Leap Motion'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Wiiremote'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Kinect'
            },
            {
              icon: "bi bi-controller",
              menuName: 'NeuroSky Mindwave'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Accelerometer'
            },
            {
              icon: "bi bi-controller",
              menuName: 'OSVR (Open-Source Virtual Reality)'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Smartphone'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Dance pad'
            },
            {
              icon: "bi bi-controller",
              menuName: 'HTC-Vive'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Google Daydream VR'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Google Cardboard VR'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Playstation Controller'
            },
            {
              icon: "bi bi-controller",
              menuName: 'MIDI Controllers'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Joy-Con'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Magic Leap'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Oculus Quest'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Oculus Go'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Window Mixed Reality'
            },
            {
              icon: "bi bi-controller",
              menuName: 'Valve Index'
            }
        ]}/>
        <MenuSideBar title="Average session length"
          data={[
            {
              icon: "bi bi-stopwatch",
              menuName: 'A few seconds'
            },
            {
              icon: "bi bi-stopwatch",
              menuName: 'A few minutes'
            },
            {
              icon: "bi bi-stopwatch",
              menuName: 'About an hour'
            },
            {
              icon: "bi bi-stopwatch",
              menuName: 'A few hours'
            },
            {
              icon: "bi bi-stopwatch",
              menuName: 'Days or more'
            }
        ]}/> 
        <MenuSideBar title="Multiplayer features"
          data={[
            {
              icon: "bi bi-globe-central-south-asia",
              menuName: 'Local multiplayer'
            },
            {
              icon: "bi bi-globe-central-south-asia",
              menuName: 'Server-based networked multiplayer'
            },
            {
              icon: "bi bi-globe-central-south-asia",
              menuName: 'Ad-hoc networked multiplayer'
            }
        ]}/> 
        <MenuSideBar title="Accessibility features"
          data={[
            {
              icon: "bi bi-hand-index-thumb-fill",
              menuName: 'Color-blind friendly'
            },
            {
              icon: "bi bi-hand-index-thumb-fill",
              menuName: 'Subtitles'
            },
            {
              icon: "bi bi-hand-index-thumb-fill",
              menuName: 'Configurable controls'
            },
            {
              icon: "bi bi-hand-index-thumb-fill",
              menuName: 'High-contrast'
            },
            {
              icon: "bi bi-hand-index-thumb-fill",
              menuName: 'Interactive tutorial'
            },
            {
              icon: "bi bi-hand-index-thumb-fill",
              menuName: 'One button'
            },
            {
              icon: "bi bi-hand-index-thumb-fill",
              menuName: 'Blind friendly'
            },
            {
              icon: "bi bi-hand-index-thumb-fill",
              menuName: 'Textless'
            }
        ]}/> 
        <MenuSideBar title="Multiplayer features"
          data={[
            {
              icon: "bi bi-funnel-fill",
              menuName: 'HTML5'
            },
            {
              icon: "bi bi-funnel-fill",
              menuName: 'Downloadable'
            },
            {
              icon: "bi bi-funnel-fill",
              menuName: 'Flash'
            }
        ]}/>
        <MenuSideBar title="Misc"
          data={[
            {
              icon: "bi bi-funnel-fill",
              menuName: 'With Steam keys'
            },
            {
              icon: "bi bi-funnel-fill",
              menuName: 'In game jams'
            },
            {
              icon: "bi bi-funnel-fill",
              menuName: 'Not in game jams'
            },
            {
              icon: "bi bi-funnel-fill",
              menuName: 'With demos'
            },
            {
              icon: "bi bi-funnel-fill",
              menuName: 'Featured'
            }
        ]}/>
      </section>
      <section onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)} style={{margin: '20px 20px 0px 20px', opacity: togglePlay ? 1 : 0.8}}>
        <MenuSideBarBottom 
          data={[
            {
              image: 'https://img.itch.zone/aW1nLzMyNDA1MjYucG5n/110x87%23/lnhdQb.png',
              image2: "https://img.itch.zone/aW1nLzkxMTUwOTAuanBn/110x87%23/8u6Gcv.jpg",
              image3: "https://img.itch.zone/aW1nLzM3MjYxOTAuZ2lm/110x87%23m/jPo1A%2F.gif",
              image4: "https://img.itch.zone/aW1nLzQxMzI1MzQucG5n/110x87%23/EXAneb.png",
              desc: 'games to try later',
              author: 'CountMoxi'
            },
            {
              image: 'https://img.itch.zone/aW1nLzEyNTkyNDc0LmpwZw==/110x87%23/r31Pb4.jpg',
              image2: "https://img.itch.zone/aW1nLzEyNjM5NjU5LnBuZw==/110x87%23/sSVfYJ.png",
              image3: "https://img.itch.zone/aW1nLzE5ODIyODYuZ2lm/110x87%23m/tbctWp.gif",
              image4: "https://img.itch.zone/aW1nLzkzNzQwNzguanBn/110x87%23/fN%2Fr2I.jpg",
              desc: 'desktop pets & virtual companions...',
              author: 'alienmelon'
            },
            {
              image: 'https://img.itch.zone/aW1nLzU0MjQ0NzYucG5n/110x87%23b/ltLvSC.png',
              image2: "https://img.itch.zone/aW1nLzExOTI2MTAxLnBuZw==/110x87%23/r7nnbX.png",
              image3: "https://img.itch.zone/aW1nLzExNzI1ODc5LnBuZw==/110x87%23/q2ab5O.png",
              image4: "https://img.itch.zone/aW1nLzEwODg4MDkxLnBuZw==/110x87%23/gs8p6V.png",
              desc: 'tiny games',
              author: 'npckc'
            },
            {
              image: 'https://img.itch.zone/aW1nLzEwMzg0MTgzLmdpZg==/110x87%23m/ERAr6y.gif',
              image2: "https://img.itch.zone/aW1nLzc5MjEzMzYucG5n/110x87%23b/sonseX.png",
              image3: "https://img.itch.zone/aW1nLzY4MDk3MTkucG5n/110x87%23/0921ih.png",
              image4: "https://img.itch.zone/aW1nLzYyNzE0OTYucG5n/110x87%23b/qAbHHL.png",
              desc: 'little games',
              author: 'npckc'
            },
            {
              image: 'https://img.itch.zone/aW1nLzQwNzYzNDAucG5n/110x87%23/KLhgNX.png',
              image2: "https://img.itch.zone/aW1nLzk3NTYwNjIucG5n/110x87%23/pN4u86.png",
              image3: "https://img.itch.zone/aW1nLzQxMTc3ODYucG5n/110x87%23/EnEaDY.png",
              image4: "https://img.itch.zone/aW1nLzY2MzE4MjgucG5n/110x87%23/WvnRKF.png",
              desc: `Lunaris Games's Collection`,
              author: 'Lunaris Games'
            },
            {
              image: 'https://img.itch.zone/aW1nLzExNDQyNDczLnBuZw==/110x87%23/uFmf1C.png',
              image2: "https://img.itch.zone/aW1nLzEzMDE0NTQ3LmdpZg==/110x87%23m/km0ID3.gif",
              image3: "https://img.itch.zone/aW1nLzg4MjMxMDUucG5n/110x87%23/ktw1%2BR.png",
              image4: "https://img.itch.zone/aW1nLzc2MTM3MzcucG5n/110x87%23/ufiji4.png",
              desc: 'Bara & Gray Games, Visual Novels & Fiction',
              author: 'Minoh Workshop'
            }
          ]}/>
      </section>
    </>
  )
}

function MenuSideBarBottom(props)
{
  return(
    <>
      <h3 style={{fontSize: 15, marginTop: '0', fontWeight: 900, color: '#434343'}}>RELATED COLLECTIONS</h3>
        {
            props.data?.map((item, key) => {
              return(
                  <MenuRelatedCollection key={key} item={item}/>
              )
            })  
        }
    </>
  )
}

function MenuSideBar(props)
{
  const [open, setOpen] = useState(true);

  return(
    <>
      <div style={{margin: '10px'}}>
          <div className="d-flex align-items-center" style={{color: '#606060', fontSize: 14}}>
            <button onClick={ () => setOpen(!open) } className="border-0" style={{color: '#606060', padding: '10px 0 10px 8px', textAlign: "left", cursor: "pointer", backgroundColor: "transparent", flex: 1}}>
              <span className="bi bi-chevron-down" style={{width: '15px', textAlign: "center", marginRight: '10px'}}> </span>
              {props.title}
            </button>
          </div>
          {
            props.data?.map((item, key) => {
              return(
                <div className="">
                  <MenuType key={key} item={item}/>
                </div>
              )
            })  
          }
        </div>
    </>
  )

}


function MenuType(props)
{
  const [togglePlay, setTogglePlay] = useState(false);

  return (
    <>  
        <ul className="" style={{listStyle: "none", margin: '0', padding: '0'}}>
          <li onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)} className={`tablist ${open? 'acive' : 'inactive'}`} id="listPost" style={{transition: 'height 0.2s', height: '32px', alignItems: "center", display: 'flex', backgroundColor : togglePlay ? '#565656' : "transparent" }}>
            <a href="" className="d-flex" style={{paddingLeft: '28px', gap: 10, flex: 1, fontSize: 14, lineHeight: '32px', height: '32px', textDecorationLine: "none", alignItems: "center", color: togglePlay ? 'white' : "#222222", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
              <i className={props.item.icon} style={{opacity: 0.8, fontSize: 14, flexShrink: 0}}></i>
              {props.item.menuName}
            </a>
          </li>
        </ul>
    </>
  )
}

function MenuRelatedCollection(props)
{
  return(
    <>
      <div style={{marginBottom: '20px'}}>
        <a href="">
          <div style={{backgroundColor: "white", fontSize: 0, width: '220px', height: '174px'}}>
            <img src={props.item.image}  alt="" width="50%" height="50%" className="d-inline-block border-0" style={{objectFit: "cover"}}/>
            <img src={props.item.image2} alt="" width="50%" height="50%" className="d-inline-block border-0" style={{objectFit: "cover"}}/>
            <img src={props.item.image3} alt="" width="50%" height="50%" className="d-inline-block border-0" style={{objectFit: "cover"}}/>
            <img src={props.item.image4} alt="" width="50%" height="50%" className="d-inline-block border-0" style={{objectFit: "cover"}}/>
          </div>
        </a>
        <div>
          <div style={{marginTop: '4px', fontSize: 16, lineHeight: 1.2}}>
            <a href="" style={{textDecorationLine: "none", fontWeight: "bold", color: '#da2c49'}}>{props.item.desc}</a>
          </div>
          <div style={{marginTop: '4px', fontSize: 14}}>
            <a href="" style={{textDecorationLine: "none", color: '#606060'}}>{props.item.author}</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBarDevLogs