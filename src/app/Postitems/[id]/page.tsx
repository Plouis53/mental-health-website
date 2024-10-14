"use client";

import React, { useState, useEffect } from "react";
import { initialPost } from "@/sections/Post/Posts";

export default function PostItem({ params }: { params: { id: string } }) {
  const id: string = params.id;

  const [item, setItem] = useState(initialPost);

  const getSinglePostData = () => {
    fetch("/api/postitems")
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((e) => console.log(e.messages));
  };

  useEffect(() => {
    getSinglePostData();
  }, []);
  return (
    <main id="main">
      <section className="single-post-content">
        <div className="container">
          <div className="row">
            <div className="col-md-9 post-content">
              <div className="single-post">
                <div className="post-meta">
                  <span className="date">{item.category}</span>
                  <span className="mx-1">
                    <i className="bi bi-dot"></i>
                  </span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
