import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { TransitData } from "../../model/transit-data.model";

const TransitList = ({ transits }: { transits: TransitData[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="header">Name</TableCell>
            <TableCell className="header">Address From</TableCell>
            <TableCell className="header">Address To</TableCell>
            <TableCell className="header">City</TableCell>
            <TableCell className="header">Transit Group Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transits.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.addressFrom}</TableCell>
              <TableCell>{row.addressTo}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.transitGroupId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TransitList;
