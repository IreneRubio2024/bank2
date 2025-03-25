"use client";
import { useContext, useEffect, useState } from "react";

import { HandleAccountContext } from "../context/Accountcontext";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const { account, setAccount, amount } = useContext(HandleAccountContext);
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
      fetchAccountData(storedToken);
    }
  }, []);

  const fetchAccountData = async (token) => {
    try {
      const response = await fetch(
        "http://localhost:4000/Account/page.js",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        }
      );

      if (!response.ok) throw new Error("Error al obtener la cuenta");

      const data = await response.json();
      setAccount(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 text-center w-96">
        <h1 className="text-2xl font-bold text-gray-800">Mitt Konto</h1>
        {account ? (
          <div className="mt-6">
            <p className="text-2xl font-semibold text-green-700 mt-2">
              Saldo: {amount} kr
            </p>
          </div>
        ) : (
          <p className="text-red-500 mt-4">No se pudo cargar la cuenta</p>
        )}
        <button
          onClick={handleLogout}
          className="mt-6 bg-amber-700 hover:bg-orange-900 text-white font-bold py-2 px-6 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
