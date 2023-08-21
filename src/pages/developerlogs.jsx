import { useState } from "react"

import FooterMain from "../components/footer/footermain"
import NavigationBar from "../components/navbar"
import SideBarDevLogs from "../components/sidebardevlogs";

function DeveloperLogs()
{
    const [togglePlay, setTogglePlay] = useState();
    
    return(
        <>
            <NavigationBar/>
            <div className="row">
                <div className="" style={{backgroundColor: '#f4f4f4', overflowY : 'hidden', height: "100vh", position: "sticky", top: "2px", width: '280px'}} id='sidebar'>
                    <SideBarDevLogs/>
                </div>
                <div className="col" id='main' style={{backgroundColor: "white"}}>
                    <MainContent 
                    data = {[
                        {
                            image: "https://img.itch.zone/aW1nLzEzMTQ1MDU5LnBuZw==/350x196%23cm/j8vPQv.png",
                            title: '0.3.18 Update: Wrapping Up Inochi2D Export',
                            comment: '2',
                            like: '4',
                            subtitle: 'Mannequin Character Generator',
                            desc: 'Hello! Today we’re back with a new update to Mannequin, which wraps up Inochi2D export features (at least for some time). Shortly after the release of...'
                        },
                        {
                            image: "https://img.itch.zone/aW1nLzEzMTQzMzg2LmdpZg==/350x196%23cmm/Ps%2FfEz.gif",
                            title: '225th update: Discord Suggestions 2 - 4/?',
                            comment: '1',
                            like: '18',
                            subtitle: 'Modern exteriors - RPG Tileset [16X16]',
                            desc: 'update v24.7 "Discord Suggestions" is a short serie that will feature random prompts from the #suggestions channel on our Discord Server. The aim of this serie...'
                        },
                        {
                            image: "https://img.itch.zone/aW1nLzEzMTQ5NTE3LnBuZw==/350x196%23cm/9PmGj6.png",
                            title: 'All Props are also provided as individual sprites',
                            comment: '2',
                            like: '4',
                            subtitle: 'Epic RPG World Pack - Cemetery',
                            desc: `Hello my friends! I'm here just to announce that all props from the spritesheet, like in the Grass Land 2.0, are also provided as individual sprites. The same w...`
                        },
                        {
                            image: "https://img.itch.zone/aW1nLzEzMTQ4NTc0LnBuZw==/350x196%23cm/jO0j6f.png",
                            title: 'Made Marion Development Update, August 2023',
                            comment: '1',
                            like: '10',
                            subtitle: 'Made Marion',
                            desc: `Happy August! We've been lucky so far this summer in BC, but our luck ran out this week. My poor lil' portable AC has been working overtime to keep me operating...`
                        },
                        {
                            image: "https://img.itch.zone/aW1hZ2UvMjE5Njg4My8xMjk4MzM2Ni5wbmc=/350x196%23cm/Vc1lUk.png",
                            title: 'Key bindings now available in v1.2.0!',
                            comment: '3',
                            like: '1',
                            subtitle: `You're the OS!`,
                            desc: 'Version 1.2.0 is now out and brings key bindings, which was the most requested feature so far. You can now use the spacebar to process I/O Events, and numeric k...'
                        },
                        {
                            image: "https://img.itch.zone/aW1hZ2UvMjgzMjcxLzEzOTI0NTIucG5n/350x196%23cm/ES900D.png",
                            title: '2023 Status Update',
                            comment: '1',
                            like: '8',
                            subtitle: 'Brassica - A Marry Tale',
                            desc: `Hello! It has been quite a while since our last devlog on itch.io, so first of all thank you for your patience! While we still don't have a realistic estimate o...`
                        },
                        {
                            image: "https://img.itch.zone/aW1nLzEzMTUxMDc0LnBuZw==/350x196%23cm/ctcxai.png",
                            title: 'Bloodclotte Playtest v4',
                            comment: '0',
                            like: '1',
                            subtitle: 'Bloodclotte',
                            desc: `Hello everyone! With the release of v4, Bloodclotte is now off hiatus. Thank you for waiting - I've been putting a lot of my energy towards my day job (I work i...`
                        },
                        {
                            image: "https://img.itch.zone/aW1hZ2UvMjE0OTQyNy8xMzEzMDEwOC5wbmc=/350x196%23cm/FvutWK.png",
                            title: 'patch 8: game feel',
                            comment: '2',
                            like: '3',
                            subtitle: '【DREAM・SLAYER】',
                            desc: `small update improved screen shake effects book enemies should be more visible...`
                        },
                        {
                            image: "https://img.itch.zone/aW1nLzEzMTUwNTI0LmpwZw==/350x196%23cm/U2jbLn.jpg",
                            title: '0.4.0a: Fixes and improvements',
                            comment: '0',
                            like: '1',
                            subtitle: 'Tallowmere 2: Curse of the Kittens',
                            desc: `FIXES & IMPROVEMENTS Fixed an error preventing the Kitten Backer Sign from being used. Fixed an error with achievements checking difficulty settings when not in...`
                        },
                        {
                            image: "https://img.itch.zone/aW1hZ2UvMTM1Njk2My8xMjAzMjcxMS5qcGVn/350x196%23cm/jcch7I.jpeg",
                            title: '🌟Massive Inventory Bundle🌟',
                            comment: '0',
                            like: '1',
                            subtitle: 'Super Asset Bundle #2 : Adventure Time',
                            desc: `Asalam O Alaikum We have a Massive Bundle Available for All of you with A minimum price Visit For More Info : https://itch.io/b/1991/massive-inventory-bundle...`
                        },
                        {
                            image: "https://img.itch.zone/aW1nLzEzMTQxOTAxLnBuZw==/350x196%23cm/tFtRWU.png",
                            title: '1.4.4: The Quality Presentation Update (aka The Are We There Yet? Update)',
                            comment: '2',
                            like: '4',
                            subtitle: 'Terra - A Terraria Demake',
                            desc: `Main Changes: Added a boss health bar. Added the sun and moon to the sky, now you can tell roughly what the time is. Added particles for damaging mobs and break...`
                        },
                        {
                            image: "https://img.itch.zone/aW1nLzEzMTQ5NDk1LnBuZw==/350x196%23cm/PoSV5t.png",
                            title: 'Updated to Version 2.4',
                            comment: '0',
                            like: '1',
                            subtitle: 'GHOSTING VANDAL - Early Access',
                            desc: `Version 2.4 Changes, mostly focused on quality. -Minor graphical updates on effects and gun overhear GUI -Minor boss battle adjustments -Minor audio, dialogue a...`
                        }
                        ,
                        {
                            image: "https://img.itch.zone/aW1nLzEzMTM1MDgyLmpwZw==/350x196%23cm/1TC4yx.jpg",
                            title: 'World of Solaria Sprite Pack Update 03',
                            comment: '7',
                            like: '3',
                            subtitle: 'World of Solaria: Sprite Pack',
                            desc: `👋Hello!👋 This update fixes some long-standing issues: Added the missing axe spritesheet for Odderf Added missing hands for left-facing Odderf walk sprites...`
                        },
                        {
                            image: "https://img.itch.zone/aW1hZ2UvNTkzMzkvMjQ3MjkwNC5qcGc=/350x196%23cm/pfIKJV.jpg",
                            title: '3dSenVR v0.9.7 release',
                            comment: '1',
                            like: '4',
                            subtitle: '3dSen VR - 3D NES Emulator For Virtual Reality',
                            desc: `I'm very happy and proud to release two of the most massive and technically challenging profiles: Blaster Master and Super Spike V'Ball...`
                        },
                        {
                            image: "https://img.itch.zone/aW1nLzEzMTQ4OTgzLnBuZw==/350x196%23cm/RB0AMH.png",
                            title: '1.5.5 - More Props Update',
                            comment: '4',
                            like: '1',
                            subtitle: 'Blocks and Bones',
                            desc: `This update adds 14 new props to bring out the best feel for your buildings. It's an essential update for everyone interested in playing this game. Blocks and B...`
                        },
                        {
                            image: "https://img.itch.zone/aW1nLzEzMTM3Njg3LnBuZw==/350x196%23cm/G8UthJ.png",
                            title: 'Sandtrix+ on Steam',
                            comment: '4',
                            like: '5',
                            subtitle: 'Sandtrix',
                            desc: `Sandtrix+ with 4 color modes and unlockable themes is avaiable to wishlist on steam now. https://store.steampowered.com/app/2546310/Sandtrix Trailer:...`
                        }
                        ,
                        {
                            image: "https://img.itch.zone/aW1nLzEzMTQ0NDg3LmdpZg==/350x196%23cmm/ftGxZX.gif",
                            title: 'Super Tilt Bro. 2.0-beta7: Revenge of the Sage',
                            comment: '3',
                            like: '1',
                            subtitle: 'Super Tilt Bro. for NES',
                            desc: `What's new in the game? Footstool Jump, aerial jump, wall jump, special jump, ... Definitely not enough. Let me introduce the brand-new footstool jump! Yes you...`
                        },
                        {
                            image: "https://img.itch.zone/aW1hZ2UvMzkwOTI5LzIyMjYwMjYucG5n/350x196%23cm/qvwbm8.png",
                            title: 'New Laigter Release!',
                            comment: '3',
                            like: '6',
                            subtitle: 'Laigter',
                            desc: `Hi everybody! After all this time, I made a small release that fixes some bugs and adds a few more cli commands: BugFixes: Fix specular maps outputting black im...`
                        },
                        {
                            image: "https://img.itch.zone/aW1nLzEzMTIzMzIxLmpwZw==/350x196%23cm/6nc53R.jpg",
                            title: 'UPDATE 14/8/2023!',
                            comment: '5',
                            like: '38',
                            subtitle: 'Nusantara: Bermuda Triangle',
                            desc: `Hi guys! What's up? How did your week go? I'm still as busy as ever~ Office work continues to pile up and I wonder if I'll ever get to the end of it lol The goo...`
                        },
                        {
                            image: "https://img.itch.zone/aW1nLzEzMTI2Mjk2LnBuZw==/350x196%23cm/LVAOYi.png",
                            title: 'Neyasnoe Coming Soon to Steam!',
                            comment: '1',
                            like: '9',
                            subtitle: 'Neyasnoe Demo',
                            desc: `Hey guys, finally the development of Neyasnoe has come to its conclusion. It's time for the game to be released on Steam: https://store.steampowered.com/app...`
                        }
                    ]}/>
                    <FooterMain/>
                </div>
            </div>
        </>
    )
}

