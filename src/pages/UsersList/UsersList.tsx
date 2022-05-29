import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { UserData } from "../../model/user-data.model";
import "./UsersList.css";

const UsersList = ({ users }: { users: UserData[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="header">Name</TableCell>
            <TableCell className="header">Surname</TableCell>
            <TableCell className="header">City</TableCell>
            <TableCell className="header">Gender</TableCell>
            <TableCell className="header">Active</TableCell>
            <TableCell className="header">Login</TableCell>
            <TableCell className="header">Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.surname}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.active ? "Active" : "Inactive"}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.password}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersList;
