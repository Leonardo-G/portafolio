'use client';

import { createContext } from 'react';

export interface ContextProps {
  campo: string;
  isHover: boolean;

  changeCampoNav: (campoNav: string) => void;
  onHover: () => void;
  outHover: () => void;
}

export const UIContext = createContext({} as ContextProps);
