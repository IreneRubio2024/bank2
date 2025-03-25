"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin() {
    console.log("Intentando login con:", username, password);

    try {
      const response = await fetch(
        "http://localhost:4000/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();
      console.log("Backend's answer:", data);

      if (response.ok) {
        localStorage.setItem("token", data.token);
        console.log("Token saved:", localStorage.getItem("token"));
        router.push("/Account");
      } else {
        alert("Login failed: " + data.message);
      }
    } catch (error) {
      console.error("Failed:", error);
      alert("Error al hacer login");
    }
  }

  return (
    <div className="flex flex-col min-h-screen items-center p-10 gap-10">
      <h1 className="text-2xl">Logga in:</h1>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          className="bg-white text-black rounded-lg px-5 py-2"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
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
          className="bg-green-500 hover:bg-green-700 px-5 py-2 rounded-lg text-center"
          onClick={handleLogin}
        >
          Log in
        </button>
      </div>
    </div>
  );
}
