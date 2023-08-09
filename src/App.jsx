import gambar from '../src/assets/logo.png'
import { useState } from 'react';

function App()
{
  const [togglePlay, setTogglePlay] = useState(false);

  return(
    <>
      <NavigationBar/>
        <div className="row">
          <div className="col-2" onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)} style={{backgroundColor: '#f4f4f4', overflowY: togglePlay ? "auto" : 'hidden', height: "100vh", position: "sticky", top: "2px", paddingLeft: '25px', width: '280px'}} id='sidebar'>
            <div style={{width: '240px'}}>
              <TopSideBar/>
              <MiddleSideBar/>
              <BottomSideBar/>
            </div>
          </div>
          <div className="col" id='main'>
            <MainIntro/>
            <MainContent />
            <FooterIntro/>
            <FooterMain/>
          </div>
        </div>
    </>
  )
}
function NavigationBar()
{
  const [togglePlay, setTogglePlay] = useState(false);
  const [togglePlay2, setToggle] = useState(false);

  return(
    <>
      <nav className="navbar navbar-expand-lg shadow-sm bg-white" style={{fontFamily: 'Lato', fontWeight: 700, fontStyle: "normal", backgroundColor:"white", position: "sticky", top: "0px", zIndex: 99,marginRight:0}}>
        <div className="container-fluid">
            <a className="navbar-brand mx-3" href="#" ><img src={gambar} alt="" width="115" height="30"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link" aria-expanded="false" aria-haspopup="true" href='' data-bs-toggle="dropdown">Browse Games</a>
                  <div className="dropdown-menu rounded-0" aria-labelledby="navbarDropdown">
                    <ul>
                      <li><a class="dropdown-item" href="#">Indie game store</a></li>
                    </ul>
                    <ul>
                      <li><a class="dropdown-item" href="#">Free games</a></li>
                    </ul>
                    <ul>
                      <li><a class="dropdown-item" href="#">Horror games</a></li>
                    </ul>
                    <ul>
                      <li><a class="dropdown-item" href="#">Game development</a></li>
                    </ul>
                    <ul>
                      <li><a class="dropdown-item" href="#">Assets</a></li>
                    </ul>
                    <ul>
                      <li><a class="dropdown-item" href="#">Comics</a></li>
                    </ul>
                    <ul>
                      <li><a class="dropdown-item" href="#">Sales</a></li>
                    </ul>
                    <ul>
                      <li><a class="dropdown-item" href="#">Bundles</a></li>
                    </ul>
                    <ul>
                      <li><a class="dropdown-item" href="#">Jobs</a></li>
                    </ul>
                    <ul>
                      <li><a class="dropdown-item" href="#">Tags</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Game Jams</a>
                </li>
                <li className="nav-item d-flex">
                  <a className="nav-link active" href="#"><i className="bi bi-upload mt-2 mx-1"></i>Upload Game</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Developer Logs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Community</a>
                </li>
                <div className="col mx-3 mt-1">
                  <div className="d-flex input-group-sm" role="search" style={{paddingTop: '10px'}}>
                    <input className="form-control border-0" type="search" placeholder="Search for games and creators" aria-label="Search" style={{position: "relative", width: "475px", backgroundColor: "#f4f4f4", outlineStyle:"none", paddingRight: "20"}}/>
                    <i className="bi bi-search btn-sm" style={{position: "absolute", zIndex: 2, right: 265, display: "block", width: "3.23rem", height:"3.23rem", lineHeight: "2rem", textAlign: "center", pointerEvents:"none"}}></i>
                  </div>
                </div>
              </ul>
              <div className="mx-4" style={{}}>
                <button onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)} className="btn btn-outline-secondary btn-sm mx-2 border-2" type="button" style= {{width: "70px", fontWeight: "bold", color: togglePlay ? 'red' : 'black', backgroundColor: 'transparent'}}>Log In</button>
                <button onMouseOver={() => setToggle(true)} onMouseOut={() => setToggle(false)} className="btn btn-outline-secondary btn-sm border-2" type="button" style={{width: "80px", fontWeight: "bold", color: togglePlay2 ? 'red' : 'black', backgroundColor: 'transparent'}}>Register</button>
              </div>
            </div>
        </div>
      </nav>
    </>
  )
}

function SideBar(props)
{
  return(
    <div className='' style={{padding: '20px 0px 20px 7px'}}>
      <div className="row">
        <div className="">
          <h2 style={{fontWeight: 'bold', color: "#434343", fontSize: '16px'}} className=''>{props.title}</h2>
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
            <a href="" style={{fontSize: '14px', color: togglePlay ? '#ff2449' : '#222222', opacity: 0.8, textDecorationLine: togglePlay ? 'underline' : 'none'}} className=''>{props.item.title} <i style={{fontWeight: 'bold'}} className={props.item.icon}></i></a>
          </div>
          <div onMouseOver={() => setToggle(true)} onMouseOut={() => setToggle(false)} className="col-6 px-1">
            <a href="" style={{fontSize: '14px', color: toggle2 ? '#ff2449' : '#222222', opacity: 0.8, textDecorationLine: toggle2 ? 'underline' : 'none', maxWidth: ''}} className=''><i style={{fontWeight: 'bold'}} className={props.item.icon2}></i> {props.item.title2}</a>
          </div>
        </div>
    </>
  )
}

