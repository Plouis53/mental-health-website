// Make sure this component is client-side
"use client";

import { motion } from "framer-motion";
import Hero from "@/section/Hero";
import Posts from "@/section/Posts";

export default function Home() {
  return (
    <main id="main">
      {/* Animated Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      {/* Animated Posts Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Posts />
      </motion.div>
    </main>
  );
}

// import Hero from "@/section/Hero";
// import Posts from "@/section/Posts";

// export default function Home() {
//   return (
//     <main id="main">
//       <Hero />
//       <Posts />
//     </main>
//   );
// }

// export default function Home() {
//   return (
//     <main className="flex flex-col items-center justify-between p-24 bg-gradient-to-r from-purple-100 via-blue-100 to-gray-100">
//       <div className="text-center max-w-5xl">
//         <h1 className="text-4xl font-bold mb-8 text-gray-800">
//           Welcome to Calm Play
//         </h1>
//         <p className="text-lg mb-4 text-gray-700">
//           Your ultimate destination for mindfulness and relaxation through
//           engaging and fun activities.
//         </p>
//         {/* Centering the Image */}
//         <div className="relative w-full max-w-xl mx-auto mt-12 flex justify-center">
//           <Image
//             className="rounded-xl shadow-lg"
//             src="/images/keep-calm.png"
//             alt="Keep Calm"
//             width={800}
//             height={400}
//             priority
//           />
//         </div>
//       </div>
//     </main>
//   );
