"use client";

import { createContext, useState } from "react";
export const HandleAccountContext = createContext([]);

export default function AccountContextProvider({ children }) {
  const [account, setAccount] = useState(null);
  const [amount, setAmount] = useState(1000);
  return (
    <HandleAccountContext.Provider
      value={{ account, setAccount, amount, setAmount }}
    >
      {children}
    </HandleAccountContext.Provider>
  );
}