function TopSideBar()
{
  return (
    <>
    <SideBar title = "POPULAR TAGS"
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
                title2 : "macOS games",

              },
              {
                title : "Roguelike",
                title2 : "Linux games"
              },
              {
                title : "Browse all tags", icon : "bi bi-arrow-right"
              },
            ]}/>
            
  <SideBar title = "BROWSE"
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
            <SideBar title = "GAMES BY PRICE"
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

function MiddleLabbleTag(props)
{
  const [togglePlay, setTogglePlay] = useState(false);

  return(
    <>
      <div className="d-flex" key={props.key}>
        <div onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)}>
          <a href="" style={{fontSize: '14px', color: togglePlay ? '#ff2449' : '#222222', opacity: 0.8, textDecorationLine: togglePlay ? 'underline' : 'none'}} className='p-1'>
            <i style={{fontSize: 18}} className={props.icon}></i>
          </a>
        </div>
      </div>
    </>
  )
}

function MiddleSideBar()
{
  const [togglePlay, setTogglePlay] = useState(false);
  
  return(
    <div className="mt-4 mb-4 align-items-center">
      <div className="d-flex justify-content-center ">
        <MiddleLabbleTag icon="bi bi-reddit"/>
        <MiddleLabbleTag icon="bi bi-facebook"/>
        <MiddleLabbleTag icon="bi bi-twitter"/>

        <div className="mx-1">
          <div onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)}>
            <a href="" style={{fontSize: '13px', color: togglePlay ? '#ff2449' : '#222222', opacity: 0.8, textDecorationLine: 'none'}} className='p-1'>Download app</a>
          </div>
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

function BottomMenuSideBar(props)
{
  return(
    <div className='' style={{padding: '20px 0px 20px 7px'}}>
      <div className="row">
        <div className="">
          <h2 style={{fontWeight: 'bold', color: "#222222", fontSize: '16px'}} className='px-1'>{props.title}</h2>
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
 
 
function MainIntro()
{
  const [togglePlay, setTogglePlay] = useState(false);
  const [togglePlay2, setToggle] = useState(false);

  return(
    <div>
      <div className="" style={{fontSize: '16px', padding: '14px', backgroundColor: '#f4f4f4'}} >
        <div className='d-flex' style={{marginLeft: '25px'}}>
          <strong style={{fontSize: '16px'}}>itch.io</strong>
            &nbsp;is a simple way to find and share indie games online for free.
          <div className='mx-2'>
            <a href="" className='' style={{color: '#ff2449'}}>Add your game </a>
            or
            <a href="" className='' style={{color: '#ff2449'}}> Read the FAQ </a>
          </div>
        </div>
      </div>
      <div className="bg-dark">
        <div className="col d-flex" style={{padding: '14px'}}>
          <a href="" className='btn btn-outline-danger rounded-1' style={{color: 'white', fontSize: '14px', marginLeft: '24px', marginRight: '6px'}}>Download app</a>
          <div className='mx-2 mt-1' style={{color: 'white'}}>
            <span>
              <strong style={{fontSize: '16px'}}>Get the most out of itch.io! </strong>
              Install and manage your games with our desktop app
            </span>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="col d-flex" style={{padding: '40px'}}>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe width="470" height="264" class="embed-responsive-item" src="https://www.youtube.com/embed/bO6ZIrYQkJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            <div className='mx-2 text-center'>
              <a onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)} style={{fontSize: '15px', color: togglePlay ? '#fff' : "#b8b8b8", textDecorationLine: 'none', fontWeight: 'bold'}} href=''>See more on itch.io's Youtube <i style={{fontSize: 14} }className="bi bi-box-arrow-up-right"></i> </a>
            </div>
          </div>
          <div className='' style={{color: 'white', marginLeft: '40px'}}>
            <h2 style={{fontSize: '28px', fontWeight: 'bold'}}>The Night Owl Murder</h2>
            <div style={{fontSize: '16px', fontWeight:'bold'}}>Cyber-Noir Detective Adventure</div>
            <div className='d-flex mt-3' style={{gap: '10px'}}>
              <div>
                <img  src="https://img.itch.zone/aW1hZ2UvMTcyOTE0OS8xMDE4MjQ3Ny5wbmc=/347x500/uolCbV.png" style={{width: '100%'}}/>
              </div>
              <div>
                <img src="https://img.itch.zone/aW1hZ2UvMTcyOTE0OS8xMDE4MjQ3OS5wbmc=/347x500/ozLWeE.png" style={{width: '100%'}}/>
              </div>
              <div>
                <img src="https://img.itch.zone/aW1hZ2UvMTcyOTE0OS8xMDE4MjQ4MS5wbmc=/347x500/6Vwz%2Ff.png" style={{width: '100%'}}/>  
              </div>
            </div>

            <div className='mt-2 d-flex text-center' color='white'>
              <span style={{backgroundColor: 'white', color: 'black', borderRadius: '3px', fontSize: '12px', letterSpacing: '0.05em', fontWeight: 'bold'}} className='px-1'>FREE</span>
            </div>

            <div className='mt-3'>
              <a href="" onMouseOver={() => setToggle(true)} onMouseOut={() => setToggle(false)} style={{border : '2px solid', borderRadius: '3px', fontSize: '18px', display: 'inline-block', textDecorationLine: 'none', fontWeight: 'bold', color: togglePlay2 ? 'black' : 'inherit', backgroundColor: togglePlay2 ? 'white' : 'black', padding: '5px 12px'}}>Get the game <i style={{fontWeight: 'bold'}} className="bi bi-arrow-right" ></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ListGameCard(props)
{
  const [togglePlay, setTogglePlay] = useState(false);
  const [togglePlay2, setToggle] = useState(false);

  return(
    <div key={props.key} className="text-white" style={{width:'20%'}}>
      <div className="card rounded-0 border-0" style={{}}>
          <div style={{position: 'relative'}} onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)}>
            <div className='' style={{position: 'relative'}}>
              <img src={props.item.image} className="card-img-top border-3 border-primary rounded-0"/>
            </div>
            <div className='justify-content-between' style={{wordWrap: 'break-word'}}>
                <span style={{backgroundColor: '#949494', color: 'white', borderRadius: '3px', fontSize: '12px', letterSpacing: '0.05em', fontWeight: 'bold', float: 'right'}} className='px-1 mt-1'>{props.item.price}</span>
                <a className="" onMouseOver={() => setToggle(true)} onMouseOut={() => setToggle(false)} style={{fontWeight: "bold", fontSize: '14px', color: "black", textDecorationLine: togglePlay2 ? 'underline' : 'none', lineHeight: 0.2}}>{props.item.title}</a>
              </div>
              <p className="" style={{fontSize: '12px', opacity: 0.7, lineHeight: 1.2, display: 'block'}}>{props.item.desc}</p>
          </div>
      </div>
    </div>
  )
}

