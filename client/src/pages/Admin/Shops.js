import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import ShopTable from "../../components/Tables/ShopTable";

function Shops() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={4} sm={4} md={12}>
          <Paper style={{ padding: 30 }} elevation={1}>
            <Grid container spacing={3}>
              <Grid item xs={4} sm={4} md={6}>
                <Typography fontWeight={600} fontSize={18}>
                  Shops
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={6}>
                <Paper
                  elevation={0}
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 700,
                    border: "1px solid gray",
                  }}
                >
                  <IconButton sx={{ p: "10px" }} aria-label="menu">
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Type your query and press enter"
                  />
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={4} sm={4} md={12}>
          <ShopTable />
        </Grid>
      </Grid>
    </div>
  );
}

export default Shops;
