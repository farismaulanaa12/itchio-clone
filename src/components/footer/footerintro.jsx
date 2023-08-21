
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

export default FooterIntro