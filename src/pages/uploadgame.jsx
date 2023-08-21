import uploadgif from '../assets/upload-gif.gif';

import { useNavigate } from "react-router-dom"
import FooterMain from "../components/footer/footermain"
import NavigationBar from "../components/navbar"
import { useState } from 'react';

function UploadGame()
{
    return(
        <>
            <NavigationBar/>
            <div style={{backgroundColor: "black", height: '100%', width: '100%'}}>
                <MainUploadGame/>
            </div>
            <FooterMain/>
        </>
    )
}

function MainUploadGame()
{
    const navigate = useNavigate()
    const [toggle, setToggle] = useState()
    const [toggle2, setToggle2] = useState()
    const [toggle3, setToggle3] = useState()
    const [toggle4, setToggle4] = useState()
    const [toggle5, setToggle5] = useState()
    
    return(
        <>
            <div id='bg-awal'>    
                <div style={{padding: '40px 0px'}}>
                    <div style={{position: "relative", width: '960px', margin: '0 auto'}}>
                        <h1 style={{color: "white", textAlign: "center", fontSize: 48, margin: '0 auto 40px auto', maxWidth: '800px', fontWeight: 900}}>
                            Create a custom page to instantly distribute or sell your indie games
                        </h1>
                        <div className="d-flex align-items-center" style={{gap: 20}}>
                            <div style={{padding: '10px 0', color: "white"}}>
                                <p style={{fontSize: 18, margin: 0, marginBottom: '20px', lineHeight: 1.5}}>
                                    <strong>itch.io </strong>is a simple way to distribute your indie games online for free. Upload your game files and screenshots all to one place. Create a customized landing page where your game is the focus.
                                </p>
                                <p style={{fontSize: 18, margin: 0, marginBottom: '20px', lineHeight: 1.5}}>
                                    You can even set a minimum price for your game, giving fans the opportunity to pay what they want for your game.
                                </p>
                                <div style={{display: "flex", alignItems: "center", fontSize: 16, gap: 10}}>
                                    <button onClick={ () => navigate('/register') } className='btn btn-danger rounded-1' style={{fontSize: 18, letterSpacing: '0.025em', fontWeight: 900, height: 40, padding: '0 20px', color: "white"}}>Create an account now </button> or 
                                    <a href="/user/forgor-password" style={{color: 'white'}}> Read the FAQ</a>
                                </div>
                            </div>
                            <div >
                                <div style={{position: "relative", width: '430', height: '263', overflow: "hidden"}}>
                                    <img width="430" height="263" src={uploadgif} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="d-flex justify-content-center" width="960" style={{margin: '0px auto', backgroundColor: '#F4F4F4'}}>
                    <div className='' style={{padding: '20px 0px 0px 0px', fontFamily: 'Lato', fontStyle: "normal"}}>
                        <div className="card rounded-1 shadow-sm " style={{width: '60rem', padding: '35px' }}>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-bottom-0" style={{paddingBottom: '40px', fontSize: 16, textAlign: 'center'}}>
                                    <strong>Learn more about:</strong>
                                    <a onMouseOver={() => setToggle(true)} onMouseOut={() => setToggle(false)} href="" style={{boxSizing: 'border-box', display: 'inline-block', borderRadius: '3px', textDecorationLine: 'none', padding: '1px 10px', fontSize: 14, letterSpacing: '0.025em', whiteSpace: 'nowrap', border: '1px solid', backgroundColor: toggle ? '#ff2449' : 'white', color: toggle? 'white' : '#434343', margin: '0px 10px', borderColor: '#e3e3e3'}}>Pricing</a>
                                    <a onMouseOver={() => setToggle2(true)} onMouseOut={() => setToggle2(false)} href="" style={{boxSizing: 'border-box', display: 'inline-block', borderRadius: '3px', textDecorationLine: 'none', padding: '1px 10px', fontSize: 14, letterSpacing: '0.025em', whiteSpace: 'nowrap', border: '1px solid', backgroundColor: toggle2 ? '#ff2449' : 'white', color: toggle2? 'white' : '#434343', margin: '0px 10px', borderColor: '#e3e3e3'}}>Sale</a>
                                    <a onMouseOver={() => setToggle3(true)} onMouseOut={() => setToggle3(false)} href="" style={{boxSizing: 'border-box', display: 'inline-block', borderRadius: '3px', textDecorationLine: 'none', padding: '1px 10px', fontSize: 14, letterSpacing: '0.025em', whiteSpace: 'nowrap', border: '1px solid', backgroundColor: toggle3 ? '#ff2449' : 'white', color: toggle3? 'white' : '#434343', margin: '0px 10px', borderColor: '#e3e3e3'}}>Bundles</a>
                                    <a onMouseOver={() => setToggle4(true)} onMouseOut={() => setToggle4(false)} href="" style={{boxSizing: 'border-box', display: 'inline-block', borderRadius: '3px', textDecorationLine: 'none', padding: '1px 10px', fontSize: 14, letterSpacing: '0.025em', whiteSpace: 'nowrap', border: '1px solid', backgroundColor: toggle4 ? '#ff2449' : 'white', color: toggle4? 'white' : '#434343', margin: '0px 10px', borderColor: '#e3e3e3'}}>Widgets</a>
                                    <a onMouseOver={() => setToggle5(true)} onMouseOut={() => setToggle5(false)} href="" style={{boxSizing: 'border-box', display: 'inline-block', borderRadius: '3px', textDecorationLine: 'none', padding: '1px 10px', fontSize: 14, letterSpacing: '0.025em', whiteSpace: 'nowrap', border: '1px solid', backgroundColor: toggle5 ? '#ff2449' : 'white', color: toggle5? 'white' : '#434343', margin: '0px 10px', borderColor: '#e3e3e3'}}>Game jams</a>
                                </li>
                                <li className="d-flex align-items-center list-group-item" style={{gap: '40px'}}>
                                    <img style={{border: '1px solid #e7e7e7', borderRadius: '2px'}} width="450" height="250" src='https://commondatastorage.googleapis.com/itchio/static/images/landing_images/edit-game-2018-small.png' alt=""/>
                                    <div style={{flex: 1, minWidth: '0'}}>
                                        <h3 className="d-flex align-items-center" style={{fontSize: 28, margin: 0, fontWeight: 900, color: '#434343'}}>
                                            <i className="bi bi-box-arrow-in-down" style={{fontSize: 28, marginRight: '8px', color: '#434343'}}></i>
                                            Upload Your Indie Game
                                        </h3>
                                        <p style={{color: '#606060', fontSize: 16, lineHeight: 1.5, marginTop: '15px'}}>
                                            Upload your indie game to <strong>itch.io</strong> for free. We host your game, along with your game's screenshots and other downloads. Your downloads are always available and always fast.
                                        </p>
                                    </div>
                                </li>
                                <div style={{width: '400px', margin: '40px auto', borderTop: '1px solid', borderColor: '#dadada'}}>

                                </div>
                                <li className="d-flex align-items-center list-group-item" style={{gap: '40px'}}>
                                    <div style={{flex: 1, minWidth: '0'}}>
                                        <h3 className="d-flex align-items-center" style={{fontSize: 28, margin: 0, fontWeight: 900, color: '#434343'}}>
                                            <i className="bi bi-heart" style={{fontSize: 28, marginRight: '8px', color: '#434343'}}></i>
                                            Design Your Game's Page
                                        </h3>
                                        <p style={{color: '#606060', fontSize: 16, lineHeight: 1.5, marginTop: '15px'}}>
                                            Create a custom page for your game where people buy or download your game. You pick the colors, fonts, images and videos. Because it's your game page you won't find anything on it that you didn't put there.
                                        </p>
                                    </div>
                                    <img style={{border: '1px solid #e7e7e7', borderRadius: '2px'}} width="450" height="250" src='https://commondatastorage.googleapis.com/itchio/static/images/landing_images/edit-theme-2018-small.png?2' alt=""/>
                                </li>
                                <div style={{width: '400px', margin: '40px auto', borderTop: '1px solid', borderColor: '#dadada'}}>
                                    
                                </div>
                                <li className="d-flex align-items-center list-group-item" style={{gap: '40px'}}>
                                    <img style={{border: '1px solid #e7e7e7', borderRadius: '2px'}} width="450" height="250" src='https://commondatastorage.googleapis.com/itchio/static/images/landing_images/game_summary-small.png' alt=""/>
                                    <div style={{flex: 1, minWidth: '0'}}>
                                        <h3 className="d-flex align-items-center" style={{fontSize: 28, margin: 0, fontWeight: 900, color: '#434343'}}>
                                            <i className="bi bi-currency-dollar" style={{fontSize: 28, marginRight: '8px', color: '#434343'}}></i>
                                            Track Your Game
                                        </h3>
                                        <p style={{color: '#606060', fontSize: 16, lineHeight: 1.5, marginTop: '15px'}}>
                                        Keep tabs on how people are viewing your game with detailed analytics covering views, downloads and purchases. Want to run a promotion? Generate download keys to give people access to your game.
                                        </p>
                                    </div>
                                </li>  
                                <div style={{width: '400px', margin: '40px auto', borderTop: '1px solid', borderColor: '#dadada'}}>
                                    
                                </div>
                                <li className="d-flex align-items-center list-group-item" style={{gap: '40px'}}>
                                    <div style={{flex: 1, minWidth: '0'}}>
                                        <h3 className="d-flex align-items-center" style={{fontSize: 28, margin: 0, fontWeight: 900, color: '#434343'}}>
                                            <i className="bi bi-heart" style={{fontSize: 28, marginRight: '8px', color: '#434343'}}></i>
                                            Flash, Unity, Java, HTML5
                                        </h3>
                                        <p style={{color: '#606060', fontSize: 16, lineHeight: 1.5, marginTop: '15px'}}>
                                            Make money from your browser game by hosting it on <strong>itch.io.</strong> Your game is embedded in the browser and players can donate any amount they want if they love your game.
                                        </p>
                                    </div>
                                    <img style={{border: '1px solid #e7e7e7', borderRadius: '2px'}} width="450" height="250" src='https://commondatastorage.googleapis.com/itchio/static/images/landing_images/unity_flash.png' alt=""/>
                                </li> 
                                <div style={{width: '400px', margin: '40px auto', borderTop: '1px solid', borderColor: '#dadada'}}>
                                    
                                </div>
                                <li className="d-flex align-items-center list-group-item" style={{gap: '40px', marginBottom: '40px'}}>
                                    <img style={{border: '1px solid #e7e7e7', borderRadius: '2px', position: 0.25}} width="450" height="250" src='https://commondatastorage.googleapis.com/itchio/static/images/landing_images/new_sale-small.png' alt=""/>
                                    <div style={{flex: 1, minWidth: '0'}}>
                                        <h3 className="d-flex align-items-center" style={{fontSize: 28, margin: 0, fontWeight: 900, color: '#434343'}}>
                                            <i className="bi bi-cart4" style={{fontSize: 28, marginRight: '8px', color: '#434343'}}></i>
                                            Host A Sale
                                        </h3>
                                        <p style={{color: '#606060', fontSize: 16, lineHeight: 1.5, marginTop: '15px'}}>
                                        Promote your games and get more purchases by offering your games at a discounted price for any period of time.
                                        </p>
                                        <p>
                                            <a href="" style={{color: '#da2c49', marginRight: '3px'}}>Learn More</a>
                                            <i style={{color: '#da2c49'}} className="bi bi-arrow-right" ></i>                                        </p>
                                    </div>
                                </li>  
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadGame