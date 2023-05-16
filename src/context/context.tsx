"use client";
import { createContext, useContext, useState } from "react";

interface Props {
	children: React.ReactNode;
}

interface Context {
	state: {
		favorites: string[];
	};
	actions: {
		toggleFavorite: (image: string) => void;
	};
}

const FavoriteContext = createContext({} as Context);

export const FavoriteProvider = ({ children }: Props) => {
	const [favorites, setFavorites] = useState<string[]>([]);

	const toggleFavorite = (image: string) => {
		if (favorites.includes(image)) {
			setFavorites(favorites.filter((f) => f !== image));
		} else {
			setFavorites([...favorites, image]);
		}
	};

	return (
		<FavoriteContext.Provider
			value={{ state: { favorites }, actions: { toggleFavorite } }}
		>
			{children}
		</FavoriteContext.Provider>
	);
};

//hook

export const useFavorites = (): [
	Context["state"]["favorites"],
	Context["actions"]["toggleFavorite"]
] => {
	const { state, actions } = useContext(FavoriteContext);

	return [state.favorites, actions.toggleFavorite];
};
