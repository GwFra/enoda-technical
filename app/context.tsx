"use client";

import React from "react";
import { createContext, useContext } from "react";
import Cookies from "universal-cookie";

type State = { isLoggedIn: boolean; setLoggedIn: any };
const defaultState: State = { isLoggedIn: false, setLoggedIn: () => {} };

const SiteContext = createContext(defaultState);

export default function ContextProvider({ children }: any) {
  const cookie = new Cookies();
  const token = cookie.get("access_token");
  const [isLoggedIn, setLoggedIn] = React.useState(token !== undefined);
  const state = {
    isLoggedIn,
    setLoggedIn,
  };
  return <SiteContext.Provider value={state}>{children}</SiteContext.Provider>;
}

export function useSiteContext() {
  return useContext(SiteContext);
}
