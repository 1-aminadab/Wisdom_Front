import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// other components
import MessageNotification from "../../../components/notification/MessageNotification";
import GeneralNotification from "../../../components/notification/GeneralNotification";
import SearchInput from "../../../components/input/SearchInput";
import CloseIcon from '@mui/icons-material/Close';
//
import SearchIcon from '@mui/icons-material/Search';
import Logo from "../../../assets/images/wisdom3.png";
//
import { useAuth } from "../../../contexts/AuthContext";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import ProtectedComponent from "../../../components/ProtectedComponent";

import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import Tabs from "@mui/material/Tabs";
import LinkTab from "@mui/material/Tab";

const drawerWidth = 240;
const navItems = [
  { link: "#home", title: "Home" },
  { link: "#service", title: "Services" },
  { link: "#blog", title: "News" },
  { link: "#about", title: "About" },
  { link: "/contact", title: "Contact" },
];

function DrawerAppBar(props) {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth()
  const getUser = useSelector((store)=> store.user);

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [openInput, setOpenInput]= React.useState(false)
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <div
          style={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            fontWeight: "600",
            color: "#333",
            fontSize: "20px",
            fontFamily: "cursive",
            gap: "10px",
          }}
        >
          <img
            style={{ objectFit: "cover", width: "50px" }}
            src={Logo}
            alt=""
          />
          <h1>Wisdom</h1>
        </div>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item,index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton href={item.link} sx={{ textAlign: "center", fontFamily:"fantasy",fontStyle:"italic",fontWeight:"500"}}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="new-navbar"
        component="nav"
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
          display: "flex",
          color: "black",
        }}
      >
        <div style={{display:`${openInput ? "flex": "none"}`}} className="media-input">
          <input placeholder="Search..." type="text" />
          
          <CloseIcon onClick={()=> setOpenInput(false)} fontSize="large" sx={{fontSize:"25px",fontWeight:"700", color:"#444", cursor:"pointer"}}/>
        </div>
        
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{display:"flex", alignItems:"center",gap:"10px"}}>
          
         
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
         
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0, display: { xs: "block", sm: "block" } }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "600",
                color: "#333",
                fontSize: "20px",
                fontFamily: "cursive",
                gap: "10px",
              }}
            >
              <img
                style={{ objectFit: "cover", width: "50px" }}
                src={Logo}
                alt=""
              />
              <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}
          >
              <h1 style={{fontFamily:"cursive", fontSize:'20px', fontWeight:"600"}}>Wisdom</h1></Typography>
            </div>
          </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Tabs
              value={value}
              style={{ borderColor:"red" }}
              onChange={handleChange}
              aria-label="disabled tabs example"
              
            >
              {navItems.map((item, index) => (
                <LinkTab
                href={item.link}
                  sx={{ color: "#555", fontSize: "13px"}}
                  key={index}
                  label={item.title}

                />
              ))}
            </Tabs>
          </Box>

          <div className="header-actions">
            <Box  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
               <SearchInput />
            </Box>
            <Box onClick={()=> setOpenInput(true)}  sx={{ display: { xs: 'block', lg:"none" }, border:"2px solid #22f7",padding:"2px", borderRadius:"5px",cursor:"pointer", }}>
               <SearchIcon fontSize="large" sx={{color:"#444", fontWeight:"700"}}/>
            </Box>
            {isAuthenticated ? (
              <div
                style={{ display: "flex", alignItems: "center", gap: "25px" }}
              >
                {/* Message */}
                <MessageNotification />
                {/* Notification */}
                <GeneralNotification />
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt={user.fullName}
                        src="/static/images/avatar/2.jpg"
                      />
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
                      <Typography
                        textAlign="center"
                        onClick={() => navigate("/profile")}
                      >
                        Profile
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => navigate("/dashboard")}
                      >
                        Dashbaord
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">
                        <ProtectedComponent />
                      </Typography>
                    </MenuItem>
                  </Menu>
                </Box>{" "}
              </div>
            ) : (
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span onClick={() => navigate("/login")} style={{fontSize:"16px", color:"gray", textDecoration:"underline"}}>Login</span>
                <a href="#" className="btn has-before">
                  <span style={{fontSize:"15px"}}  className="span" onClick={() => navigate("/signup")}>
                    Sign Up
                  </span>
                  <ion-icon
                    name="arrow-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </a>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
