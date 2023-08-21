import FooterMain from "../components/footer/footermain"
import NavigationBar from "../components/navbar"

// import { useState } from "react"
// import { useNavigate } from "react-router-dom"

function Community()
{
    return(
        <>
            <NavigationBar/>
            <div style={{backgroundColor: "#F4F4F4", height: '100%', width: '100%'}}>
                <MainCommuntiy/>
            </div>
            <FooterMain/>
        </>
    )
}

function MainCommuntiy()
{
    
    return(

        <div className='d-flex justify-content-center' style={{padding: '20px 20px 20px 20px', fontFamily: 'Lato', fontStyle: "normal"}}>
            <div className="card rounded-1 shadow-sm" style={{width: '74rem'}}>
                <div className="d-flex align-items-center card-header bg-white" style={{padding: '30px 40px', gap: 20}}>
                    <div className="me-auto">
                        <h1 style={{fontWeight: 900, margin: '0', color: '#434343', fontSize: '26px'}}>itch.io Community</h1>
                    </div>
                    <div>
                        <input type="text" placeholder='Search Community' style={{width: 170, height: 35, padding: '8px', fontSize: 14, border: '2px solid', borderColor: '#dadada'}}/>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                        <li className="list-group-item" style={{padding: '20px 40px'}}>
                            Welcome to the itch.io community! A constructive and safe community is a high priority so please take a moment to review <a href="" style={{color: '#da2c49'}}> the community rules.</a>
                            <div style={{marginTop: '20px'}}>
                                <a id="category" href="" style={{color: '#222', marginRight: '40px', fontWeight: "bold", textDecorationLine: "none", paddingBottom: '6px', display: "inline-block"}}>All categories</a>
                                <a id="recent" href="" style={{color: '#434343', textDecorationLine: "none", paddingBottom: '6px', display: "inline-block"}}>Recent posts</a>
                                <hr style={{margin: '0px'}}/>
                            </div>
                        </li>
                        <CommunityCategory title="GENERAL"
                        data={[
                            {
                                title: "General Discussion",
                                topics: "2,621 topics",
                                desc : "Talk about things that don't quite fit into the other categories",
                                image : "https://i.pinimg.com/originals/10/91/94/1091948c6b80b65b9eef8c163f0ae42a.jpg",
                                topicTitle : "Introduce yourself!",
                                abbrTitle : "15 August 2023 @ 14:10",
                                time : "5 minutes ago",
                                author : "chirantannath"
                            },
                            {
                                title: "Release Announcements",
                                topics: "38,292 topics",
                                desc : "Announce and promote your own projects here",
                                image : "https://e1.pxfuel.com/desktop-wallpaper/147/865/desktop-wallpaper-anime-profile-pic-anime-profile.jpg",
                                topicTitle : "Grand Prix",
                                abbrTitle : "15 August 2023 @ 14:04",
                                time : "11 minutes ago",
                                author : "Ayel_852"
                            },
                            {
                                title: "Recommend a Game",
                                topics: "571 topics",
                                desc : "Share cool things you like that you've found on itch.io",
                                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqiaLNuTp-jJ5Mj71QJeXTlVlc1UYIYNc4A&usqp=CAU",
                                topicTitle : "Drink Hero the card game with drink waifus and husbandos",
                                abbrTitle : "15 August 2023 @ 13.07",
                                time : "1 hour ago",
                                author : "adriansikhsan"
                            },
                            {
                                title: "Game Jams",
                                topics: "925 topics",
                                desc : "Share, organize, and discuss game jams on itch.io",
                                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFSzv3-CD-hGj6lUkAxJgGBXIKeRdLUjxiPA&usqp=CAU",
                                topicTitle : "Game Jam: Lumberjack Life, $3000 in prizes",
                                abbrTitle : "15 August 2023 @ 12:37",
                                time : "1 hour 30 minutes ago",
                                author : "rayadudung123"
                            },
                        ]}/>
                        <CommunityCategory title="ITCH.IO"
                        data={[
                            {
                                title: "Developer Updates",
                                topics: "12 topics",
                                desc : "itch.io updates relevant to those publishing games",
                                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGn9kpOWXphUzezvpoB8sWIEK4Fx_mOEZMsw&usqp=CAU",
                                topicTitle : "Google Analytics 4 Update Guide",
                                abbrTitle : "10 August 2023 @ 14:10",
                                time : "10 days ago",
                                author : "ibrahimgreg"
                            },
                            {
                                title: "Questions & Support",
                                topics: "6,471 topics",
                                desc : "Ask the community for help",
                                image : "https://api.duniagames.co.id/api/content/upload/file/4254794421671541044.jpg",
                                topicTitle : "Payment from Indonesia",
                                abbrTitle : "15 August 2023 @ 14:04",
                                time : "36 minutes ago",
                                author : "rafaelmo"
                            },
                            {
                                title: "Ideas & Feedback",
                                topics: "767 topics",
                                desc : "Feature requests or feedback about how itch.io works",
                                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo2F9n496wzAglBCtRHIcDBx4fJOJkdoZK9w&usqp=CAU",
                                topicTitle : "Spoiler Text for commenting",
                                abbrTitle : "15 August 2023 @ 13.07",
                                time : "1 hour ago",
                                author : "ferdisusanti"
                            },
                            {
                                title: "itch app Development",
                                topics: "494 topics",
                                desc : "Keep an eye on the itch app as it's developed, report bugs & make suggestions",
                                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcR15zilB3dRhFY8WQYzh8Ke8aTejDAp6vHg&usqp=CAU",
                                topicTitle : "How do i uninstall the itch.io app",
                                abbrTitle : "13 August 2023 @ 11.02",
                                time : "2 days ago",
                                author : "raihanwangsaf"
                            },
                            {
                                title: "butler",
                                topics: "200 topics",
                                desc : "itch.io's command line tool for uploading projects & patches",
                                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN46EhTG58kr-DYDnW0f37OxJsXvL3r3YtwX8AvZvfU9ZTULIH1vmCMDraoHhiYt7fNrU&usqp=CAU",
                                topicTitle : "Butler stops at 3.55% every time - Network idle",
                                abbrTitle : "12 August 2023 @ 21.09",
                                time : "3 days ago",
                                author : "pain akatsuki"
                            },
                            {
                                title: "itch.io tips",
                                topics: "97 topics",
                                desc : "Share and find tips for using itch.io",
                                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSCD8h8kbvi1cQMG2ifXODbBbcYDxRCfzOwo14M7fofhRUkZuzfTTCXp0_8cu1GLHgPQ0&usqp=CAU",
                                topicTitle : "how to use the widget/embed for your game",
                                abbrTitle : "12 August 2023 @ 21.09",
                                time : "3 days ago",
                                author : "pain akatsuki"
                            },
                        ]}/>
                        <CommunityCategory title="GAME DEVELOPMENT"
                        data={[
                            {
                                title: "Devlogs",
                                topics: "3,281 topics",
                                desc : "Making something? Share your progress and get feedback",
                                image : "https://i.pinimg.com/736x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
                                topicTitle : "Restarting development on my first game 'Pumpkin Head'",
                                abbrTitle : "10 August 2023 @ 14:10",
                                time : "21 minutes ago",
                                author : "sintaksna"
                            },
                            {
                                title: "General Development",
                                topics: "984 topics",
                                desc : "Tools, techniques, and other ideas around game development",
                                image : "https://www.imagepicweb.com/wp-content/uploads/2022/08/WhatsApp-DP-Images-New.jpg",
                                topicTitle : "RPG Maker MZ how to make a combat system on locations?",
                                abbrTitle : "14 August 2023 @ 14:04",
                                time : "1 days ago",
                                author : "tomy slebew"
                            },
                            {
                                title: "Get Feedback",
                                topics: "2,020 topics",
                                desc : "Ask for feedback on your projects and itch.io pages",
                                image : "https://wallpapers.com/images/hd/cool-profile-picture-1ecoo30f26bkr14o.jpg",
                                topicTitle : "Asking for More Feedback for my 2 games.",
                                abbrTitle : "15 August 2023 @ 13.07",
                                time : "1 hour ago",
                                author : "sendy raja homok"
                            },
                            {
                                title: "Help Wanted or Offered",
                                topics: "6,431 topics",
                                desc : "Looking to collaborate? Request for help or offer your services by making a topic",
                                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxBMvWOlxZHeOBLDsdo0-NDD6NStC-AxJzw&usqp=CAU",
                                topicTitle : "[Unity] [Programmer] Looking for paying projects.",
                                abbrTitle : "13 August 2023 @ 11.02",
                                time : "3 minutes ago",
                                author : "fauzan aniki"
                            }
                        ]}/>
                        <CommunityCategory title="TABLETOP GAMING"
                        data={[
                            {
                                title: "General",
                                topics: "3,281 topics",
                                desc : "Making something? Share your progress and get feedback",
                                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNOUMGNtgmgeJWNy-TJPP3kYn4mC_Hlu5FiNuAJLFCwaUnyr92apMzJVprOpmbG5oEXgU&usqp=CAU",
                                topicTitle : "Restarting development on my first game 'Pumpkin Head'",
                                abbrTitle : "10 August 2023 @ 14:10",
                                time : "21 minutes ago",
                                author : "sintaksna"
                            },
                            {
                                title: "Design",
                                topics: "984 topics",
                                desc : "Tools, techniques, and other ideas around game development",
                                image : "https://marketplace.canva.com/EAEeOGhdgP8/2/0/1600w/canva-blue-and-black-clean-minimalism-twitch-profile-picture-bdXoxdQGpGo.jpg",
                                topicTitle : "RPG Maker MZ how to make a combat system on locations?",
                                abbrTitle : "14 August 2023 @ 14:04",
                                time : "1 days ago",
                                author : "tomy slebew"
                            },
                            {
                                title: "Resources",
                                topics: "2,020 topics",
                                desc : "Ask for feedback on your projects and itch.io pages",
                                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw2esc1Ep0vU4ARkeNl1zPdUkkMOKGkTlo6w&usqp=CAU",
                                topicTitle : "writer Look for game project",
                                abbrTitle : "14 August 2023 @ 13.07",
                                time : "1 days ago",
                                author : "sebuah pensil"
                            }
                        ]}/>
                        <CommunityCategory title="CREATIVITY & ART"
                        data={[
                            {
                                title: "2D Art",
                                topics: "1,083 topics",
                                desc : "Discuss and share 2d creations, such as drawing and pixel art",
                                image : "https://pbs.twimg.com/media/FwEmR0WacAA0IKV.jpg",
                                topicTitle : "Fubblers' Pixel Parade!",
                                abbrTitle : "10 August 2023 @ 14:10",
                                time : "10 hours ago",
                                author : "tio condet"
                            },
                            {
                                title: "3D Art",
                                topics: "254 topics",
                                desc : "Discuss and share 3d models, texturing, or anything else related",
                                image : "https://www.whatsappimages.in/wp-content/uploads/2021/12/Free-Black-Profile-Images-Wallpaper-Free.jpg",
                                topicTitle : "What would you like to buy?",
                                abbrTitle : "13 August 2023 @ 10.55",
                                time : "2 days ago",
                                author : "reipace"
                            },
                            {
                                title: "Music & Audio",
                                topics: "652 topics",
                                desc : "Post tunes to share, and general discussion about music and sound",
                                image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70ND6yMM5B1HRyyD9aC9cL_JU2jbw0M6lHg&usqp=CAU",
                                topicTitle : "writer Look for game project",
                                abbrTitle : "10 August 2023 @ 13.07",
                                time : "5 days ago",
                                author : "dani merkurius"
                            }
                        ]}/>
                        
                </ul>
            </div>
        </div>
    )
}

