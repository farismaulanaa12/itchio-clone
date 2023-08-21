import { useReducer, useRef, useState } from "react";


function SideBarDevLogs()
{
  return(
    <>
      <h2 style={{fontSize: 15, padding: '20px 20px 0 20px', margin: '0', fontWeight: 900, color: '#434343'}}>FILTER POSTS</h2>
      <section>
        <MenuSideBar title="Post Type"
          data={[
            {
              icon: "bi bi-tag",
              menuName: 'Major Update'
            },
            {
              icon: "bi bi-tag",
              menuName: 'Postmortem'
            },
            {
              icon: "bi bi-tag",
              menuName: 'Game Design'
            },
            {
              icon: "bi bi-tag",
              menuName: 'Tech Discussion'
            },
            {
              icon: "bi bi-tag",
              menuName: 'Tutorial'
            },
            {
              icon: "bi bi-tag",
              menuName: 'Announcement'
            },
            {
              icon: "bi bi-tag",
              menuName: 'Culture'
            },
            {
              icon: "bi bi-tag",
              menuName: 'Marketing'
            },
        ]}/>
        <MenuSideBar title="Project Type"
          data={[
            {
              icon: "bi bi-funnel",
              menuName: 'Games'
            },
            {
              icon: "bi bi-funnel",
              menuName: 'Game assets'
            },
            {
              icon: "bi bi-funnel",
              menuName: 'Physical games'
            },
            {
              icon: "bi bi-funnel",
              menuName: 'Tools'
            },
            {
              icon: "bi bi-funnel",
              menuName: 'Comics'
            },
            {
              icon: "bi bi-funnel",
              menuName: 'Books'
            }
        ]}/>
      </section>
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
            <a href="" className="d-flex" style={{paddingLeft: '28px', gap: 10, flex: 1, fontSize: 14, lineHeight: '32px', height: '32px', textDecorationLine: "none", alignItems: "center", color: togglePlay ? 'white' : "#222222"}}>
              <i className={props.item.icon} style={{opacity: 0.8, fontSize: 20, flexShrink: 0}}></i>
              {props.item.menuName}
            </a>
          </li>
        </ul>
    </>
  )
}

export default SideBarDevLogs