import React, { useContext } from 'react'
import "./MAin.css"
import { assets } from '../../assets/assets'

import { Context } from '../../context/context'
const MAin = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)
  return (
    <div className='main'>
      <div className="nav">
        <p>Tauros AI</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">

        {!showResult
          ? <><div className="text">
            <div className="text1">Hello , Manv.</div>
            <div className="text2"> How can I help you today?</div>
          </div><div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Tell me about React js and React native</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div></>
          : <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>

            <div className="loading"></div>
            <div className="result-data">


              <img src={assets.gemini_icon} alt="" />
              {loading ?
              <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>

               :
                <p >  {resultData}</p>
              }
            </div>
          </div>
        }
      </div>



      <div className="main-bottom">
        <div className="search-box">
          <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter Your Prompt Here' />
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img onClick={() => onSent()} src={assets.send_icon} alt="" />
          </div>

        </div>
        <p className='bottom-info'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
      </div>


    </div>

  )
}

export default MAin
