import { createContext } from 'react';

const UserContext = createContext({
	characters: [],
	pages: null,
	loading: true,
});

export default UserContext;
