import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  IconButton,
  Snackbar,
  TextField,
} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export interface LoginData {
  email?: string;
  password?: string;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === "test@test" && password === "test") {
      navigate("/users/list");
    } else {
      setOpen(true);
    }
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
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <TextField
              autoFocus
              type="email"
              value={email}
              onChange={(
                e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormLabel>Password</FormLabel>
          <FormControl>
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
          Login
        </Button>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message="Wrong authenthication data!"
        onClose={handleClose}
        action={action}
      />
    </div>
  );
}
