"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function createNewAccount() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("http://ec2-51-21-220-136.eu-north-1.compute.amazonaws.com:4000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, password }),
    });

    if (response.ok) {
      alert("User created successfully!");
      router.push("/Login"); 
    } else {
      alert("Error creating user.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center p-10 gap-10">
      <h1 className="text-2xl">skapa användare</h1>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          className="bg-white text-black rounded-lg px-5 py-2"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
        />
        <input
          type="password"
          className="bg-white text-black rounded-lg px-5 py-2"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button
          className="bg-amber-500 hover:bg-amber-800 px-5 py-2 rounded-lg text-white w-full"
          onClick={handleRegister}
        >
          Skapa Konto
        </button>
      </div>
    </div>
  );
}
