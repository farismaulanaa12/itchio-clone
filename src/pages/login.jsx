import gambar from '../assets/logo.png'

import FooterMain from '../components/footer/footermain'

import { useNavigate } from 'react-router-dom'

function Login()
{
    return( 
        <>
            <NavigationBar/>
            <div style={{backgroundColor: "#F4F4F4", height: '100%', width: '100%'}}>
                <MainLogin />
            </div>
            <FooterMain />
        </>
    )
}

function NavigationBar()
{
    return(
        <nav className="navbar navbar-expand-lg shadow-sm bg-white" style={{fontFamily: 'Lato', fontWeight: 700, fontStyle: "normal", backgroundColor:"white"}}>
            <div className="container-fluid justify-content-center p-2">
                <a className="navbar-brand mx-3" href="/games" ><img src={gambar} alt="" width="115" height="30"/></a>
            </div>
        </nav>
    )
}
function MainLogin()
{
    const navigate = useNavigate()

    return(
        <div className='d-flex justify-content-center' style={{padding: '20px 20px 0px 20px', fontFamily: 'Lato', fontStyle: "normal"}}>
            <div className="card shadow-sm" style={{width: '30rem'}}>
                <div className="card-header bg-white" style={{padding: '30px 40px'}}>
                    <h5 style={{fontWeight: 900, margin: '0', color: '#434343'}}>Log in to your itch.io account</h5>
                </div>
                <div className="card-body" style={{padding: '30px 40px', fontSize: 14}}>
                    <div style={{marginBottom: '20px'}}>
                        <div className='label'style={{color : '#434343', fontWeight: 'bold'}}>Username or email</div>
                        <input autoFocus="true" type="text" placeholder='Required' style={{padding: '8px', margin: '6px 0', width: '100%'}}/>
                    </div>
                    <div style={{marginBottom: '20px'}}>
                        <div className='label'style={{color : '#434343', fontWeight: 'bold'}}>Password</div>
                        <input autoFocus="true" type="text" placeholder='Required' style={{padding: '8px', margin: '6px 0', width: '100%'}}/>
                    </div>
                    <div>
                        <button onClick={ () => navigate('/') } className='btn btn-danger rounded-1' style={{marginRight: '10px'}}>Login</button>
                        <span style={{color: '#858585', fontSize: 13}}>or <a href="/register" style={{color: '#434343'}}>Create account</a> · <a href="/user/forgot-password" style={{color: '#434343'}}>Forgot password</a></span>
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <hr />
                        <h4 style={{fontWeight: 900, fontSize: 13}}>Or log in with another site</h4>
                        <a href="" style={{border : '1px solid', borderRadius: '3px', fontSize: '14px', display: 'inline-block', textDecorationLine: 'none', color: '#FF2449', fontWeight: 'bold', backgroundColor: 'white', padding: '3px 12px', margin: '10px 0px 0px'}}><i style={{color: 'black', marginRight: '5px', fontSize: 20}} className="bi bi-github" ></i> Log in with GitHub</a>
                    </div>
                </div>
                <div className="card-footer bg-white" style={{padding: '15px 40px'}}>
                    <a href="#" className="" style={{color: '#606060', fontSize: 13}}>Looking for something you bought?</a>
                </div>
            </div>
        </div>
    )
}

export default Login