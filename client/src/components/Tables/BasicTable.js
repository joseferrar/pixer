import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Chip, Typography } from "@mui/material";
import EyeIcon from "../icons/EyeIcon";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "auto" }} aria-label="simple table" size="medium">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Typography fontWeight={600} marginLeft={-10}>
                Popular Products
              </Typography>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow style={{ backgroundColor: "#f7f8f9" }}>
            <TableCell>
              <Typography fontWeight={600} fontSize={15}>
                Shop Name
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight={600} fontSize={15}>
                Amount
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight={600} fontSize={15}>
                Status
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight={600} fontSize={15}>
                Created
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight={600} fontSize={15}>
                Actions
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">
                {" "}
                <Chip size="small" label="Approved" color="success" />
              </TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">
                <EyeIcon width={24} height={24} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
