import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DashboardIcon from "../icons/DashboardIcon";
import { userRoutes } from "../../routes/userRoutes";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate()
  return (
    <div>
      <Box sx={{ overflow: "auto", marginTop: 3 }}>
        <List>
          {userRoutes.map((item, index) => (
            <ListItem key={index} disablePadding onClick={()=> navigate(item.path)}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.name}
                  style={{ color: "#757575", marginLeft: -20 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default Sidebar;
