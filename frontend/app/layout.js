"use client";
import AccountContextProvider from "./context/Accountcontext";
export default function Layout({ children }) {
  return (
    <AccountContextProvider>
      <div className="layout">{children}</div>
    </AccountContextProvider>
  );
}