function MainContent(props)
{
    const [togglePlay, setTogglePlay] = useState(false)
    const [togglePlay2, setTogglePlay2] = useState(false)

    return(
        <div>
            <h1 style={{margin: '20px 20px 30px', color: '#434343', fontWeight: 900, fontSize: 26}}>Devlogs</h1>
            <div className="d-flex align-items-center" style={{paddingRight: '20px', paddingLeft: '20px',fontSize: 16, borderBottom: '2px solid', borderColor: '#F4F4F4', gap: 10, marginBottom: '20px'}}>
                <span className="d-flex align-items-center" style={{paddingBottom: '7px', whiteSpace: "nowrap"}}>
                    <i className="bi bi-sort-down" style={{color: '#606060', marginRight: '10px', fontSize: 23}}></i>
                    <div className="d-inline-block" style={{fontSize: 14, color: '#858585'}}>Sort by</div>
                </span>
                <ul className="d-flex" style={{listStyle: "none", margin: '0px', padding: '0px', gap: 15}}>
                    <li>
                        <a className="d-block" href="" style={{color: '#de455f', paddingBottom: '10px', textDecorationLine: "none", fontWeight: "bold", position: "relative"}} >New and Popular</a>
                    </li >
                    <li onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)}>
                        <a className="d-block" href="" style={{color: togglePlay ? '#de455f' : '#434343', paddingBottom: '10px', textDecorationLine: "none", fontWeight: "bold", position: "relative"}} >Most recent</a>
                    </li >
                    <li onMouseOver={() => setTogglePlay2(true)} onMouseOut={() => setTogglePlay2(false)}>
                        <a className="d-block" href="" style={{color: togglePlay2 ? '#de455f' : '#434343', paddingBottom: '10px', textDecorationLine: "none", fontWeight: "bold", position: "relative"}} >Most popular</a>
                    </li>
                </ul>
            </div>
            <section id="card-devlogs" className="d-grid align-items-start" style={{margin: '20px', gridGap: '40px 10px'}}>
            {
                props.data?.map((item, key) => {
                    return(
                        <CardGameList key={key} item={item}/>
                    )
                })  
            }
            </section>
        </div>
    )
}

