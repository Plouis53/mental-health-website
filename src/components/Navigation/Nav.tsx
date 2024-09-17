import Link from "next/link";
// import SearchBar from "./SearchBar";
import React from "react";
import "./nav.css";
import { navs } from "@/data/data";

export default function Navigation() {
  return (
    <nav id="navbar" className="navbar bg-gray-100 text-gray-900 shadow-md">
      <ul>
        {navs.map((nav) => (
          <li key={nav.id}>
            <Link href={nav.link}>
              {nav.name === "Home" ? (
                <i className="bi bi-house-door-fill"></i>
              ) : (
                nav.name
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
