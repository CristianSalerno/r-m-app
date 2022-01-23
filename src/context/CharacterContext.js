import { createContext } from 'react';

const CharacterContext = createContext({
	characters: [],
	loading: true,
});

export default CharacterContext;
