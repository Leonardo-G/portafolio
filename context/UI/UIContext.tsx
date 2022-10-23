import { createContext } from 'react';

export interface ContextProps {
    campo: string;
    changeCampoNav: ( campoNav: string ) => void;
};

export const UIContext = createContext({} as ContextProps); 