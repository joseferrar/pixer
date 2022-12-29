import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DollerIcon from "../../components/icons/DollerIcon";
import CartdownIcon from "../icons/CartdownIcon";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function AdminCard({ title, days, rate, icon }) {
  return (
    <Card sx={{ width: 360 }} elevation={0}>
      <CardContent>
        <Typography
          variant="subtitle1"
          component="div"
          fontWeight={"bold"}
          fontSize={15}
        >
          {title}
        </Typography>
        <div style={{ display: "flex" }}>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" fontSize={12}>
            {days}
          </Typography>
          <div
            style={{
              backgroundColor:
                title === "Total Revenue"
                  ? "rgb(167, 243, 208)"
                  : null || (title === "Total Shops" && "rgb(147, 197, 253)"),
              padding: 10,
              borderRadius: 50,
              marginLeft: "auto",
              marginTop: -26,
              height: 50,
            }}
          >
            {icon}
          </div>
        </div>
        <Typography
          variant="h6"
          component="h6"
          fontWeight={"bold"}
          marginTop={5}
        >
          {rate}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AdminCard;
