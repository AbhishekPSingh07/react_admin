import React, { useContext } from 'react'
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
function Sidebar() {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to="/" style={{textDecoration:"none"}}>
        <span className='logo'>AbhiAdmin</span>
        </Link>
      </div>
      <hr/>
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <Link to="/" style={{textDecoration:"none"}}>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
            </Link>
          </li>
          <p className='title'>LIST</p>
          <li>
            <Link to="/users" style={{textDecoration:"none"}}>
            <PersonIcon className='icon'/>
            <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/products" style={{textDecoration:"none"}}>
            <Inventory2Icon className='icon'/>
            <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="" style={{textDecoration:"none"}}>
            <CreditCardIcon  className='icon'/>
            <span>Orders</span>
            </Link>
          </li>
          <li>
            <LocalShippingOutlinedIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className='title'>USEFULL</p>
          <li>
            <InsertChartOutlinedRoundedIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className='icon'/>
            <span>Notification</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <MonitorHeartIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountCircleIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon'/>
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='color__option' onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className='color__option' onClick={()=>dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar
