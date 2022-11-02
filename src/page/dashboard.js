import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// import Header from '../components/header/Header';
// import Sidebar from '../components/sidebar/Sidebar';

import { FaUser } from "react-icons/fa";
import { AiFillStar, AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { TbRefreshDot } from "react-icons/tb";
import { CiInboxOut } from "react-icons/ci";

import '../scss/dashboard.scss';

Dashboard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

const list = [
  1,2,3,4,5
];

export default function Dashboard({ title, children }) {
  const [chatPanelState, setChatPanelState] = useState(0);
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      background: "#2c3137",
      color: "#fff",
      display: "flex"
    }}>
      {/* <Header setToggle={setSidebarToggle} toggle={sidebarToggle} />
      <Sidebar toggle={sidebarToggle} active={setActiveClick} /> */}
      
      <div className='main'
        style={{width: chatPanelState === 0 ? "85%" : "100%"}}
      >
        <div className='header pv-small'>
          <div>
            <img src='/logo.png'/>
          </div>
          <div>
            <button className='header-button' 
              style={{
                background:"#2c3137",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                boxShadow: "0px 4px #171c22",
              }}>1,000,000,000</button>
            <button className='header-button'
              style={{
                background:"#f8bf60",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                boxShadow: "0px 4px #997a49",
                color: "#161c23"
              }}
            >WALLET</button>
          </div>
          <div>
            <FaUser />
            {
              chatPanelState !== 0 ?
                <AiFillCaretLeft onClick={() => setChatPanelState(0)}/>
                :
                ""
            }
          </div>
        </div>
        <div style={{height: "4vh", display: "flex", justifyContent:"space-between", alignItems: "center", background: "#1c2127"}}>
          <div style={{color: "#bb4d32", width:"10%", textAlign: "center"}}>LEVEL 74<AiFillStar /></div>
          <div style={{display: "flex", width:"80%", justifyContent:"space-between"}}>
            <div className='paralle'></div>
            <div className='paralle'></div>
            <div className='paralle'></div>
            <div className='paralle'></div>
            <div className='paralle'></div>
            <div className='paralle'></div>
            <div className='paralle'></div>
            <div className='paralle'></div>
            <div className='paralle-not-pass'></div>
          </div>
          <div style={{color: "#f8bf60", width:"10%", alignItems: 'center', textAlign: "center"}}><AiFillStar /> LEVEL 75</div>
        </div>
        <div style={{height: "5vh", display: "flex", justifyContent:"space-between", alignItems: "center", background: "#1c2127"}}>
          <div style={{width: "10%", alignItems:"center", textAlign: "center", display: "flex", flexFlow: "column", justifyContent: "center"}}>
            <span style={{color: "#fff", fontSize: "20px"}}>200%</span>
            <span style={{color: "#fff", fontSize: "10px", lineHeight: "5px"}}>CURRENT XP</span>
          </div>
          <div style={{display: "flex", width:"80%"}}>
            <div style={{display: "flex", width: "45%", alignItems:"center"}}>
              <div className='paralle-small'></div>
              <div className='paralle-small'></div>
              <div className='paralle-small'></div>
              <div className='paralle-small'></div>
              <div className='paralle-small'></div>
              <div className='paralle-small'></div>
              <div className='paralle-small'></div>
              <div className='paralle-small'></div>
              <div className='paralle-small'></div>
              <div className='paralle-small'></div>
            </div>
            <div style={{width: "10%", alignItems:"center", textAlign: "center", display: "flex", flexFlow: "column", justifyContent: "center"}}>
              <span style={{color: "#fff", fontSize: "20px"}}>250%</span>
              <span style={{color: "#fff", fontSize: "10px", lineHeight: "5px"}}>BONUS XP</span>
            </div>
            <div style={{display: "flex", width: "45%", alignItems:"center"}}>
              <div className='bar-small'></div>
              <div className='bar-small'></div>
              <div className='bar-small'></div>
              <div className='bar-small'></div>
              <div className='bar-small'></div>
            </div>
          </div>
          <div style={{width: "10%", alignItems:"center", textAlign: "center", display: "flex", flexFlow: "column", justifyContent: "center"}}>
            <span style={{color: "#fff", fontSize: "20px"}}>5</span>
            <span style={{color: "#fff", fontSize: "10px", lineHeight: "5px"}}>STREAK</span>
          </div>
        </div>
        <div className='game-panel'>
          <div className='profile'>
              <div className='p-header'>
                PLAYERS
              </div>
              <div className='high-bet'>
                HIGHEST BET
              </div>
              <div className='high-bet-val'>
                <div style={{border: "2px solid #2c3137", width: "70%", height: "100%", padding: "2px", background: "#1c2127", display: "flex", flexFlow: "column", justifyContent: "center", height: "4vh"}}>
                  <span style={{fontSize: "14px", color: "#8d52c6", lineHeight: "14px"}}><AiFillStar /> 9999 <img src="/cake1.png"/></span>
                  <span style={{fontSize: "14px", color: "#8d52c6", lineHeight: "14px"}}>WWWWWWWWWWWWWW</span>
                </div>
                <div style={{border: "2px solid #2c3137", width: "70%", height: "100%", padding: "2px", background: "#1c2127", display: "flex", flexFlow: "column", alignItems: "end", justifyContent: "center", height: "4vh"}}>
                  <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px", display: "flex", justifyContent: "space-between", width: "100%"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                  <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px", display: "flex", justifyContent: "space-between", width: "100%"}}>10.00<img src='/diamond.png'/></span>
                </div>
              </div>
              <div className='high-bet' style={{display: "flex", justifyContent: "space-between"}}>
                <span style={{width: "50%"}}>YOUR BETS</span>
                <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px",  width: "100%", textAlign: "end"}}>1,000.00<img src='/diamond.png'/></span>
              </div>
              <div className='high-bet-val' style={{display: "flex", flexFlow: "column"}}>
                <div style={{display: "flex", width: "100%"}}>
                  <div className='item'>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                  <div className='item'>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                  <div className='item'>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                </div>
                <div style={{display: "flex", width: "100%"}}>
                  <div className='item'>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                  <div className='item'>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                  <div className='item'>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                </div>
                
                <div style={{display: "flex", width: "100%"}}>
                  <div className='item'>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                  <div className='item'>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                  <div className='item'>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                  <div className='item'>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                </div>
                <div style={{display: "flex", width: "100%"}}>
                  <div className='item' style={{width: "50%"}}>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                  <div className='item' style={{width: "50%"}}>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                </div>
                <div style={{display: "flex", width: "100%"}}>
                  <div className='item' style={{width: "100%"}}>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                </div>
              </div>
              <div className='high-bet' style={{display: "flex", justifyContent: "space-between"}}>
                <span style={{width: "50%"}}>YOUR BETS LIST</span>
                <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px",  width: "100%", textAlign: "end"}}>1,000.00<img src='/diamond.png'/></span>
              </div>
              <div className='high-bet-val' style={{display: "flex", flexFlow: "column"}}>
                <div style={{display: "flex", width: "100%"}}>
                  <div className='item'>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                  <div className='item'>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                  <div className='item'>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                </div>
                <div style={{display: "flex", width: "100%"}}>
                  <div className='item' style={{width: "50%"}}>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                  <div className='item' style={{width: "50%"}}>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                </div>
                <div style={{display: "flex", width: "100%"}}>
                  <div className='item' style={{width: "100%"}}>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span className='title' style={{display: "flex",justifyContent: "center"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                </div>
              </div>
              <div className='high-bet' style={{display: "flex", justifyContent: "space-between"}}>
                <span style={{width: "50%"}}>ALL BETS</span>
                <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px",  width: "100%", textAlign: "end"}}>1,000.00<img src='/diamond.png'/></span>
              </div>
              <div className='high-bet-val' style={{display: "flex", flexFlow: "column"}}>
                <div style={{display: "flex", width: "100%"}}>
                  <div className='bet' style={{width: "70%"}}>
                    <span style={{fontSize: "14px", color: "#8d52c6", lineHeight: "14px"}}><AiFillStar /> 9999 <img src="/cake1.png"/></span>
                    <span style={{fontSize: "14px", color: "#8d52c6", lineHeight: "14px"}}>WWWWWWWWWWWWWW</span>
                  </div>
                  <div className='bet' style={{width: "30%"}}>
                    <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px", display: "flex", justifyContent: "space-between", width: "100%"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px", display: "flex", justifyContent: "space-between", width: "100%"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                </div>
                <div style={{display: "flex", width: "100%"}}>
                  <div className='bet' style={{width: "70%"}}>
                    <span style={{fontSize: "14px", color: "#f8bf60", lineHeight: "14px"}}><AiFillStar /> 1 <img src="/cake2.png"/> Small </span>
                  </div>
                  <div className='bet' style={{width: "30%"}}>
                    <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px", display: "flex", justifyContent: "space-between", width: "100%"}}><span>500,000.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px", display: "flex", justifyContent: "space-between", width: "100%"}}>999,999.00<img src='/diamond.png'/></span>
                  </div>
                </div>
                <div style={{display: "flex", width: "100%"}}>
                  <div className='bet' style={{width: "70%"}}>
                    <span style={{fontSize: "14px", color: "#2ba3cf", lineHeight: "14px"}}><AiFillStar /> 100 <img src="/cake2.png"/> LongUsername123 </span>
                  </div>
                  <div className='bet' style={{width: "30%"}}>
                    <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px", display: "flex", justifyContent: "space-between", width: "100%"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px", display: "flex", justifyContent: "space-between", width: "100%"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                </div>
                <div style={{display: "flex", width: "100%"}}>
                  <div className='bet' style={{width: "70%"}}>
                    <span style={{fontSize: "14px", color: "#2ba3cf", lineHeight: "14px"}}><AiFillStar /> 100 <img src="/cake2.png"/> LongUsername123 </span>
                  </div>
                  <div className='bet' style={{width: "30%"}}>
                    <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px", display: "flex", justifyContent: "space-between", width: "100%"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px", display: "flex", justifyContent: "space-between", width: "100%"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                </div>
              </div>
              <div className='profile-control'>
                <button className='header-button' 
                  style={{
                  background:"#2c3137",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  boxShadow: "0px 4px #171c22",
                  fontSize: "15px",
                  width: "40%"
                }}>NORMAL</button>
                <button className='header-button'
                  style={{
                    background:"#f8bf60",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                    boxShadow: "0px 4px #997a49",
                    color: "#161c23",
                    fontSize: "15px",
                    width: "40%"
                  }}
                >BONUS-ONLY</button>
              </div>
          </div>
          <div className='game-container'>
              <div className='p-header' style={{display: "flex", justifyContent: "space-between"}}>
                <div className='game-header-item'><img src='/logo.png' style={{height: "70%"}}/></div>
                <div className='game-header-item' style={{background: "#8d52c6"}}>x200.25</div>
                <div className='game-header-item' style={{background: "#2995bd"}}>x25.25</div>
                <div className='game-header-item' style={{background: "#f8bf60", display: "flex", flexFlow: "column", lineHeight: "7px"}}>
                  <span style={{fontSize: "12px"}}>BONUS</span><br/>
                  <span style={{fontSize: "20px"}}>x2.75</span>
                </div>
                <div className='game-header-item' style={{background: "#fff"}}>x7.25</div>
                <div className='game-header-item' style={{background: "#298854"}}>x75.84</div>
                <div className='game-header-item'><img src='/logo.png' style={{height: "70%"}}/></div>
              </div>
              <div className='ani'><img src='/pistol.png' style={{width: "70%"}}/></div>
              <div className='p-header' style={{display: "flex", justifyContent: "space-between"}}>
                <div className='game-header-item' style={{background: "#fff"}}>x2.75</div>
                <div className='game-header-item' style={{background: "#298854"}}>x8.42</div>
                <div className='game-header-item' style={{background: "#298854"}}>x5.76</div>
                <div className='game-header-item' style={{background: "#fff"}}>x9.77</div>
                <div className='game-header-item' style={{background: "#fff"}}>x3.25</div>
                <div className='game-header-item' style={{background: "#fff"}}>x4.98</div>
                <div className='game-header-item' style={{background: "#2995bd"}}>x25.25</div>  
                <div className='game-header-item' style={{background: "#fff"}}>x1.71</div>  
                <div className='game-header-item' style={{background: "#fff"}}>x2.62</div>  
                <div className='game-header-item' style={{background: "#f8bf60", display: "flex", flexFlow: "column", lineHeight: "7px"}}>
                  <span style={{fontSize: "12px"}}>BONUS</span><br/>
                  <span style={{fontSize: "20px"}}>x500.25</span>
                </div>
              </div>
              <div style={{display: "flex", height: "8.5vh"}}>
                  <div className='play-panel'>
                    <div style={{height: "30%", width:"100%", background: "#1c2127", display: "flex", justifyContent: "center", border: "2px solid #2c3137"}}>
                      <span style={{fontSize: "12px", textAlign: "center", color: "#f8bf60"}}><img src='/diamond.png'/> 5.00 PROFIT ON WIN</span>
                    </div>
                    <div style={{height: "40%", width:"100%", background: "#1c2127", display: "flex", justifyContent: "center", border: "2px solid #2c3137"}}>
                      <div></div>
                    </div>
                    <div style={{height: "30%", width:"100%"}}></div>
                  </div>
                  <div className='play-panel' style={{width: "40%"}}>
                    <div style={{height: "60%",width: "100%", display: "flex"}}>
                      <button className='header-button' 
                        style={{
                          background:"#f8bf60",
                          borderTopLeftRadius: "5px",
                          borderBottomLeftRadius: "5px",
                          borderRight: "2px solid #2c3137",
                          boxShadow: "0px 4px #997a49",
                          color: "#161c23",
                          fontSize: "15px",
                          height: "100%",
                          fontWeight: "600",
                          fontSize: "20px",
                          width: "40%"
                      }}>MAX BET</button>
                      <button className='header-button'
                        style={{
                          background:"#f8bf60",
                          boxShadow: "0px 4px #997a49",
                          color: "#161c23",
                          fontSize: "15px",
                          height: "100%",
                          width: "40%",
                          fontWeight: "800",
                          fontSize: "30px",
                        }}
                      >PLAY</button>
                      <button className='header-button'
                        style={{
                          background:"#f8bf60",
                          borderTopRightRadius: "5px",
                          borderBottomRightRadius: "5px",
                          borderLeft: "2px solid #2c3137",
                          boxShadow: "0px 4px #997a49",
                          color: "#161c23",
                          fontSize: "15px",
                          height: "100%",
                          width: "40%"
                        }}
                      ><TbRefreshDot style={{
                        fontWeight: "600",
                        fontSize: "35px"}} /></button>
                    </div>
                  </div>
                  <div className='play-panel'>
                    <div style={{height: "30%", width:"100%", background: "#1c2127", display: "flex", justifyContent: "center", border: "2px solid #2c3137"}}>
                    <button className='header-button' 
                        style={{
                          background:"#f8bf60",
                          borderTopLeftRadius: "5px",
                          borderBottomLeftRadius: "5px",
                          borderRight: "2px solid #2c3137",
                          boxShadow: "0px 4px #997a49",
                          color: "#161c23",
                          fontWeight: "800",
                          fontSize: "12px",
                          height: "100%",
                          width: "-webkit-fill-available"
                      }}>BASE</button>
                      <button className='header-button'
                        style={{
                          background:"#f8bf60",
                          boxShadow: "0px 4px #997a49",
                          color: "#161c23",
                          fontSize: "12px",
                          fontWeight: "800",
                          height: "100%",
                          width: "-webkit-fill-available",
                        }}
                      >BONUS</button>
                    </div>
                    <div style={{height: "40%", width:"100%", background: "#1c2127", display: "flex", justifyContent: "center", border: "2px solid #2c3137"}}>
                      <div></div>
                    </div>
                    <div style={{height: "30%", width:"100%"}}>

                    </div>
                  </div>
              </div>
          </div>
          <div className='winner'>
              <div className='p-header'>
                TOP-WINNERS {"(24HR)"}
              </div>
              <div className='high-bet' style={{display: "flex", justifyContent: "space-between"}}>
                <span style={{width: "50%"}}>ALL BETS</span>
                <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px",  width: "100%", textAlign: "end"}}>1,000.00<img src='/diamond.png'/></span>
              </div>
              <div className='high-bet-val' style={{display: "flex", flexFlow: "column"}}>
                {
                  list.map(e => {
                    return <div style={{display: "flex", width: "100%"}}>
                      <div className='bet' style={{width: "10%"}}>
                        <span style={{fontSize: "14px", color: "#8d52c6", lineHeight: "14px", textAlign: "center"}}>1</span>
                      </div>
                      <div className='bet' style={{width: "60%"}}>
                        <span style={{fontSize: "14px", color: "#8d52c6", lineHeight: "14px"}}><AiFillStar /> 9999 <img src="/cake1.png"/></span>
                        <span style={{fontSize: "14px", color: "#8d52c6", lineHeight: "14px"}}>WWWWWWWWWWWWWW</span>
                      </div>
                      <div className='bet' style={{width: "30%"}}>
                        <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px", display: "flex", justifyContent: "space-between", width: "100%"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                        <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px", display: "flex", justifyContent: "space-between", width: "100%"}}>10.00<img src='/diamond.png'/></span>
                      </div>
                    </div>
                  })
                }
                {
                  list.map(e => {
                    return <div style={{display: "flex", width: "100%"}}>
                      <div className='bet' style={{width: "10%"}}>
                        <span style={{fontSize: "14px", color: "#8d52c6", lineHeight: "14px", textAlign: "center"}}>2</span>
                      </div>
                      <div className='bet' style={{width: "60%"}}>
                        <span style={{fontSize: "14px", color: "#f8bf60", lineHeight: "14px"}}><AiFillStar /> 1 <img src="/cake2.png"/> Small </span>
                      </div>
                      <div className='bet' style={{width: "30%"}}>
                        <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px", display: "flex", justifyContent: "space-between", width: "100%"}}><span>500,000.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                        <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px", display: "flex", justifyContent: "space-between", width: "100%"}}>999,999.00<img src='/diamond.png'/></span>
                      </div>
                    </div>
                  })
                }
                {
                  list.map(e => {
                    return <div style={{display: "flex", width: "100%"}}>
                      <div className='bet' style={{width: "10%"}}>
                        <span style={{fontSize: "14px", color: "#8d52c6", lineHeight: "14px", textAlign: "center"}}>3</span>
                      </div>
                      <div className='bet' style={{width: "60%"}}>
                        <span style={{fontSize: "14px", color: "#2ba3cf", lineHeight: "14px"}}><AiFillStar /> 100 <img src="/cake2.png"/> Username123 </span>
                      </div>
                      <div className='bet' style={{width: "30%"}}>
                        <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px", display: "flex", justifyContent: "space-between", width: "100%"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                        <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px", display: "flex", justifyContent: "space-between", width: "100%"}}>10.00<img src='/diamond.png'/></span>
                      </div>
                    </div>
                  })
                }
                <div style={{display: "flex", width: "100%"}}>
                  <div className='bet' style={{width: "10%"}}>
                    <span style={{fontSize: "14px", color: "#8d52c6", lineHeight: "14px", textAlign: "center"}}>4</span>
                  </div>
                  <div className='bet' style={{width: "60%"}}>
                    <span style={{fontSize: "14px", color: "#2ba3cf", lineHeight: "14px"}}><AiFillStar /> 100 <img src="/cake2.png"/> Username123 </span>
                  </div>
                  <div className='bet' style={{width: "30%"}}>
                    <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px", display: "flex", justifyContent: "space-between", width: "100%"}}><span>12.00</span><span style={{color: "#f8bf60"}}>x</span></span>
                    <span style={{fontSize: "13px", color: "#fff", lineHeight: "14px", display: "flex", justifyContent: "space-between", width: "100%"}}>10.00<img src='/diamond.png'/></span>
                  </div>
                </div>
              </div>
              <div className='winner-control'>
                <button className='header-button' 
                  style={{
                    background:"#2c3137",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    boxShadow: "0px 4px #171c22",
                    fontSize: "15px",
                    width: "40%"
                }}>GROUP</button>
                <button className='header-button'
                  style={{
                    background:"#f8bf60",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                    boxShadow: "0px 4px #997a49",
                    color: "#161c23",
                    fontSize: "15px",
                    width: "40%"
                  }}
                >SOLO</button>
              </div>
          </div>
        </div>
      </div>
      {
        chatPanelState === 0 ?
          (
            <div className='chat'
              style={{width: "15%", background: "#20252b", position: "relative"}}
            >
              <div className='chat-header'>
                <AiFillCaretRight onClick={() => setChatPanelState(1)}/>
                <span>English Chat Room</span>
                <CiInboxOut />
              </div>
              <div style={{position: "absolute", bottom: "10px", width: "100%", padding: "10px"}}>
                <div className='chat-panel'>
      
                </div>
                <input className='chat-input' placeholder='Send a message'/>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "5px"}}>
                  <span style={{fontSize: "12px", color: "#f8bf60"}}>12,750</span>
                  <button className='header-button'
                    style={{
                      background:"#f8bf60",
                      boxShadow: "0px 4px #997a49",
                      color: "#161c23",
                      fontSize: "12px",
                      fontWeight: "800",
                      borderRadius: "4px",
                      height: "20px",
                      width: "30%",
                    }}>chat</button>
                </div>
              </div>
            </div>
            )
          :
          ""
      }
      
    </div>
  );
}
