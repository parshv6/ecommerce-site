//setup data layer
//we need to keep track basket

import React, { createContext, useContext, useReducer } from "react";

//This is the DATA LAYOUT
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//This is how we use it inside of component
export const useStateValue = () => useContext(StateContext);
