import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-gray-100 text-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            src="/images/keep-calm.png"
            alt="Calm Play Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-semibold text-xl">Calm Play</span>
        </div>
        {/* Search Bar */}
        <SearchBar />
        {/* Navigation Links */}
        <div className="space-x-8 hidden md:flex">
          <Link href="/" className="hover:text-purple-500">
            Home
          </Link>
          <Link href="#features" className="hover:text-purple-500">
            Features
          </Link>
          <Link href="#about" className="hover:text-purple-500">
            About
          </Link>
          <Link href="#contact" className="hover:text-purple-500">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
