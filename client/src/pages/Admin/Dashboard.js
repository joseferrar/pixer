import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AdminCard from "../../components/Cards/AdminCard";
import { adminTotal } from "../../data/adminTotal";
import SalesChart from "../../components/Charts/SalesChart";
import BasicTable from "../../components/Tables/BasicTable";
import DropDownTable from "../../components/Tables/DropDownTable";
import LargeTable from "../../components/Tables/LargeTable";

function Dashboard() {
  return (
    <>
      <Grid container spacing={1} >
        {adminTotal.map((item, i) => (
          <Grid item xs={4} sm={4} md={3}>
            <AdminCard
              key={i}
              title={item.title}
              icon={item.icon}
              days={item.days}
              rate={item.rate}
            />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={4} sm={4} md={3} bgcolor="#fff" padding={5} marginTop={5}>
        <Typography marginBottom={8} fontSize={14}>
          Sales History
        </Typography>
        <SalesChart />
      </Grid>

      <Grid container spacing={3} marginTop={5}>
        <Grid item xs={4} sm={4} md={6}>
          <DropDownTable />
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
          <BasicTable />
        </Grid>
        <Grid item xs={4} sm={4} md={12}>
          <LargeTable />
        </Grid>
      </Grid>
    </>
    // <Card sx={{ width: 360 }} elevation={0}>
    //   <CardContent>
    //     <Typography
    //       variant="subtitle1"
    //       component="div"
    //       fontWeight={"bold"}
    //       fontSize={15}
    //     >
    //       Total Revenue
    //     </Typography>
    //     <div style={{ display: "flex" }}>
    //       <Typography sx={{ mb: 1.5 }} color="text.secondary" fontSize={12}>
    //         (Last 30 Days)
    //       </Typography>
    //       <div
    //         style={{
    //           backgroundColor: "rgb(167, 243, 208)",
    //           padding: 10,
    //           borderRadius: 50,
    //           marginLeft: "auto",
    //           marginTop: -30,
    //           height: 50,
    //         }}
    //       >
    //         <DollerIcon width={30} height={30} />
    //       </div>
    //     </div>
    //     <Typography
    //       variant="h6"
    //       component="h6"
    //       fontWeight={"bold"}
    //       marginTop={6}
    //     >
    //       €971.22
    //     </Typography>
    //   </CardContent>
    // </Card>
  );
}

export default Dashboard;
