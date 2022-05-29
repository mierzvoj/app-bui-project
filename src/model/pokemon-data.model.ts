import { PokemonItem } from "./pokemon-item.model";

export interface PokemonData {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonItem[];
}