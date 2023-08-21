import { useState } from 'react';

function MiddleSideBar()
{
  const [togglePlay, setTogglePlay] = useState(false);
  
  return(
    <div className="mt-4 mb-4 align-items-center">
      <div className="d-flex justify-content-center ">
        <MiddleLabbleTag icon="bi bi-reddit" navigate="https://www.reddit.com/r/itchio/"/>
        <MiddleLabbleTag icon="bi bi-facebook" navigate="https://www.facebook.com/itchiogames"/>
        <MiddleLabbleTag icon="bi bi-twitter" navigate="https://twitter.com/itchio"/>

        <div className="mx-1">
          <div onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)}>
            <a href="" style={{fontSize: '13px', color: togglePlay ? '#ff2449' : '#222222', opacity: 0.8, textDecorationLine: 'none'}} className='p-1'>Download app</a>
          </div>
        </div>
      </div>
    </div>
  )
}

function MiddleLabbleTag(props)
{
  const [togglePlay, setTogglePlay] = useState(false);

  return(
    <>
      <div className="d-flex" key={props.key}>
        <div onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)}>
          <a href={props.navigate} style={{fontSize: '14px', color: togglePlay ? '#ff2449' : '#222222', opacity: 0.8, textDecorationLine: togglePlay ? 'underline' : 'none'}} className='p-1'>
            <i style={{fontSize: 18}} className={props.icon}></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default MiddleSideBar
