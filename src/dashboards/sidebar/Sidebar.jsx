import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
//Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import SidebarOptions from "./SidebarOptions";
import { teacher } from "./teacherContents";
import { parent } from "./parentContents";
import { student } from "./StudentContents";
import {useNavigate} from "react-router-dom"
// context
import { useAuth } from "../../contexts/AuthContext";

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});


export default function Sidebar() {
  const { isAuthenticated, user } = useAuth();
  console.log("dashboard")
  console.log(isAuthenticated,user);
  const navigate = useNavigate()
  const [sideList, setSideList] = React.useState([]);

  React.useEffect(() => {
    if (user.userType === "parent") {
      return setSideList(parent);
    }
   else if (user.userType === "teacher") {
     return setSideList(teacher);
    }
    else if (user.userType === "student") {
     return setSideList(student);
    }
    else{
      navigate("/")
    }
  });

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <ThemeProvider
        sx={{
          height: "100%",
        }}
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "dark",
            primary: { main: "rgb(102, 157, 246)" },
            background: { paper: "rgb(5, 30, 52)" },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{ fontSize: 20 }}>👑</ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="Wisdom"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
            <Divider />
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <DashboardIcon fontSize="large" color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Dashboard"
                  primaryTypographyProps={{
                    color: "primary",
                    fontWeight: "large",
                    variant: "body2",
                    fontSize: "20px",
                  }}
                />
              </ListItemButton>
              <Tooltip title="Project Settings">
                <IconButton
                  size="large"
                  sx={{
                    "& svg": {
                      color: "rgba(255,255,255,0.8)",
                      transition: "0.2s",
                      transform: "translateX(0) rotate(0)",
                    },
                    "&:hover, &:focus": {
                      bgcolor: "unset",
                      "& svg:first-of-type": {
                        transform: "translateX(-4px) rotate(-20deg)",
                      },
                      "& svg:last-of-type": {
                        right: 0,
                        opacity: 1,
                      },
                    },
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      height: "80%",
                      display: "block",
                      left: 0,
                      width: "1px",
                      bgcolor: "divider",
                    },
                  }}
                >
                  <Settings />
                  <ArrowRight
                    sx={{ position: "absolute", right: 4, opacity: 0 }}
                  />
                </IconButton>
              </Tooltip>
            </ListItem>
            <Divider />

            <SidebarOptions listFile={sideList} />
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
