import React, { useState } from 'react';
import { RiSearch2Line, RiArrowDropDownLine } from 'react-icons/ri';
import logoImage from '../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import ProtectedComponent from "../../../components/ProtectedComponent"
import MessageNotification from '../../../components/notification/MessageNotification';
import GeneralNotification from '../../../components/notification/GeneralNotification';
import SearchInput from '../../../components/input/SearchInput';
// 
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import MenuIcon from '@mui/icons-material/Menu';
const settings = [{title:'Profile', link:"/profile"}, {title:'Account', link:"/account"},{title: "Dashboard", link:"/dashboard"},{ title: <ProtectedComponent/>, link:""}];
function Header() {
  const {isAuthenticated, user} = useAuth()
   const [openNav, setOpenNav] = useState(false)
  
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  
  return (
    <div>
      <header className="header "
     
      >
        <div className="container">
        <button class="header-action-btn" aria-label="open menu" data-nav-toggler
        onClick={()=>setOpenNav(!openNav)}
        >
          <MenuIcon fontSize='large'/>
        </button>
          <a href="#" className="logo">
            <img src={logoImage} width="162" height="50" alt="EduWeb logo" />
          </a>

          {/* Navbar */}
          <nav class="navbar active" >

        <div class="wrapper">
          <a href="#" class="logo">
            <img src="./assets/images/logo.svg" width="162" height="50" alt="EduWeb logo"/>
          </a>

          <button class="nav-close-btn" aria-label="close menu" data-nav-toggler>
           
          </button>
        </div>

        <ul class="navbar-list">

          <li class="navbar-item">
            <a href="#home" class="navbar-link" data-nav-link>Home</a>
          </li>

          <li class="navbar-item">
            <a href="#about" class="navbar-link" data-nav-link>About</a>
          </li>

          <li class="navbar-item">
            <a href="#courses" class="navbar-link" data-nav-link>Courses</a>
          </li>

          <li class="navbar-item">
            <a href="#blog" class="navbar-link" data-nav-link>Blog</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link" data-nav-link>Contact</a>
          </li>

        </ul>

      </nav>

          {/* Header Actions */}
          <div className="header-actions">
         
              <SearchInput />
            {
                isAuthenticated ? <div style={{display:"flex", alignItems:"center", gap:"25px"}}>
                  {/* Message */}
           <MessageNotification />
            {/* Notification */}
            <GeneralNotification />
                <Box sx={{ flexGrow: 0 }}>
                  
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.fullName} src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                 
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={()=>navigate("/profile")}>Profile</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={()=>navigate("/dashboard")}>Dashbaord</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center"><ProtectedComponent /></Typography>
                    </MenuItem>
                  
                </Menu>
              </Box>  </div> : <div style={{display:"flex", alignItems:"center", gap:"10px"}}> 
              <span onClick={()=> navigate("/login")}>Login</span>
            <a href="#" className="btn has-before">
              <span className="span" onClick={()=> navigate('/signup')}>Sign Up</span>
              <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
            </a></div>
            }
           
          </div>

          {/* Overlay (for small screens) */}
          <div className="overlay" data-nav-toggler data-overlay></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
