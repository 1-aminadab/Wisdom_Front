import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
export default function NestedList({ listFile }) {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(true);
  const [currentIndex, setIndex] = React.useState(0);
  const handleClick = (index) => {
    setOpen(!open);
    setIndex(index);
  };
const [subIndex, setSubIndex] = React.useState(null)
const handleSubIndex = (index)=>{
  setSubIndex(index)
}
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      //   subheader={
      //     <ListSubheader component="div" id="nested-list-subheader">
      //       Nested List Items
      //     </ListSubheader>
      //   }
    >
      {listFile.map((list, index) => {
        return (
          <div key={index}>
            <ListItemButton
              sx={{ backgroundColor: "gray" }}
              onClick={() => handleClick(index)}
            >
              <ListItemIcon>{list.icon}</ListItemIcon>
              <ListItemText primary={list.title} />
              {currentIndex === index ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={currentIndex === index} timeout="auto" unmountOnExit>
              {list.list.map((subList, index) => {
                return (
                  <div style={{ color:`${index === subIndex ? "#2df": ""}`  }}  onClick={()=>{
                    handleSubIndex(index)
                    navigate(`/dashboard/${subList.link}`)}}>
                    <List key={index} component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4, }}>
                        <ListItemIcon>
                          <VscDebugBreakpointLog />
                        </ListItemIcon>
                        <ListItemText primary={subList.title} />
                      </ListItemButton>
                      <hr />
                    </List>
                  </div>
                );
              })}
            </Collapse>
            <hr />
          </div>
        );
      })}
    </List>
  );
}
