import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
// icons
import { GrNotification } from "react-icons/gr";
function GeneralNotification() {
  const navigate = useNavigate();
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
            <Badge size="small" color="primary"  badgeContent={3} sx={{fontSize:"20px"}}>
              <GrNotification />
            </Badge>
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center" onClick={() => navigate("/profile")}>
              Profile
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </div>
  );
}

export default GeneralNotification;
