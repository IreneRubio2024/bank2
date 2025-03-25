import Link from "next/link";
import Image from "next/image";

export default function Card({ title, description, image, link }) {
  return (
    <Link href={link} className="block">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
        <Image src={image} alt={title} width={400} height={250} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
}