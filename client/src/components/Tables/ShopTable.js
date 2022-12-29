import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Chip, Typography } from "@mui/material";
import EyeIcon from "../icons/EyeIcon";
import CheckOutlineIcon from "../icons/CheckOutlineIcon";

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

function ShopTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "auto" }} aria-label="simple table" size="medium">
        <TableHead>
          <TableRow style={{ backgroundColor: "#f7f8f9" }}>
            <TableCell>
              <Typography fontWeight={600} fontSize={15}>
                Logo
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight={600} fontSize={15}>
                Name
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight={600} fontSize={15}>
                Owner Name
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight={600} fontSize={15}>
                Products
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight={600} fontSize={15}>
                Orders
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight={600} fontSize={15}>
                Status
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
                <Avatar
                  alt="Remy Sharp"
                  src="https://pixer-admin.vercel.app/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F1118%2Fconversions%2FScreenshot-2022-11-26-132735-thumbnail.jpg&w=48&q=75"
                  sx={{ width: 50, height: 50, borderRadius: 1 }}
                />
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>

              <TableCell align="right"> test</TableCell>
              <TableCell align="right">20</TableCell>
              <TableCell align="right">
                <Chip size="small" label="Active" color="success" />
              </TableCell>
              <TableCell align="right">
                <CheckOutlineIcon onClick={() => alert("test")} />
                <EyeIcon width={24} height={24} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ShopTable;
