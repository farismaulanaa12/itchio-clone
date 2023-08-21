import { useState } from "react";

function  GameOfToday()
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
            <a href="/developers" className='' style={{color: '#ff2449'}}>Add your game </a>
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
          <div className="embed-responsive embed-responsive-16by9">
            <iframe width="470" height="264" className="embed-responsive-item" src="https://www.youtube.com/embed/bO6ZIrYQkJk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            <div className='mx-2 text-center'>
              <a onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)} style={{fontSize: '15px', color: togglePlay ? '#fff' : "#b8b8b8", textDecorationLine: 'none', fontWeight: 'bold'}} href='https://www.youtube.com/itchiogames'>See more on itch.io's Youtube <i style={{fontSize: 14} }className="bi bi-box-arrow-up-right"></i> </a>
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

export default GameOfToday