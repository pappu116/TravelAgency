import { ChatBubbleOutline, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchOutlined, WbSunnyOutlined } from "@mui/icons-material"
import { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import "./navBar.scss"

const NavBar = () => {
  const {darkMode,toggle} = useContext(DarkModeContext)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search...." />
          <SearchOutlined className="icon"/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon"/>
            English
          </div>
          <div className="item">
            {darkMode? (<WbSunnyOutlined className="icon" onClick={toggle}/>):(
          <DarkModeOutlined onClick={toggle} />
        )}
          {/* {darkMode ? (
          <WbSunnyOutlined className="icon" onClick={()=>dispatch({type:"TOGGLE"})} />
        ) : (
          <DarkModeOutlined className="icon" onClick={()=>dispatch({type:"TOGGLE"})} />
        )} */}
           
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutline className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className="icon"/>
          </div>
          <div className="item">
           <img src="https://images.unsplash.com/photo-1661621770584-637f5db3bb8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar