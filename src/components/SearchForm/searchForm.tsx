import React from "react";
import "../SearchForm/searchForm.css";

export default function SearchForm({
  active,
  formOpen,
}: {
  active: boolean;
  formOpen: Object | any;
}) {
  return (
    <div
      className={`search-form-wrap js-search-form-wrap ${
        active ? "active" : ""
      }`}
    >
      <form className="search-form">
        <span className="icon bi-search"></span>
        <input type="text" placeholder="Search" className="form-control" />
        <button className="btn js-search-close" onClick={formOpen}>
          <span className="bi-x"></span>
        </button>
      </form>
    </div>
  );
}
