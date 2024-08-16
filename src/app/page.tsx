import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="bg-gray-100 text-gray-900 shadow-md">
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
          <div className="flex-grow mx-8">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          {/* Navigation Links */}
          <div className="space-x-8 hidden md:flex">
            <a href="/" className="hover:text-purple-500">
              Home
            </a>
            <a href="#features" className="hover:text-purple-500">
              Features
            </a>
            <a href="#about" className="hover:text-purple-500">
              About
            </a>
            <a href="#contact" className="hover:text-purple-500">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-between p-24 bg-gradient-to-r from-purple-100 via-blue-100 to-gray-100">
        <div className="text-center max-w-5xl">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">
            Welcome to Calm Play
          </h1>
          <p className="text-lg mb-4 text-gray-700">
            Your ultimate destination for mindfulness and relaxation through
            engaging and fun activities.
          </p>

          {/* Centering the Image */}
          <div className="relative w-full max-w-xl mx-auto mt-12 flex justify-center">
            <Image
              className="rounded-xl shadow-lg"
              src="/images/keep-calm.png"
              alt="Keep Calm"
              width={800}
              height={400}
              priority
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-gray-600 py-6">
        <div className="container mx-auto">
          <p>&copy; 2024 Calm Play. All rights reserved.</p>
          <div className="mt-4">
            <a href="#privacy" className="hover:text-purple-500 mx-2">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-purple-500 mx-2">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex flex-col items-center justify-between p-24 bg-gray-100">
//       {/* Header Section */}
//       <div className="text-center max-w-5xl">
//         <h1 className="text-4xl font-bold mb-8 text-gray-700">
//           Welcome to Calm Play
//         </h1>

//         {/* <h1 className="text-4xl font-bold mb-8">Welcome to Calm Play</h1> */}
//         <p className="text-lg mb-4">
//           Your ultimate destination for mindfulness and relaxation through
//           engaging and fun activities.
//         </p>
//         <p className="text-lg mb-8">
//           Explore a variety of games and tech tools designed to help you unwind
//           and de-stress.
//         </p>
//         <div className="flex justify-center space-x-4">
//           <a
//             href="#"
//             className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
//           >
//             Get Started
//           </a>
//           <a
//             href="#features"
//             className="px-8 py-3 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400"
//           >
//             Learn More
//           </a>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="relative w-full max-w-xl mt-12">
//         <Image
//           className="rounded-xl shadow-lg"
//           src="/images/keep-calm.png"
//           alt="Keep Calm"
//           width={800}
//           height={400}
//           priority
//         />
//       </div>

//       {/* Features Section */}
//       <section id="features" className="mt-24">
//         <h2 className="text-3xl font-bold mb-8">Features</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-4">Relaxing Games</h3>
//             <p>
//               Choose from a selection of games designed to calm your mind and
//               reduce stress.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-4">Mindful Tech</h3>
//             <p>
//               Explore tech tools that help you practice mindfulness and achieve
//               serenity.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-4">Community Support</h3>
//             <p>
//               Connect with others who share your journey towards a more relaxed
//               and mindful life.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="mt-24 text-center text-gray-600">
//         <p>&copy; 2024 Calm Play. All rights reserved.</p>
//       </footer>
//     </main>
//   );
// }
