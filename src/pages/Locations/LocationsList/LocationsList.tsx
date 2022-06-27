import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { LocationData } from "../../../model/location-data.model";
import "./LocationsList.css";

// const LocationsList = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = React.useState(false);
//   const [locations, setLocations] = React.useState<string[]>([]);
//   const [rowIndex, setRowIndex] = React.useState<number>(-1);

//   const handleClick = (
//     event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
//     index: number
//   ) => {
//     navigate("/locations/location/" + index);
//   };
const LocationsList = ({ locations }: { locations: LocationData[] }) => {
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
export default LocationsList;
