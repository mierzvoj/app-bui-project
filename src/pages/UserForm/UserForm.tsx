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
import React, { ChangeEvent, FormEvent, useState } from "react";
import { UserData } from "../../model/user-data.model";
import UsersList from "../UsersList/UsersList";
import "./UserForm.css";

const cities: string[] = ["Gdańsk", "Gdynia", "Sopot", "Warszawa", "Zakopane"];

export default function UserForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState<"female" | "male" | undefined>("female");
  const [active, setActive] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<UserData[]>([]);

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUsers([
      ...users,
      { name, surname, city, gender, active, email, password },
    ]);
    setOpen(true);
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
    setGender("female");
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
    <>
      <div className="Login">
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
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
            <FormControl id="gender">
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                defaultValue={gender}
                value={gender}
                onChange={(e) =>
                  setGender(e.target.value as "female" | "male" | undefined)
                }
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
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
          <Button type="submit" color="primary" disabled={!validateForm()}>
            Apply
          </Button>
          <Button color="secondary" onClick={handleReset}>
            Reset
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
      <UsersList users={users} />
    </>
  );
}
