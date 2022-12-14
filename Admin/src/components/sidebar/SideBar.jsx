import { AccountCircleOutlined, CreditCard, Dashboard, ExitToApp, InsertChart, LocalShipping, NotificationsNone, PersonOutline, PsychologyOutlined, SettingsApplications, SettingsSystemDaydreamOutlined, Store } from "@mui/icons-material"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { DarkModeContext } from "../../context/darkModeContext"
import "./sidebar.scss"

const SideBar = () => {
  const {toggle} = useContext(DarkModeContext)
  return (
    <div className="sideBar">
        <div className="top" >
          <Link to="/" style={{textDecoration:"none"}}>
           <span className="logo">PappuAdmin</span>
          </Link>
        </div>
        <hr />
     <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration:"none"}}>
            <li>
              <PersonOutline className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/hotels" style={{textDecoration:"none"}}>
            <li>
              <Store className="icon" />
              <span>Hotels</span>
            </li>
          </Link>
          <Link to="/rooms" style={{textDecoration:"none"}}>
            <li>
              <CreditCard className="icon" />
              <span>Rooms</span>
            </li>
          </Link>
          <Link to="/" style={{textDecoration:"none"}}>
            <li>
              <LocalShipping className="icon" />
              <span>Delivery</span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <li>
            <InsertChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlined className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplications className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToApp className="icon" />
            <span>Logout</span>
          </li>
        </ul>
        </div>
        <div className="bottom">
          <div className="colorOption" onClick={toggle} ></div>
          <div className="colorOption" onClick={toggle} ></div>
            {/* <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div> */}
        </div>
    </div>
  )
}

export default SideBar