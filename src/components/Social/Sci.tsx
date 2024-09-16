import React from "react";
import "./sci.css";
import { scis } from "@/data/data";

export default function Sci() {
  return (
    <>
      {scis.map((sci) => (
        <a href={sci.link} key={sci.id} target="_blank"></a>
      ))}
    </>
  );
}
