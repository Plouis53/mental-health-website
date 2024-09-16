"use client";
import React, { useState } from "react";
import "./header.css";
import Nav from "../Navigation/Nav";
import Sci from "../Social/Sci";
import SearchForm from "../SearchForm/searchForm";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleFormOpen = (e: Event | any) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <header id="header" className="header">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <h1 className="logo-text">Calm Play</h1>
        </a>
        <Nav />
        <div className="right-section d-flex align-items-center">
          {!open && (
            <a className="search-icon" onClick={handleFormOpen}>
              <span className="bi-search"></span>
            </a>
          )}
          <SearchForm active={open} formOpen={handleFormOpen} />
          <Sci />
        </div>
      </div>
    </header>
  );
}
