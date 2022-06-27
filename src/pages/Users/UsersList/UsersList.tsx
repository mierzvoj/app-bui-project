import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../../model/user-data.model";
import UserDialog from "../UserDialog/UserDialog";
import { IUsersContext, UsersContext } from "../Users";
import "./UsersList.css";

const UsersList = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [passengers, setListOfPassengers] = React.useState<string[]>([]);
  const [rowIndex, setRowIndex] = React.useState<number>(-1);
  const { users, setUsers } = useContext<IUsersContext>(UsersContext);

  const handleClickOpen = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (open === false) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRowClick = (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    index: number,
    users: UserData[]
  ) => {
    if (open === false) {
      setRowIndex(index);
      setListOfPassengers(users[index].passengers ?? []);
    }
  };

  const handleRowDoubleClick = (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    index: number
  ) => {
    if (open === false) {
      navigate("/users/user/" + index);
    }
  };

  const handlePassengers = (passengers: string[]) => {
    const result = [...users];
    result[rowIndex].passengers = passengers;
    setListOfPassengers(passengers);
    setUsers(result);
  };

  return (
    <UsersContext.Consumer>
      {(context) => (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="header">Name</TableCell>
                <TableCell className="header">Surname</TableCell>
                <TableCell className="header">City</TableCell>
                <TableCell className="header">Role</TableCell>
                <TableCell className="header">Active</TableCell>
                <TableCell className="header">Login</TableCell>
                <TableCell className="header">Password</TableCell>
                <TableCell className="header">
                  List of potential passengers
                </TableCell>
                <TableCell className="header">Dialog</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {context.users.map((row, index) => (
                <TableRow
                  key={index}
                  onClick={(event) =>
                    handleRowClick(event, index, context.users)
                  }
                  onDoubleClick={(event) => handleRowDoubleClick(event, index)}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.surname}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>{row.active ? "Active" : "Inactive"}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.password}</TableCell>
                  <TableCell>{row.passengers?.map((h) => h + ",")}</TableCell>
                  <TableCell>
                    <Button
                      onClick={(event) => handleClickOpen(event)}
                      autoFocus
                    >
                      ...
                    </Button>
                    <UserDialog
                      open={open}
                      onClose={handleClose}
                      passengers={passengers}
                      handlePassengers={handlePassengers}
                    ></UserDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </UsersContext.Consumer>
  );
};

export default UsersList;
