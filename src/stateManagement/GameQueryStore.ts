/*
    ? Zustand: A state management library for creating global Stores to manage and share state across compnents using a single hook.
    * A Store is the object that holds the state and the functions (actions) that update that state.

    To use Zustand to manage the state of our application me must:
        1. Create an interface to define the shape of the store
        2. Create a hook encapsulating the state management logic
*/

import { create } from "zustand";

//? Define the shape of the Store:

interface GameQuery {
  searchedText?: string;
  genreId?: number;
  platformId?: number;
  sortOrder?: { value: string; label: string };
}

interface GameQueryStore {
  //State of the store
  gameQuery: GameQuery;

  // Actions to update the State
  setSearchText: (searchText: string) => void;
  setSelectedGenre: (genreId: number) => void;
  setSelectedPlatform: (platformId: number) => void;
  setSortOrder: (sortOrder: { value: string; label: string }) => void;
  resetState: () => void;
}

//? Create Store Hook to manage the global state
const useGameQueryStore = create<GameQueryStore>((set) => ({
  //Initial State:
  gameQuery: {},

  //Actions:
  // set(store =({})) updates the state in the store. It takes a function that receives the current state (store) and returns the new updated state
  setSearchText: (text) =>
    //When the user searches for a game we must clear all other filters to make sure they will be able to find the game in case they selected the wrong filter
    set(() => ({ gameQuery: { searchedText: text } })),

  setSelectedGenre: (selectedGenreId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genreId: selectedGenreId },
    })),

  setSelectedPlatform: (selectedPlatformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId: selectedPlatformId },
    })),

  setSortOrder: (selectedSortOrder) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder: selectedSortOrder },
    })),
  resetState: () =>
    set(() => ({
      gameQuery: {},
    })),
}));

export default useGameQueryStore;
