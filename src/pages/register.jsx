import gambar from '../assets/logo.png'

import FooterMain from '../components/footer/footermain'
import NavigationBar from '../components/navbar'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Register()
{
    return( 
        <>
            <NavigationBar/>
            <div style={{backgroundColor: "#F4F4F4", height: '100%', width: '100%'}}>
                <MainRegister />
            </div>
            <FooterMain />
        </>
    )
}

function MainRegister()
{
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)

    return(
        <div className='d-flex justify-content-center' style={{padding: '20px 20px 0px 20px', fontFamily: 'Lato', fontStyle: "normal"}}>
            <div className="card shadow-sm" style={{width: '60rem'}}>
                <div className="card-header bg-white" style={{padding: '30px 40px'}}>
                    <h5 style={{fontWeight: 900, margin: '0', color: '#434343'}}>Create an account on itch.io</h5>
                </div>
                <div className="card-body" style={{padding: '30px 40px', fontSize: 14}}>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex justify-content-center" style={{position: 'absolute', top: '10px', right: '10px'}}>
                                <button onMouseOver={() => setToggle(true)} onMouseOut={() => setToggle(false)} className='border-0' style={{backgroundColor: "transparent", position: 'relative', fontSize: 13}}> 
                                    <span style={{color: toggle ? '#ff2449' : 'inherit'}}>Other registration methods</span><i className="bi bi-chevron-down" style={{color: '#858585', marginTop: '2px', marginLeft: '5px'}}></i>
                                </button>
                            </div>
                            <div style={{marginBottom: '20px'}}>
                                <div className='label'style={{color : '#434343', fontWeight: 'bold'}}>Username</div>
                                <input autoFocus="true" type="text" style={{padding: '8px', margin: '6px 0', width: '100%'}}/>
                            </div>
                            <div style={{marginBottom: '20px', textAlign: 'center'}}>
                                <div className='label'style={{color : '#434343', fontWeight: 'bold'}}>Your profile page will be</div>
                                <input className="border-0 text-center" autoFocus="true" type="text" placeholder='http://username.itch.io/' style={{padding: '8px', margin: '6px 0', width: '100%', backgroundColor: '#F4F4F4', opacity: 0.5}}/>
                            </div>
                            <div style={{marginBottom: '20px'}}>
                                <div className='label'style={{color : '#434343', fontWeight: 'bold'}}>Password</div>
                                <input autoFocus="true" type="text" style={{padding: '8px', margin: '6px 0', width: '100%'}}/>
                            </div>
                            <div style={{marginBottom: '20px'}}>
                                <div className='label'style={{color : '#434343', fontWeight: 'bold'}}>Repeat Password</div>
                                <input autoFocus="true" type="text" style={{padding: '8px', margin: '6px 0', width: '100%'}}/>
                            </div>
                            <div style={{marginBottom: '20px'}}>
                                <div className='label'style={{color : '#434343', fontWeight: 'bold'}}>Your email address</div>
                                <input autoFocus="true" type="text" placeholder="name@example.com" style={{padding: '8px', margin: '6px 0', width: '100%'}}/>
                            </div>
                            <div style={{marginBottom: '20px', padding: '10px', border: '1px solid', borderRadius: '2px', borderColor: '#dadada'}}>
                                <strong style={{marginBottom: '10px', display: 'block', fontSize: 13}}>About you</strong>
                                <div style={{marginBottom: '10px'}} class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        I'm interested in playing or downloading games on itch.io
                                    </label>
                                </div>
                                <div style={{marginBottom: '10px'}} class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        I'm interested in distributing content on itch.io
                                    </label>
                                </div>
                                <p style={{margin: '0px', color: '#606060', lineHeight: 1.5, fontSize: 13}}>You can change your responses to these questions later, they are used to hint itch.io in how it should present itself to you.</p>
                            </div>
                            <div style={{marginBottom: '20px', fontSize: 14}} class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Sign me up for the bi-monthly itch.io digest newsletter
                                    </label>
                            </div>
                            <div style={{marginBottom: '20px', fontSize: 14}} class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        I accept the <a href="" style={{color: '#da2c49'}}> Terms of Service</a>
                                    </label>
                            </div>
                            <div>
                                 <button onClick={ () => navigate('/') } className='btn btn-danger rounded-1' style={{marginRight: '10px'}}>Create account</button>
                                <span style={{color: '#858585', fontSize: 13}}>or already have an account? <a href="/register" style={{color: '#434343'}}>Log in</a></span>
                            </div>
                        </div>
                        <div className="col">
                            <h5 style={{fontWeight: 900, marginBottom: '20px', color: '#434343'}}>Who should register on itch.io?</h5>
                            <p style={{fontSize: 14, marginBottom: '20px', lineHeight: 1.5}}>
                                <strong>itch.io </strong>
                                was originally created for independent video games but hosts a wide
                                range of creative digital content. If you’re buying something an account is
                                optional, but recommended.
                            </p>
                            <h5 style={{fontWeight: 900, marginBottom: '20px', color: '#434343', fontSize: 16}}>I want to play games!</h5>
                            <p style={{fontSize: 14, marginBottom: '20px', lineHeight: 1.5}}>
                                Although registration isn’t required, creating an account will give you the
                                ability to create collections of your favorites and soon to be favorites. If
                                you’ve bought anything on 
                                <strong> itch.io </strong>
                                you can even link those purchases to your
                                account to keep track of them.
                            </p>
                            <h5 style={{fontWeight: 900, marginBottom: '20px', color: '#434343', fontSize: 16}}>I’m a developer/creator!</h5>
                            <p style={{fontSize: 14, marginBottom: '20px', lineHeight: 1.5}}>
                                Great! 
                                <strong> itch.io </strong>
                                is designed for creative types of all kinds to quickly
                                distribute their work easily as possible. If you’re selling your content you
                                can start right away. An account also lets you submit games to the various game
                                jams hosted on 
                                <strong> itch.io </strong>

                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className="card-footer bg-white" style={{padding: '15px 40px'}}>
                    <a href="#" className="" style={{color: '#606060', fontSize: 13}}>Looking for something you bought?</a>
                </div> */}
            </div>
        </div>
    )
}

export default Register