import React from "react";
// import Image from "next/image";

export default function Header() {
  return (
    <header id="header" className="bg-gray-100 text-gray-900 shadow-md">
      <div className="container mx-auto px-8 py-8 flex justify-end items-center pr-8">
        <a href="/" className="logo flex items-center space-x-4">
          {/* Significantly larger font size and moved title far to the right */}
          {/* <h1 className="font-bold text-7xl mr-0">Calm Play</h1> */}
        </a>
      </div>
    </header>
  );
}

// export default function Header() {
//   return (
//     <header id="header" className="bg-gray-100 text-gray-900 shadow-md">
//       <div className="container mx-auto px-8 py-8 flex justify-between items-center">
//         <a href="/" className="logo flex items-center space-x-4">
//           {/* Increase the logo size */}
//           {/* <Image
//             src="/images/keep-calm.png"
//             alt="Calm Play Logo"
//             width={80}
//             height={80}
//             className="rounded-full"
//           /> */}
//           {/* Increase the font size */}
//           <h1 className="font-semibold text-3xl">Calm Play</h1>
//         </a>
//       </div>
//     </header>
//   );
// }

// import Image from "next/image";
// import Link from "next/link";
// import SearchBar from "./SearchBar";

// export default function Header() {
//   return (
//     <header className="bg-gray-100 text-gray-900 shadow-md">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-2">
//           <Image
//             src="/images/keep-calm.png"
//             alt="Calm Play Logo"
//             width={40}
//             height={40}
//             className="rounded-full"
//           />
//           <span className="font-semibold text-xl">Calm Play</span>
//         </div>
//         {/* Search Bar */}
//         <SearchBar />
//         {/* Navigation Links */}
//         <div className="space-x-8 hidden md:flex">
//           <Link href="/" className="hover:text-purple-500">
//             Home
//           </Link>
//           <Link href="#features" className="hover:text-purple-500">
//             Features
//           </Link>
//           <Link href="#about" className="hover:text-purple-500">
//             About
//           </Link>
//           <Link href="#contact" className="hover:text-purple-500">
//             Contact
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }
