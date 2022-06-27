import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import React, { ChangeEvent, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IUsersContext, UsersContext } from "../Users";
import "./UserForm.css";

const cities: string[] = ["Gdańsk", "Gdynia", "Sopot", "Warszawa", "Zakopane"];

export default function UserForm() {
  const { users, setUsers } = useContext<IUsersContext>(UsersContext);
  const params = useParams();
  const index = ((params.index ?? -1) as number) ?? -1;
  const navigate = useNavigate();

  const user = users[index] ?? {};

  const [name, setName] = useState(user?.name ?? "");
  const [surname, setSurname] = useState(user?.surname ?? "");
  const [city, setCity] = useState(user?.city ?? "");
  const [role, setRole] = useState<"driver" | "passenger" | undefined>(
    user?.role ?? "passenger"
  );
  const [active, setActive] = useState(user?.active ?? true);
  const [email, setEmail] = useState(user?.email ?? "");
  const [password, setPassword] = useState(user?.password ?? "");

  const [open, setOpen] = useState(false);

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleApply = () => {
    setOpen(true);
    const copy = [...users];
    copy[index] = { name, surname, city, role, active, email, password };
    setUsers(copy);
    navigate("/users/list");
  };

  const handleAdd = () => {
    setOpen(true);
    setUsers([
      ...users,
      { name, surname, city, role, active, email, password },
    ]);
    navigate("/users/list");
  };

  const handleCancel = () => {
    navigate("/users/list");
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleReset = () => {
    setName("");
    setSurname("");
    setCity("");
    setRole("passenger");
    setActive(true);
    setEmail("");
    setPassword("");
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="Login">
      <form>
        <FormGroup id="formgroup">
          <FormLabel>Name</FormLabel>
          <FormControl id="name">
            <TextField
              autoFocus
              value={name}
              onChange={(
                e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => setName(e.target.value)}
            />
          </FormControl>
          <FormLabel>Surname</FormLabel>
          <FormControl id="surname">
            <TextField
              value={surname}
              onChange={(
                e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => setSurname(e.target.value)}
            />
          </FormControl>
          <FormLabel>City</FormLabel>
          <FormControl id="city">
            <Select
              value={city}
              onChange={(e) => setCity(e.target.value as string)}
            >
              {cities.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl id="role">
            <FormLabel>Role</FormLabel>
            <RadioGroup
              defaultValue={role}
              value={role}
              onChange={(e) =>
                setRole(e.target.value as "driver" | "passenger" | undefined)
              }
            >
              <FormControlLabel
                value="passenger"
                control={<Radio />}
                label="passenger"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                checked={active}
                onChange={(e) => setActive(e.target.checked as boolean)}
              />
            }
            label="Active"
          />
          <FormLabel>Email</FormLabel>
          <FormControl id="email">
            <TextField
              type="email"
              value={email}
              onChange={(
                e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormLabel>Password</FormLabel>
          <FormControl id="password">
            <TextField
              type="password"
              value={password}
              onChange={(
                e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => setPassword(e.target.value)}
            />
          </FormControl>
        </FormGroup>
        <Button
          color="primary"
          disabled={!validateForm()}
          onClick={handleApply}
        >
          Apply
        </Button>
        <Button color="primary" disabled={!validateForm()} onClick={handleAdd}>
          Add new
        </Button>
        <Button color="secondary" onClick={handleReset}>
          Reset
        </Button>
        <Button color="warning" onClick={handleCancel}>
          Cancel
        </Button>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message="Item added!"
        onClose={handleClose}
        action={action}
      />
    </div>
  );
}
