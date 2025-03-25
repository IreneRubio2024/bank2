"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";



// const BASE_URL = "ec2-51-21-220-136.eu-north-1.compute.amazonaws.com";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <div className="grid grid-cols-2 gap-6 p-10 mt-4 mx-auto max-w-4xl">
        <Card
          title="Din Pension"
          description="Få veta allt om din framtids pengar"
          image="/images/pensiones.avif"
          link="/pension"
        />
        <Card
          title="Spara Smart"
          description="Lär dig att spara och investera"
          image="/images/ahorro.jpg"
          link="/spara"
        />
        <Card
          title="Lån & Krediter"
          description="Hitta det bästa lånet för dig"
          image="/images/tus finanzas.jpg"
          link="/lån"
        />
        <Card
          title="Support 24/7"
          description="Vi finns här för att hjälpa dig"
          image="/images/sacar dinero.avif"
          link="/support"
        />
         </div>
         <Link href="/Create-account">
         <div className="flex justify-center">
         <button className="bg-green-500 hover:bg-green-800 text-white font-semibold py-4 px-4 rounded-lg shadow-md transition duration-300">
          Skapa konto
        </button>
         </div>
         </Link>
       
      <Footer />
    </div>
  );
}
