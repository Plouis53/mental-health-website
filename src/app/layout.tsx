import "bootstrap-icons/font/bootstrap-icons.css";

import "bootstrap/dist/css/bootstrap.css";

import "aos/dist/aos.css";

import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";

import Header from "../components/Header/Header";

import "./styles/variables.css";
import "./styles/globals.css";
// import Footer from "../components/Footer";

const ebGaramond = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clinical Digest",
  description:
    "Clinical Digest: Empowering You with Curated Mental Health Insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ebGaramond.className}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
