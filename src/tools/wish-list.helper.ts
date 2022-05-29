import { PokemonItem } from "../model/pokemon-item.model";
import { getLocalStorageItem, setLocalStorageItem } from "./local-storage";

const wishlistPokemonsKey = 'wishlist.pokemons';

export class WishlistPokemonsHelper {

    private items: Map<string, PokemonItem> = new Map<string, PokemonItem>();

    getData(): PokemonItem[] {
        const items = getLocalStorageItem<PokemonItem[]>(wishlistPokemonsKey) ?? [];
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
        setLocalStorageItem<PokemonItem[]>(wishlistPokemonsKey, Array.from(this.items, ([key, value]) => ({ ...value })));
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