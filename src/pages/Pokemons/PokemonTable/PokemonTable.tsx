import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { PokemonItem } from "../../../model/pokemon-item.model";
import { IPokemonContext, PokemonContext } from "../Pokemons";
import "./PokemonTable.css";

const PokemonTable = ({ pokemons }: { pokemons: PokemonItem[] }) => {
  const navigate = useNavigate();

  const handleClick = (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    row: PokemonItem
  ) => {
    navigate("/pokemons/" + row.name, {
      state: { url: row.url, name: row.name },
    });
  };

  const addToWishlist = (row: PokemonItem, context: IPokemonContext) => {
    if (context.wishListHelper) {
      context.wishListHelper.addItem(row);
    }
  };

  const addToCaught = (row: PokemonItem, context: IPokemonContext) => {
    if (context.caughtHelper) {
      context.caughtHelper.addItem(row);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="header">Pokemon name</TableCell>
            <TableCell className="header">Details url</TableCell>
            <TableCell className="header"></TableCell>
            <TableCell className="header"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemons.map((row) => (
            <TableRow
              key={row.name}
              onClick={(event) => handleClick(event, row)}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.url}</TableCell>
              <TableCell>
                <PokemonContext.Consumer>
                  {(context) => (
                    <Button
                      color="primary"
                      onClick={() => addToWishlist(row, context)}
                    >
                      WishList
                    </Button>
                  )}
                </PokemonContext.Consumer>
                <PokemonContext.Consumer>
                  {(context) => (
                    <Button
                      color="primary"
                      onClick={() => addToCaught(row, context)}
                    >
                      Caught
                    </Button>
                  )}
                </PokemonContext.Consumer>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PokemonTable;
