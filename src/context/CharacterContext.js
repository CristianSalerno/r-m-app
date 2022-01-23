import { createContext } from 'react';

const CharacterContext = createContext({
	characters: [],
	pages: null,
	loading: true,
});

export default CharacterContext;