function CardGameList(props)
{
    return(
        <>
            <div style={{width: 'auto', margin: '0px', fontSize: 14, verticalAlign: top, display: "inline-block"}}>
                <div style={{marginBottom: '12px', position: "relative", paddingBottom: '56.25%'}}>
                    <a href="">
                        <img src={props.item.image} alt="" style={{border: 0, display: "block", position: "absolute", objectFit: "cover", width: '100%', height: '100%'}}/>
                    </a>
                </div>
                <div style={{marginBottom: 0}}>
                    <div className="d-flex" style={{alignItems: "flex-start", marginBottom: '3px'}}>
                        <a href="" style={{lineHeight: 1.2, color: '#da2c49', flex: 1, fontSize: 18, textDecorationLine: "none", fontWeight: "bold", wordWrap: "break-word", minWidth: 0, marginRight: '3px'}}>{props.item.title}</a>
                        <div style={{backgroundColor: '#F4F4F4', padding: '2px 4px', fontWeight: "bold", color: '#434343', fontSize: 14}}>
                            {props.item.comment} <i className="bi bi-chat-left" style={{marginLeft: '2px', display: "inline-block", verticalAlign: '-1px'}}></i>
                        </div>
                        <div style={{backgroundColor: '#F4F4F4', padding: '2px 4px', fontWeight: "bold", color: '#434343', fontSize: 14}}>
                            {props.item.like} <i className="bi bi-heart-fill" style={{marginLeft: '2px', display: "inline-block", verticalAlign: '-1px'}}></i>
                        </div>
                    </div>
                    <div style={{marginBottom: '8px', whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                        <a href="" style={{color: '#434343', textDecorationLine: "none", fontWeight: "bold"}}>{props.item.subtitle}</a>
                    </div>
                    <div style={{marginBottom: '0px', lineHeight: 1.4, wordWrap: "break-word", color: '#606060'}}>{props.item.desc}</div>
                </div>
            </div>
        </>
    )
}

export default DeveloperLogs