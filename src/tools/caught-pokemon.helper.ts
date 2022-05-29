import { PokemonItem } from "../model/pokemon-item.model";
import { getLocalStorageItem, setLocalStorageItem } from "./local-storage";

const caughtPokemonsKey = 'caught.pokemons';

export class CaughtPokemonsHelper {

    private items: Map<string, PokemonItem> = new Map<string, PokemonItem>();

    getData(): PokemonItem[] {
        const items = getLocalStorageItem<PokemonItem[]>(caughtPokemonsKey) ?? [];
        this.items.clear();
        items.forEach(i => this.items.set(i.url, i));
        return Array.from(this.items, ([key, value]) => ({ ...value }));
    }

    saveData(items: PokemonItem[]): void {
        this.items.clear();
        items.forEach(i => this.items.set(i.url, i));
        this._saveData();
    }

    private _saveData(): void {
        setLocalStorageItem<PokemonItem[]>(caughtPokemonsKey, Array.from(this.items, ([key, value]) => ({ ...value })));
    }

    addItem(item: PokemonItem): void {
        this.items.set(item.url, item);
        this._saveData();
    }

    removeItem(item: PokemonItem): void {
        this.items.delete(item.url);
        this._saveData();
    }
}