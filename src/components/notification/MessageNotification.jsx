import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Badge from "@mui/material/Badge";
// icons
import { LuMessageCircle } from "react-icons/lu";
function MessageNotification() {
    const navigate = useNavigate()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  return (
    <div>
          <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open message">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                   
                     <Badge size="small" color="primary"  badgeContent={2} sx={{fontSize:"20px"}}>
                     <LuMessageCircle/>
                    </Badge>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px',padding:"19px" }}
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
                
                   <div>
                      <h1 style={{fontSize:'13px', fontWeight:"600"}}>title 1</h1>
                      
                      <Typography textAlign="center" onClick={()=>navigate("/profile")}>the quic brown fox jumps over th lazy dog</Typography>
                      <hr />
                   </div>
                   <div>
                      <h1 style={{fontSize:'13px', fontWeight:"600"}}>title 1</h1>
                      
                      <Typography textAlign="center" onClick={()=>navigate("/profile")}>the quic brown fox jumps over th lazy dog</Typography>
                      <hr />
                   </div>
                   <div>
                      <h1 style={{fontSize:'13px', fontWeight:"600"}}>title 1</h1>
                      
                      <Typography textAlign="center" onClick={()=>navigate("/profile")}>the quic brown fox jumps over th lazy dog</Typography>
                      <hr />
                   </div>
                    
                    

                </Menu>
              </Box> 
    </div>
  )
}

export default MessageNotification