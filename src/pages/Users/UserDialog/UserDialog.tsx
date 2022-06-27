import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import * as React from "react";
import "./UserDialog.css";

export default function UserDialog({
  open,
  onClose,
  passengers,
  handlePassengers,
}: {
  open: boolean;
  onClose: () => void;
  passengers: string[];
  handlePassengers: (passengers: string[]) => void;
}) {
  const [passenger, setListOfPassengers] = React.useState("");

  const addPassenger = () => {
    handlePassengers([...passengers, passenger]);
  };

  const removePassenger = (index: number) => {
    const result = [...passengers];
    result.splice(index, 1);
    handlePassengers(result);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"User's hobbies"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
          <form>
            <FormGroup id="formgroup">
              <FormLabel>New passenger</FormLabel>
              <FormControl id="passenger">
                <div className="passenger-input">
                  <TextField
                    autoFocus
                    value={passenger}
                    onChange={(
                      e: React.ChangeEvent<
                        HTMLTextAreaElement | HTMLInputElement
                      >
                    ) => setListOfPassengers(e.target.value)}
                  />
                  <Button
                    color="primary"
                    disabled={!passengers}
                    onClick={addPassenger}
                  >
                    +
                  </Button>
                </div>
              </FormControl>
            </FormGroup>
          </form>
          <ul>
            {passengers.map((h, index) => (
              <li key={index}>
                {h}
                <Button color="primary" onClick={() => removePassenger(index)}>
                  -
                </Button>
              </li>
            ))}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
