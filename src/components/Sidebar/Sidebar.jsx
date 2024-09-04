import React, { useContext } from 'react'
import { useState } from 'react'
import "./Sidebar.css"
import { assets } from "../../assets/assets"
import { Context } from '../../context/context'
const Sidebar = () => {
    const [extended, setExtended] = useState(true);
    const{onSent,prevPrompt,setRecentPrompt}=useContext(Context)

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(pre => !pre)} className='menu' src={assets.menu_icon} alt="" />
                <div className="newchat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>

                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompt.map((item,index) => {
                            return(
                            <div className="recent-entry">
                                <img src={assets.message_icon} alt="" />
                                <p>{item.slice(0,18)}...</p>
                            </div>
                            )
                        })}

                    </div>
                    : null}
            </div>
            <div className="bottom">
                <div className="botton-item">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>



                <div className="botton-item">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>



                <div className="botton-item">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Setting</p> : null}
                </div>
            </div>
        </div>

    )
}

export default Sidebar
