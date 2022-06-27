import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./ValuesList.css";

const ValuesList = ({
  values,
  onRemove,
}: {
  values: number[];
  onRemove: (index: number) => void;
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="header">Value</TableCell>
            <TableCell className="header"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {values.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row}</TableCell>
              <TableCell>
                <div className="align-right">
                  {/* <Button onClick={(e) => onRemove(index)}>Remove</Button> */}
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={(e) => onRemove(index)}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>
              <div className="footer">
                Sum: {values.reduce((p, c) => p + c, 0)}
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <div className="footer">
                Average:{" "}
                {values.length
                  ? values.reduce((p, c) => p + c, 0) / values.length
                  : "-"}
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default ValuesList;
