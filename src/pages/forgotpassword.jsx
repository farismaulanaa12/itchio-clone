import FooterMain from '../components/footer/footermain'
import NavigationBar from '../components/navbar'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


function ForgotPassword()
{
    return(
        <div>
            <NavigationBar/>
            <div style={{backgroundColor: "#F4F4F4", height: '100%', width: '100%'}}>
                <MainResetPassword/>
            </div>
            <FooterMain />
        </div>
    )
}

function MainResetPassword()
{
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)

    return(
        <>
            <div className='d-flex justify-content-center' style={{padding: '20px 20px 0px 20px', fontFamily: 'Lato', fontStyle: "normal"}}>
                <div className="card shadow-sm" style={{width: '60rem'}}>
                    <div className="card-body" style={{padding: '30px 40px', fontSize: 14}}>
                        <h2 style={{margin: '0 0px 20px 0', fontWeight: 900, color: '#434343', fontSize: '20px'}}>Reset Password</h2>
                        <p style={{fontSize: 13}}>Enter the email address you registered with and we will send you a link to reset your password.</p>
                        <form action="" style={{marginTop: "0em"}}>
                            <div style={{marginBottom: '20px', fontSize: 14}}>
                                <div className='label'style={{color : '#434343', fontWeight: 'bold'}}>Email</div>
                                <input autoFocus="true" type="text" placeholder='Required' style={{padding: '8px', margin: '6px 0', width: '100%', maxWidth: '550px', border: '2px solid', borderRadius: '2px', borderColor: '#cdcdcd'}}/>
                            </div>
                            <div style={{marginTop: '20px', color: '#858585'}}>
                                <button onClick={ () => navigate('/') } className='btn btn-danger rounded-1' style={{marginRight: '10px', }}>Submit</button>
                                or <a href="/login" style={{color: '#434343', fontSize: 13}}>Log In</a>
                            </div>
                        </form>
                        <div style={{marginTop: '20px', fontSize: 13}}>
                            <p>It's not requred to create an account to buy something on itch.io. <a href="" style={{color: '#da2c49'}}>Click here if you're trying to recover a purchase</a>.</p>
                            <p>If you are having trouble accessing your account, please <a href="" style={{color: '#da2c49'}}>contact Support</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ForgotPassword