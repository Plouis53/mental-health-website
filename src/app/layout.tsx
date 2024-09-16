import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ebGaramond = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calm Play",
  description: "Calm Play: Mindful games for stress relief",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ebGaramond.className}>
        {/* <header style={{ backgroundColor: "lightblue", padding: "1rem" }}> */}
        <Header />
        {/* </header> */}
        {/* Main content */}
        {children}
        {/* <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}> */}
        {/* Footer component */}
        <Footer />
        {/* </footer> */}
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./styles/globals.css";
// import Header from "./components/Header";
// // import Navigation from "./components/Navigation";
// import Footer from "./components/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
//           {/* Header component */}
//           <Header />
//         </header>

//         {children}
//         <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
//           {/* Footer component */}
//           <Footer />
//         </footer>
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./styles/globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {" "}
//         <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
//           <p>Header</p>
//         </header>
//         {children}{" "}
//         <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
//           Footer
//         </footer>
//       </body>
//     </html>
//   );
// }
