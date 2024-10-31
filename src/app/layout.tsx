// import Icons
import "bootstrap-icons/font/bootstrap-icons.css";

// import bootstrap
import "bootstrap/dist/css/bootstrap.css";

// import glightbox
// import "glightbox/dist/css/glightbox.css";

// import aos css
import "aos/dist/aos.css";

// import project css
import "./styles/variables.css";
import "./styles/globals.css";

import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";

import Header from "../components/Header/Header";

import Footer from "../components/Footer/Footer";
import BackToTopBtn from "../components/BackToTopBtn/BackToTopBtn";

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
        <Footer />
        <BackToTopBtn />
      </body>
    </html>
  );
}
