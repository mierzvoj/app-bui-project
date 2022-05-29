import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { LocationData } from "../../model/location-data.model";

const LocationList = ({ locations }: { locations: LocationData[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="header">Street</TableCell>
            <TableCell className="header">Street No.</TableCell>
            <TableCell className="header">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locations.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.street}
              </TableCell>
              <TableCell>{row.streetNo}</TableCell>
              <TableCell>{row.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default LocationList;
