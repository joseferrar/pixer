import { Avatar, Container, Typography, Button } from "@mui/material";
import React from "react";
import CheckIcon from "../icons/CheckIcon";
import { GreenLink } from "../Links";

function Profilebar() {
  console.log("jj");
  return (
    <Container
      style={{ marginTop: 50, display: "grid", justifyContent: "center" }}
    >
      <Avatar
        alt="Remy Sharp"
        src="https://pixer-admin.vercel.app/avatar-placeholder.svg"
        style={{ width: 140, height: 140, border: "1px solid #ccc" }}
      />
      <Typography
        fontSize={16}
        fontWeight={"bold"}
        textAlign="center"
        fontFamily={"inherit"}
        marginTop={2}
      >
        admin
      </Typography>
      <Typography
        color="gray"
        variant="subtitle2"
        fontSize={13}
        textAlign="center"
        marginTop={1}
      >
        admin@demo.com
      </Typography>
      <div style={{ display: "flex", marginTop: 2 }}>
        <Typography
          color="gray"
          variant="subtitle2"
          fontSize={13}
          textAlign="center"
        >
          Please add your
        </Typography>
        <GreenLink style={{ textDecoration: "underline", marginLeft: 6 }}>
          Profile
        </GreenLink>
      </div>

      <Button
        variant="outlined"
        color="success"
        startIcon={<CheckIcon />}
        style={{
          color: "gray",
          textTransform: "capitalize",
          borderColor: "#ccc",
          width: 100,
          fontSize: 12,
          marginTop: 30,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Enabled
      </Button>
    </Container>
  );
}

export default Profilebar;
