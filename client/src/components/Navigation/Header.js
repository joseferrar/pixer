import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import logo from "../../packages/images/logo.svg";
import { Avatar, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const drawerWidth = 300;

const settings = [
  {
    id: 1,
    path: "/",
    name: "Admin",
  },
  {
    id: 2,
    path: "/profile",
    name: "Profile",
  },
  {
    id: 3,
    path: "/login",
    name: "Logout",
  },
];
function Header() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={1}
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          display: "flex",
          backgroundColor: "#fff",
          height: 80,
        }}
        style={{ display: "flex" }}
      >
        <div style={{ display: "flex" }}>
          <Toolbar>
            <img src={logo} alt="logo" style={{ width: 200, height: 40 }} />
          </Toolbar>
          <Toolbar style={{ marginLeft: "auto", marginTop: 8 }}>
            <Box style={{ flexGrow: 0 }}>
              <Tooltip title="Create Shop">
                <Button
                  variant="contained"
                  color="success"
                  style={{
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    background: "#009688",
                    marginRight: 20,
                  }}
                >
                  Create Shop
                </Button>
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://pixer-admin.vercel.app/avatar-placeholder.svg"
                    style={{ width: 60, height: 60 }}
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
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => {
                      navigate(setting.path);
                      handleCloseUserMenu();
                    }}
                  >
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </div>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Sidebar />
      </Drawer>
    </Box>
  );
}

export default Header;