function ListGameJamCard(props)
{
  const [togglePlay, setTogglePlay] = useState(false);
  const [togglePlay2, setToggle] = useState(false);

  return(
    <div key={props.key} className="text-white p-2" style={{width: '20%'}}>
      <div className="card rounded-0 border-0" style={{}}>
          <div style={{position: 'relative'}} onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)}>
            <div className='' style={{position: 'relative'}}>
              <img src={props.item.image} className="card-img-top border-2 border-primary rounded-0"/>
            </div>
            <div className='justify-content-between' style={{wordWrap: 'break-word'}}>
                <div style={{backgroundColor: '#34a0f2', color: 'white', borderRadius: '3px', fontSize: '12px', letterSpacing: '0.05em', fontWeight: 'bold', float: 'right'}} className='px-1 mt-1'>GAME JAM</div>
                <a className="" onMouseOver={() => setToggle(true)} onMouseOut={() => setToggle(false)} style={{fontWeight: "bold", fontSize: '14px', color: "black", textDecorationLine: togglePlay2 ? 'underline' : 'none'}}>{props.item.title}</a>
              </div>
              <div style={{marginBottom: '5px', marginTop: '3px', opacity: 0.5, lineHeight: 1.2, fontSize: '12px'}}>
                <strong >{props.item.member}</strong>
              </div>
              <p className="" style={{fontSize: '12px', opacity: 0.7, lineHeight: 1.2, display: 'block'}}>{props.item.desc}</p>
          </div>
      </div>
    </div>
  )
}

function SectionGameJam(props)
{
  return(
    <div className='mx-auto' style={{ margin: '40px 40px 0 40px', padding: '0px 40px'}}>
      <div className='d-flex align-item-center' style={{gap: 20}}>
        <h2 className='' style={{fontSize: 20, fontWeight: 'bold'}}>{props.title}</h2>
        <a onClick={props.viewAll} className='btn btn-outline-danger rounded-1' style={{height: 28, lineHeight: 1,color: '#FF2449', textDecorationLine: 'none', fontSize: '14px', display: 'inline-block', fontWeight: 'bold', backgroundColor: 'transparent'}}>{props.buttonText}</a>
      </div>
      <p>{props.desc}</p>
      <div className="row mt-3">
        {
          props.data?.map((item, key) => {
            return(
              <ListGameJamCard key={key} item={item}/>
            )
          })  
        }
      </div>
    </div>
  )
}

