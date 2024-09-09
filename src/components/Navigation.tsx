import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navigation() {
  return (
    <nav className="bg-gray-100 text-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Search Bar Component */}
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
    </nav>
  );
}