function CommunityCategory(props)
{
    return(
        <>
            <li className="d-flex list-group-item" style={{padding: '0px 40px', backgroundColor: '#F4F4F4', height: '32px', lineHeight: '32px'}}>
                <a href="" style={{textDecorationLine: "none", color:"#606060", fontSize: 12, fontWeight: "bold"}}>{props.title}</a>
                <div style={{marginLeft: 'auto', paddingLeft: '10px', width:'300px' ,borderLeft: '1px solid', borderColor: '#dadada', color: '#606060', fontSize: 12, fontWeight: "bold"}}>
                    LAST TOPIC
                </div>
            </li>
            <li className="list-group-item">
                {
                    props.data?.map((item, key) => {
                        return(
                          <ListOfCategory key={key} item={item}/>
                        )
                      }) 
                }    
            </li>
        </>
    )
}

function ListOfCategory(props)
{
    return (
        <>
            <div style={{padding: '15px 15px 15px 40px', borderBottom: '1px solid', borderColor: '#dadada'}}>        
                <div className="d-flex align-items-center">           
                    <div style={{marginRight: '20px', fontSize: 16, flex: 1}}>
                        <div className="d-flex align-items-center" style={{fontSize: 18}}>
                            <a href="" style={{textDecorationLine: "none", color: '#da2c49', fontWeight: "bold"}}>{props.item.title}</a>
                            <span style={{marginLeft: 'auto', color: '#858585', fontSize: 14, paddingLeft: '5px'}}>
                                <span>{props.item.topics}</span>
                            </span>
                        </div>
                        <div style={{marginTop: '10px', color: '#606060'}}>
                            {props.item.desc}
                        </div>
                    </div>
                    <div style={{width: '310px', lineHeight: 1.7, color: '#858585', fontSize: 13}}>
                        <a href="" className="d-flex align-items-center" style={{textDecorationLine: "none", gap: 10}}> 
                            <div style={{flex: 'none'}}>
                                <img src={props.item.image} className="" style={{width: 25, height: 25, borderRadius: 2}}/>
                            </div>
                            <div style={{flex: 1, minWidth: 0}}>
                                <div style={{fontWeight: "bold", color: '#606060', whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden"}}>
                                    {props.item.topicTitle}
                                </div>
                                <div style={{color: "#858585"}}>
                                    <abbr title={props.item.abbrTitle} style={{textDecorationLine: "none"}}>
                                        <span><i className="bi bi-stopwatch"></i>{props.item.time} </span>
                                    </abbr>
                                    by
                                    <span style={{color: '#606060'}}> {props.item.author}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Community