function Section(props)
{
  return(
    <div className='mx-auto' style={{ margin: '40px 40px 0 40px', padding: '0px 40px'}}>
      <div className='d-flex align-item-center' style={{gap: 20}}>
        <h2 className='' style={{fontSize: 20, fontWeight: 'bold'}}>{props.title}</h2>
        <a onClick={props.viewAll} className='btn btn-outline-danger' style={{height: 28, lineHeight: 1,color: '#FF2449', textDecorationLine: 'none', fontSize: '14px', display: 'inline-block', fontWeight: 'bold', backgroundColor: 'transparent'}}>{props.buttonText}</a>
      </div>
      <p>{props.desc}</p>
      <div className="row mt-3">
        {
          props.data?.map((item, key) => {
            return(
              <ListGameCard key={key} item={item}/>
            )
          })  
        }
      </div>
    </div>
  )
}

function MainContent()
{
  return(
    <>
      <Section title="Latest Featured Games"
      buttonText = "View all -->"
      viewAll={() => {}} 
      data={[
        {
          title : "Sushi For Robots",
          price : "$4.99",
          desc  : "These robots are obsessed with sushi and you’re the one serving it to them.",
          image : "https://img.itch.zone/aW1nLzEzMDExMDQxLnBuZw==/300x240%23c/7pDfib.png",
          onclick : () => {}
        },
        {
          title : "Asgard's Fall",
          price : "WEB",
          desc  : "Arena-Shooter-Roguelite in early development",
          image : "https://img.itch.zone/aW1nLzEzMDEwMjIzLnBuZw==/300x240%23c/N0UFn4.png",
          onclick : () => {}
        },
        {
          title : "Frog's Adventure",
          price : "$5",
          desc  : "Hand-drawn point-and-click adventure",
          image : "https://img.itch.zone/aW1nLzEyOTQxNDczLnBuZw==/300x240%23c/5La17l.png",
          onclick : () => {}
        },
        {
          title : "Tail & Trails",
          price : "$5",
          desc  : "Take your pet for a walk to Sunset Peak.",
          image : "https://img.itch.zone/aW1nLzEyOTUwMDMyLnBuZw==/300x240%23c/bos%2BRK.png",
          onclick : () => {}
        },
        {
          title : "HUNTERS",
          price : "FREE",
          desc  : "STOMPIN' MECH SQUAD",
          image : "https://img.itch.zone/aW1nLzEyODQwMDU5LnBuZw==/300x240%23c/urIR3O.png",
          onclick : () => {}
        },
        {
          title : "eelbay",
          price : "WEB",
          desc  : "Mix and match cute eels to fulfill deliveries!",
          image : "https://img.itch.zone/aW1nLzEyMDQ0NzczLnBuZw==/300x240%23c/6U7G%2Fl.png",
          onclick : () => {}
        },
        {
          title : "Serum Run",
          price : "WEB",
          desc  : "A dogsled Oregon Trail-like originally made in 48 hours.",
          image : "https://img.itch.zone/aW1nLzEyMDMwMzYzLnBuZw==/300x240%23c/qfv291.png",
          onclick : () => {}
        },
        {
          title : "Time Bandit -  Part 1: Appendages of the Machine",
          price : "$8.99",
          desc  : "A real-time adventure game with a dark secret. Uncover a capitalist conspiracy and steal back your time.",
          image : "https://img.itch.zone/aW1nLzEyNjk2MzI4LnBuZw==/300x240%23c/o7klhq.png ",
          onclick : () => {}
        },
        {
          title : "WORDWARD DRAW",
          price : "WEB",
          desc  : "explore 4 letter words",
          image : "https://img.itch.zone/aW1nLzEyNTY2MDQyLmdpZg==/300x240%23cm/6vIad7.gif",
          onclick : () => {}
        },
        {
          title : "Princess Paladin",
          price : "WEB",
          desc  : "A dungeon crawler where you are the minion!",
          image : "https://img.itch.zone/aW1nLzEyNzA0MTgxLnBuZw==/300x240%23c/CK4xdO.png",
          onclick : () => {}
        },
        {
          title : "Inside Job",
          price : "WEB",
          desc  : "A reverse tower defense",
          image : "https://img.itch.zone/aW1nLzEyNzM4NTAwLnBuZw==/300x240%23c/NiPoL9.png",
          onclick : () => {}
        },
        {
          title : "Ducky's Delivery Service",
          price : "$9.99",
          desc  : "Propeller-powered duck delivery action!",
          image : "https://img.itch.zone/aW1nLzExNTM4NzQ4LmdpZg==/300x240%23cm/oX%2Blyk.gif",
          onclick : () => {}
        },
        {
          title : "Roto Force",
          price : "$8",
          desc  : "Fight frantic bosses while shooting and dashing",
          image : "https://img.itch.zone/aW1nLzEyODQ3NzIxLmdpZg==/300x240%23cm/PQMVDQ.gif",
          onclick : () => {}
        },
        ,
        {
          title : "Underlevel",
          price : "WEB",
          desc  : "Try your best to not get ground into XP by a player raiding the dungeon!",
          image : "https://img.itch.zone/aW1nLzEyNzU0MTE5LnBuZw==/300x240%23c/MW5%2BSa.png",
          onclick : () => {}
        },
        {
          title : "Inventory The Hero",
          price : "WEB",
          desc  : "You're not a hero, you're his backpack!",
          image : "https://img.itch.zone/aW1nLzEyNzI0MTI2LnBuZw==/300x240%23c/fps%2FAp.png",
          onclick : () => {}
        }
      ]}
      />
      <Section title="Fresh Games"
      buttonText="View more -->"
      desc = "Constantly updating with the latest games on itch.io"
      viewAll={() => {}} 
      data={[
        {
          title : "Halfway to Dawn (Playdate)",
          price : "$5",
          desc  : "A cinematic short narrative/arcade horror game for the Playdate",
          image : "https://img.itch.zone/aW1nLzEyMDk0MTMwLnBuZw==/300x240%23c/NSBd44.png",
          onclick : () => {}
        },
        {
          title : "King of Tiny Mountain",
          price : "FREE",
          desc  : "Single-Screen 3D Platformer/Twin-Stick Shooter [LD JAM #38]",
          image : "https://img.itch.zone/aW1hZ2UvMTM3NTgyLzYyOTczNC5naWY=/300x240%23cm/F5%2BAxy.gif",
          onclick : () => {}
        },
        {
          title : "TUMBLE TUNDRA",
          price : "WEB",
          desc  : "A Foddian Platformer",
          image : "https://img.itch.zone/aW1nLzExNDAzMzQzLnBuZw==/300x240%23c/GeEB9h.png",
          onclick : () => {}
        },
        {
          title : "little warioware",
          price : "WEB",
          desc  : "A collectively developed take on Nintendo's WarioWare series, made in Godot Engine",
          image : "https://img.itch.zone/aW1nLzExODExNTQ3LnBuZw==/300x240%23c/%2BSsmT0.png",
          onclick : () => {}
        },
        {
          title : "ABGEFAHREN",
          price : "FREE",
          desc  : "Die Bahn, sie kommt nicht",
          image : "https://img.itch.zone/aW1nLzEyNzE0NDExLmpwZw==/300x240%23c/J%2FRQtq.jpg",
          onclick : () => {}
        },
        {
          title : "Pulse Codex EP",
          price : "$3.99",
          desc  : "esoteric videogame",
          image : "https://img.itch.zone/aW1nLzEwNDM0MzkxLnBuZw==/300x240%23c/7vrDrT.png",
          onclick : () => {}
        },
        {
          title : "Vergilius",
          price : "FREE",
          desc  : "",
          image : "https://img.itch.zone/aW1nLzEwMjI3NTA0LnBuZw==/300x240%23c/D8WgAP.png",
          onclick : () => {}
        },
        {
          title : "Self-Checkout Unlimited",
          price : "$7.99",
          desc  : "Explore and unravel the mall of your mind.",
          image : "https://img.itch.zone/aW1nLzQyMzg3MjQuanBn/300x240%23c/vOCri%2F.jpg",
          onclick : () => {}
        },
        {
          title : "Gulch Guardians",
          price : "WEB",
          desc  : "cute + tough card tactics autobattles",
          image : "https://img.itch.zone/aW1nLzEyOTExNTAzLnBuZw==/300x240%23c/5EoWuf.png",
          onclick : () => {}
        },
        {
          title : "Just Keep Running",
          price : "FREE",
          desc  : "Run, leap, and uncover the truth in an adrenaline-fueled parkour odyssey.",
          image : "https://img.itch.zone/aW1nLzEyOTkyMjA1LmdpZg==/300x240%23cm/Sa6XGa.gif",
          onclick : () => {}
        },
        {
          title : "WordHopper",
          price : "$1",
          desc  : "A stylish arcade-like word game for DOS (and more)",
          image : "https://img.itch.zone/aW1nLzEyODMzNDc1LnBuZw==/300x240%23c/AC3SFX.png",
          onclick : () => {}
        },
        {
          title : "The Dragnet Case Re-Release",
          price : "FREE",
          desc  : "A Sam Boon adventure",
          image : "https://img.itch.zone/aW1nLzExMDIxNzQyLnBuZw==/300x240%23c/qAvTXY.png",
          onclick : () => {}
        }
        ,
        {
          title : "A Circle of Charity",
          price : "WEB",
          desc  : "old memories rot away",
          image : "https://img.itch.zone/aW1nLzExMTgwMjUwLmdpZg==/300x240%23cm/fZnuyI.gif",
          onclick : () => {}
        }
        ,
        {
          title : "UVSU",
          price : "WEB",
          desc  : "Outsmart yourself",
          image : "https://img.itch.zone/aW1nLzEyNzU5ODAxLnBuZw==/300x240%23c/flhgAf.png",
          onclick : () => {}
        }
        ,
        {
          title : "Roulette Knight (Ludum Dare 41)",
          price : "WEB",
          desc  : "A Sam Boon adventure",
          image : "https://img.itch.zone/aW1hZ2UvMjUwODk1LzExOTkyNzcuanBn/300x240%23c/p4WN%2Bu.jpg",
          onclick : () => {}
        }
      ]}
      />
      <SectionGameJam title="Featured jams"
      buttonText="View all jams -->"
      viewAll={() => {}} 
      data={[
        {
          title : "Game Off 2023",
          desc  : "GitHub Game Off runs for the entire month of November",
          member : "2,725 joined",
          image : "https://img.itch.zone/aW1nLzExMDYyODU0LnBuZw==/300x240%23c/MyCfPC.png",
          onclick : () => {}
        },
        {
          title : "1-BIT JAM",
          member : "2,104 joined",
          desc  : "Create a game with only two colors",
          image : "https://img.itch.zone/aW1nLzEyNjIwNDI1LmdpZg==/300x240%23cm/uXrnmb.gif",
          onclick : () => {}
        },
        {
          title : "GBJam11",
          member : "1,287 joined",
          desc  : "Gameboy Style Games!",
          image : "https://img.itch.zone/aW1nLzEyOTkxNTcwLnBuZw==/300x240%23c/sjFx3I.png",
          onclick : () => {}
        },
        {
          title : "💀 SCREAM JAM 2023 💀",
          member : "1,199 joined",
          desc  : "THE HORRIFICALLY WONDERFUL HORROR JAM RETURNS",
          image : "https://img.itch.zone/aW1nLzEwOTg1Mzc2LnBuZw==/300x240%23c/RM7AoD.png",
          onclick : () => {}
        },
        {
          title : "LOWREZJAM 2023",
          member : "1,140 joined",
          desc  : "Make a game at 64x64 resolution or lower!",
          image : "https://img.itch.zone/aW1nLzEyNjc3MDA3LnBuZw==/300x240%23c/WW12Mw.png",
          onclick : () => {}
        },
        {
          title : "GDevelop BIG Game Jam #4",
          member : "940 joined",
          desc  : "Prizes, Goodies, Fun Games and More with GDevelop's 4th Official Big Jam!",
          image : "https://img.itch.zone/aW1nLzEyNjU1ODEyLnBuZw==/300x240%23c/8gjn0Y.png",
          onclick : () => {}
        },
        {
          title : "Summer Slow Jams 2023: Crafting",
          member : "490 joined",
          desc  : "Make a craftting game in just over two weeks!",
          image : "https://img.itch.zone/aW1nLzEyMTg2NTExLnBuZw==/300x240%23c/H2dQss.png",
          onclick : () => {}
        },
        {
          title : "Metroidvania Month 21",
          member : "301 joined",
          desc  : "A month-long metroidvania game jam!",
          image : "https://img.itch.zone/aW1nLzEyNjg3NzE3LnBuZw==/300x240%23c/iCtGTb.png",
          onclick : () => {}
        },
        {
          title : "SuNoFes 2023",
          member : "114 joined",
          desc  : "Focuses on visual novels and story-based games.",
          image : "https://img.itch.zone/aW1nLzEyODA1MDcyLnBuZw==/300x240%23c/dFyfCM.png",
          onclick : () => {}
        },
        {
          title : "Gamedev.js Jam 2024",
          member : "86 joined",
          desc  : "Let's build Web games together!",
          image : "https://img.itch.zone/aW1nLzEyMTM5NjQ0LnBuZw==/300x240%23c/UzhVeG.png",
          onclick : () => {}
        },
      ]}
      />
      <Section title="More Featured Games"
      data={[
        {
          title : "LCD, Please",
          price : "FREE",
          desc  : "Passport Control in Your Pocket",
          image : "https://img.itch.zone/aW1nLzEzMDQ3OTg2LnBuZw==/300x240%23c/V0Gppo.png",
          onclick : () => {}
        },
        {
          title : "I Want to Pursue the Mean Side Character!",
          desc  : "She's pretty cute.",
          price : "FREE",
          image : "https://img.itch.zone/aW1nLzY2ODI1NTcucG5n/300x240%23c/Y5036a.png",
          onclick : () => {}
        },
        {
          title : "Tatami Road - Japanese immersive language learning RPG game",
          price : "FREE",
          desc  : "RPG style Japanese language learning resource",
          image : "https://img.itch.zone/aW1nLzM4OTczOTQucG5n/300x240%23c/Np%2BuK7.png",
          onclick : () => {}
        },
        {
          title : "Pink Jelly DX",
          price : "WEB",
          desc  : `An expanded version of the iconic "walking to the right" simulator`,
          image : "https://img.itch.zone/aW1nLzEzMDA2NTc4LnBuZw==/300x240%23c/XESNqE.png",
          onclick : () => {}
        },
        {
          title : "Shrug Island - The Meeting",
          price : "$9.99",
          desc  : "A warmly wistful adventure about reconnecting nature, friendship and hidden pasts",
          image : "https://img.itch.zone/aW1hZ2UvMjQ0MzAxLzEyMTAzMjQuZ2lm/300x240%23cm/SaiDpu.gif",
          onclick : () => {}
        },
        {
          title : "Powerful Wind, Slicked-back Cabbages",
          price : "WEB",
          desc  : "Slice cabbages to the rythim of Powerful Wind, Slicked-back Hair by Yukopi",
          image : "https://img.itch.zone/aW1nLzEzMDMzOTgyLnBuZw==/300x240%23c/TXskvY.png",
          onclick : () => {}
        },
        {
          title : "The Bibites",
          price : "FREE",
          desc  : "A dive into real digital life",
          image : "https://img.itch.zone/aW1nLzg0MjkyNjMuanBn/300x240%23c/E4nXmI.jpg",
          onclick : () => {}
        },
        {
          title : "Punch-Out!! 2600",
          price : "FREE",
          desc  : "Punch-Out demake on the Atari 2600",
          image : "https://img.itch.zone/aW1nLzExNzIyMzkwLnBuZw==/300x240%23c/Jnm4da.png",
          onclick : () => {}
        },
        {
          title : "What Sprouts in the Dark",
          price : "WEB",
          desc  : "A beautifully illustrated text adventure about a cat, a spaceship, and an invasion of hyper-intelligent fungi.",
          image : "https://img.itch.zone/aW1nLzEyMzk4MzA1LnBuZw==/300x240%23c/0%2BOiq7.png",
          onclick : () => {}
        },
        {
          title : "Flippy Bird",
          price : "$1",
          desc  : "Turn crank for a present",
          image : "https://img.itch.zone/aW1nLzEyOTM2NDEyLmdpZg==/300x240%23cm/On1X52.gif",
          onclick : () => {}
        },
        {
          title : "Murtop",
          price : "$4.99",
          desc  : "A fast-paced 80's arcade-style game where Dig Dug meets Bomberman.",
          image : "https://img.itch.zone/aW1nLzExOTcxMzMwLmpwZw==/300x240%23c/q%2BHAID.jpg",
          onclick : () => {}
        },
        {
          title : "Speccy Soccer Community Edition 2023",
          price : "FREE",
          desc  : "The best footy game for your zx spectrum.",
          image : "https://img.itch.zone/aW1nLzExODI3OTAyLmdpZg==/300x240%23cm/5i5NFN.gif",
          onclick : () => {}
        },
        {
          title : "Exophilie",
          price : "FREE",
          desc  : "Cognisensory Training",
          image : "https://img.itch.zone/aW1nLzExNTc2NTkwLnBuZw==/300x240%23c/3VVYsK.png",
          onclick : () => {}
        },
        {
          title : "The Telwynium: Book Three",
          price : "FREE",
          desc  : "A Cosy 90s Fantasy Adventure",
          image : "https://img.itch.zone/aW1nLzEyNDI4MTA5LmdpZg==/300x240%23cm/Z4GM2j.gif",
          onclick : () => {}
        },
        {
          title : "Who's Lila?",
          price : "$11.99",
          desc  : "A reverse-detective adventure, where you control your character's face",
          image : "https://img.itch.zone/aW1nLzgyMTU2MjIuZ2lm/300x240%23cm/bQeXaS.gif",
          onclick : () => {}
        },
        {
          title : "Rhythm Hell",
          price : "FREE",
          desc  : "The best footy game for your zx spectrum.",
          image : "https://img.itch.zone/aW1nLzEyNjg4MjY2LnBuZw==/300x240%23c/X3O4qh.png",
          onclick : () => {}
        },
        {
          title : "Sticky Business [OUT NOW]",
          price : "$9.99",
          desc  : "Wholesome, cozy, sticky!",
          image : "https://img.itch.zone/aW1nLzEyMDcxNDU3LnBuZw==/300x240%23c/KZydbY.png",
          onclick : () => {}
        },
        {
          title : "NEUROCRACY 2.049",
          price : "FREE",
          desc  : "Solve a murder by diving in the Wikipedia of the future",
          image : "https://img.itch.zone/aW1nLzEyNzkzNTI4LnBuZw==/300x240%23c/Rc5QA%2F.png",
          onclick : () => {}
        },
        {
          title : "Underground Blossom",
          price : "FREE",
          desc  : "Travel through the life and memories of Laura Vanderboom!",
          image : "https://img.itch.zone/aW1nLzExOTU4NjQzLnBuZw==/300x240%23c/uuNIUU.png",
          onclick : () => {}
        },
        {
          title : "Indiepocalypse #42",
          price : "$15",
          desc  : "Issue #42 of a monthly indie game anthology collecting games from 10 developers.",
          image : "https://img.itch.zone/aW1nLzEyNjcxNjUxLmdpZg==/300x240%23cm/QiOQaq.gif",
          onclick : () => {}
        },
        {
          title : "A Long Journey to an Uncertain End",
          price : "$24.99",
          desc  : "",
          image : "https://img.itch.zone/aW1nLzEyNTk3MzEyLnBuZw==/300x240%23c/nsy5XE.png",
          onclick : () => {}
        },
        {
          title : "Communite",
          price : "FREE",
          desc  : "A Creative Multiplayer City-Builder for communities to build their perfect world together!",
          image : "https://img.itch.zone/aW1nLzEyODY1OTEzLnBuZw==/300x240%23c/0ephlm.png",
          onclick : () => {}
        },
        {
          title : "Space Warlord Organ Trading Simulator",
          price : "$19.99",
          desc  : "Dive into the quivering innards of alien capitalism in a bold new sci-fi body horror market tycoon.",
          image : "https://img.itch.zone/aW1nLzEyNjAyNjAyLnBuZw==/300x240%23c/nAOpjp.png",
          onclick : () => {}
        },
        {
          title : "sin(e)s",
          price : "FREE",
          desc  : "Interactive experience that simulates the aftermath of catastrophic earthquakes.",
          image : "https://img.itch.zone/aW1nLzEyNTYyODYzLmdpZg==/300x240%23cm/q5tasW.gif",
          onclick : () => {}
        },
        {
          title : "Shards of God",
          price : "FREE",
          desc  : "Name of the Rose meets Dune in a point and click murder mystery",
          image : "https://img.itch.zone/aW1nLzEyNDI4MjA5LnBuZw==/300x240%23c/5Txov2.png",
          onclick : () => {}
        }
      ]}
      />
    </>
  )
}

