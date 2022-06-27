import TextField from "@material-ui/core/TextField";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import React, { ChangeEvent, FormEvent, useState } from "react";
import ValuesList from "../ValuesList/ValuesList";
import "./Calculation.css";

export default function Calculation() {
  const [value, setValue] = useState<number>(Math.round(Math.random() * 100));
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<number[]>([]);

  const validateForm = () => {
    return !Number.isNaN(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValues([...values, value]);
    setValue(Math.round(Math.random() * 100));
    setOpen(true);
  };

  const handleRemove = (index: number) => {
    const result = [...values];
    result.splice(index, 1);
    setValues(result);
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
    <>
      <div className="Login">
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
          <FormGroup id="formgroup">
            <FormLabel>Value</FormLabel>
            <FormControl id="value">
              <TextField
                autoFocus
                type="number"
                value={value}
                onChange={(
                  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                ) => setValue(+e.target.value)}
              />
            </FormControl>
          </FormGroup>
          <Button type="submit" color="success" disabled={!validateForm()}>
            Insert
          </Button>
        </form>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          autoHideDuration={6000}
          message="Value inserted!"
          onClose={handleClose}
          action={action}
        />
      </div>
      <ValuesList values={values} onRemove={handleRemove} />
    </>
  );
}
