import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LocationData } from "../../../model/location-data.model";
import LocationsList from "../LocationsList/LocationsList";
import "./LocationsForm.css";

const cities: string[] = ["Gdańsk", "Gdynia", "Sopot"];
export default function LocationsForm() {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const params = useParams();
  const index = ((params.index ?? -1) as number) ?? -1;
  // const locations = locations[index] ?? {};
  const [street, setStreet] = useState("");
  const [streetNo, setStreetNo] = useState(0);
  const [city, setCity] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLocations([...locations, { street, streetNo, city }]);
    setOpen(true);
  };
  const validateForm = () => {
    return street.length > 0 && city.length > 0;
  };
  const handleApply = () => {
    setOpen(true);
    const copy = [...locations];
    copy[index] = { street, streetNo, city };
    setLocations(copy);
    navigate("/locations/list");
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
  const handleAdd = () => {
    setOpen(true);
    setLocations([...locations, { street, streetNo, city }]);
    navigate("/locations/list");
  };
  const handleReset = () => {
    setStreet("");
    setStreetNo(0);
    setCity("");
  };
  const handleCancel = () => {
    navigate("/locations/list");
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
      <div className="Locations">
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
          <FormGroup id="formgroup">
            <FormLabel>Street</FormLabel>
            <FormControl id="street">
              <TextField
                autoFocus
                value={street}
                onChange={(
                  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                ) => setStreet(e.target.value)}
              />
            </FormControl>
            <FormLabel>streetNo</FormLabel>
            <FormControl id="streetNo">
              <TextField
                value={streetNo}
                onChange={(
                  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                ) => setStreetNo(parseInt(e.target.value))}
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
          </FormGroup>
          <Button
            color="primary"
            disabled={!validateForm()}
            onClick={handleApply}
          >
            Apply
          </Button>
          <Button
            color="primary"
            disabled={!validateForm()}
            onClick={handleAdd}
          >
            Add new
          </Button>
          <Button color="secondary" onClick={handleReset}>
            Reset
          </Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          message="Item added!"
          onClose={handleClose}
          action={action}
        />
      </div>
      <LocationsList locations={locations} />
    </>
  );
}