function FooterIntro(props)
{
  return(
    <div className="d-flex justify-content-center align-items-center" style={{fontSize: '16px', padding: '20px 0', marginBottom: '20px'}}>
      <strong className='' style={{textAlign: 'center', fontSize: '16px'}}>Don't see anything you like?</strong>
      <a onClick={props.viewAll} className='btn btn-outline-danger rounded-1' style={{fontFamily: 'Lato', height: '35px', lineHeight: '20px',color: '#FF2449', textDecorationLine: 'none', fontSize: '14px', fontWeight: 'bold', backgroundColor: 'transparent', marginLeft: '10px', textShadow: 'none'}}>View all games <i style={{fontWeight: 'bold'}} className="bi bi-arrow-right" ></i></a>
      <a onClick={props.viewAll} className='btn btn-outline-danger rounded-1' style={{fontFamily: 'Lato', height: '35px', lineHeight: '20px',color: '#FF2449', textDecorationLine: 'none', fontSize: '14px', fontWeight: 'bold', backgroundColor: 'transparent', marginLeft: '10px', textShadow: 'none'}}>View something random <i style={{fontWeight: 'bold'}} className='bi bi-shuffle'></i></a>
    </div>
  )
}

function FooterSocial(props)
{
  return (
    <div className="d-flex justify-content-center align-items-center" style={{}}>
      <a href="" style={{fontSize: 15, color:'#858585', padding: '0 15px'}} className=''>
        <i style={{fontSize: 20}} className={props.icon}></i>
      </a>
    </div>
  )
}

