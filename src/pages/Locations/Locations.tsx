import React, { Dispatch, SetStateAction, useState } from "react";
import { Outlet } from "react-router-dom";
import { LocationData } from "../../model/location-data.model";

const entryData: LocationData[] = [
  {
    street: "nowowiejska",
    streetNo: 5,
    city: "gdynia",
  },
  {
    street: "abrahama",
    streetNo: 20,
    city: "gdynia",
  },
  {
    street: "10 tego lutego",
    streetNo: 25,
    city: "gdynia",
  },
];

export interface ILocationsContext {
  locations: LocationData[];
  setLocations: Dispatch<SetStateAction<LocationData[]>>;
}

export const LocationsContext = React.createContext<ILocationsContext>({
  locations: entryData,
  setLocations: () => {},
});

const Locations = () => {
  const [locations, setLocations] = useState<LocationData[]>(entryData);
  const value = { locations, setLocations };

  return (
    <LocationsContext.Provider value={value}>
      <Outlet />
    </LocationsContext.Provider>
  );
};

export default Locations;
