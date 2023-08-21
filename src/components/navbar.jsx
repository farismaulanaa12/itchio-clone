import gambar from '../assets/logo.png'

import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

function NavigationBar()
{
  const navigate = useNavigate() 

  const [togglePlay, setTogglePlay] = useState(false);
  const [togglePlay2, setToggle] = useState(false);

  return(
    <>
      <nav className="navbar navbar-expand-lg shadow-sm bg-white" style={{fontFamily: 'Lato', fontWeight: 700, fontStyle: "normal", backgroundColor:"white", position: "sticky", top: "0px", zIndex: 99, marginRight:0}}>
        <div className="container-fluid">
            <a className="navbar-brand mx-3" href="/" ><img src={gambar} alt="" width="115" height="30"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link" aria-expanded="false" aria-haspopup="true" href='/games' data-bs-toggle="dropdown">Browse Games</a>
                  <div className="dropdown-menu rounded-0" aria-labelledby="navbarDropdown" id='drpdown'>
                    <ul>
                      <li><a className="dropdown-item" href="#">Indie game store</a></li>
                    </ul>
                    <ul>
                      <li><a className="dropdown-item" href="#">Free games</a></li>
                    </ul>
                    <ul>
                      <li><a className="dropdown-item" href="#">Horror games</a></li>
                    </ul>
                    <ul>
                      <li><a className="dropdown-item" href="#">Game development</a></li>
                    </ul>
                    <ul>
                      <li><a className="dropdown-item" href="#">Assets</a></li>
                    </ul>
                    <ul>
                      <li><a className="dropdown-item" href="#">Comics</a></li>
                    </ul>
                    <ul>
                      <li><a className="dropdown-item" href="#">Sales</a></li>
                    </ul>
                    <ul>
                      <li><a className="dropdown-item" href="#">Bundles</a></li>
                    </ul>
                    <ul>
                      <li><a className="dropdown-item" href="#">Jobs</a></li>
                    </ul>
                    <ul>
                      <li><a className="dropdown-item" href="#">Tags</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/jams">Game Jams</Link>
                </li>
                <li className="nav-item d-flex">
                <Link className="nav-link active" to="/developers"><i className="bi bi-upload mt-2 mx-1"></i>Upload Game</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/devlogs">Developer Log</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/community">Community</Link>
                </li>
                <div className="col mx-3 mt-1">
                  <div className="d-flex input-group-sm" role="search" style={{paddingTop: '10px'}}>
                    <input className="form-control border-0" type="search" placeholder="Search for games and creators" aria-label="Search" style={{position: "relative", width: "485px", backgroundColor: "#f4f4f4", outlineStyle:"none", paddingRight: "20"}}/>
                    <i className="bi bi-search btn-sm" style={{position: "absolute", zIndex: 2, right: 262, display: "block", width: "3.23rem", height:"3.23rem", lineHeight: "2rem", textAlign: "center", pointerEvents:"none"}}></i>
                  </div>
                </div>
              </ul>
              <div className="mx-4" style={{}}>
                <button onClick={() => navigate('/login')} onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)} className="btn btn-outline-secondary btn-sm mx-2 border-2" type="button" style= {{width: "70px", fontWeight: "bold", color: togglePlay ? 'red' : 'black', backgroundColor: 'transparent'}}>Log In</button>
                <button onClick={() => navigate('/register')} onMouseOver={() => setToggle(true)} onMouseOut={() => setToggle(false)} className="btn btn-outline-secondary btn-sm border-2" type="button" style={{width: "80px", fontWeight: "bold", color: togglePlay2 ? 'red' : 'black', backgroundColor: 'transparent'}}>Register</button>
              </div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default NavigationBar;