function FooterMain()
{
  const currentYear = new Date().getFullYear();

  return(
    <div className='' style={{margin : '', padding: '20px 20px 20px 20px', textShadow: 'none', fontSize: 14, backgroundColor: '#f4f4f4'}}>
      <div className="" style={{textShadow: 'none', fontSize: 14, display: 'block'}}>
        <div className='d-flex justify-content-center align-items-center' id='footer-atas'>
            <FooterSocial icon="bi bi-twitter"/>
            <FooterSocial icon="bi bi-facebook"/>
          <a href="" style={{fontSize: 14, color:'#858585', padding: '0 15px', textDecorationLine: 'none', fontWeight: 'bold'}} className=''>
            ABOUT
          </a>
          <a href="" style={{fontSize: 14, color:'#858585', padding: '0 15px', textDecorationLine: 'none', fontWeight: 'bold'}} className=''>
            FAQ
          </a>
          <a href="" style={{fontSize: 14, color:'#858585', padding: '0 15px', textDecorationLine: 'none', fontWeight: 'bold'}} className=''>
            BLOG
          </a>
          <a href="" style={{fontSize: 14, color:'#858585', padding: '0 15px', textDecorationLine: 'none', fontWeight: 'bold'}} className=''>
            CONTACT US
          </a>
        </div>
        <div className="d-flex justify-content-center align-items-center" id='footer-bawah' style={{marginTop: '10px', lineHeight: '25px'}}>
          <span style={{fontSize: 14, color:'#858585'}}> Copyright &copy; {currentYear} itch corp</span>
          <span style={{fontSize: 14, color:'#858585', margin: '0 10px'}}>·</span>
          <a href="" style={{fontSize: 14, color:'#858585'}} className=''>Directory</a>
          <span style={{fontSize: 14, color:'#858585', margin: '0 10px'}}>·</span>
          <a href="" style={{fontSize: 14, color:'#858585'}} className=''>Terms</a>
          <span style={{fontSize: 14, color:'#858585', margin: '0 10px'}}>·</span>
          <a href="" style={{fontSize: 14, color:'#858585'}} className=''>Privacy</a>
          <span style={{fontSize: 14, color:'#858585', margin: '0 10px'}}>·</span>
          <a href="" style={{fontSize: 14, color:'#858585'}} className=''>Cookies</a>
        </div>
      </div>
    </div>
  )
}

export default App;