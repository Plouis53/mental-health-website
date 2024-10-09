"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./posts.css";
import PostItemOne from "@/components/PostItemOne/PostItemOne";
import TrendingPost from "@/components/Trending/TrendingPost";

export default function Posts() {
  const router = useRouter();
  const [items, setItems] = useState<any | []>([]);
  const [item, setItem] = useState({});

  const getItemsData = () => {
    fetch("/api/postitems")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => console.log(e.message));
  };

  // const getSinglePostData = (id: string) => {
  //   fetch(`/api/postitems/${id}`)
  //     .then((res) => {
  //       if (!res.status === 404) {
  //         router.push("/not-found");
  //       }
  //       return res.json();
  //     })

  //     .then((data) => setItem(data))
  //     .catch((e) => console.log(e.message));
  // };

  const getSinglePostData = (id: string) => {
    fetch(`/api/postitems/${id}`)
      .then((res) => {
        if (res.status === 404) {
          // Check if the response is a 404
          router.push("/not-found");
          return; // Exit early if we are redirecting
        }
        return res.json(); // Only parse JSON if the response is not 404
      })
      .then((data) => {
        if (data) {
          // Ensure data is valid before setting it
          setItem(data);
        } else {
          console.log("No data returned");
        }
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    getItemsData();
    getSinglePostData("6704948bfbe587fc2b9ef52d");
  }, []);

  return (
    <section id="posts" className="posts">
      <div className="container" data-aos="fade-up">
        <div className="row g-5">
          <div className="col-lg-4">
            <PostItemOne large={true} item={item} />
          </div>
          <div className="col-lg-8">
            <div className="row g-5">
              <div className="col-lg-4 border-start custom-border">
                {items &&
                  items.length > 0 &&
                  items
                    .filter(
                      (item: { trending: boolean; top: boolean }) =>
                        !item.trending && !item.top
                    )
                    .slice(0, 3)
                    .map(
                      (item: {
                        _id: string;
                        img: string;
                        category: string;
                        date: string;
                        title: string;
                        brief: string;
                        avatar: string;
                        author: string;
                      }) => (
                        <PostItemOne key={item._id} large={false} item={item} />
                      )
                    )}
              </div>
              <div className="col-lg-4 border-start custom-border">
                {items &&
                  items.length > 0 &&
                  items
                    .filter(
                      (item: { trending: boolean; top: boolean }) =>
                        !item.trending && !item.top
                    )
                    .slice(3, 6)
                    .map(
                      (item: {
                        _id: string;
                        img: string;
                        category: string;
                        date: string;
                        title: string;
                        brief: string;
                        avatar: string;
                        author: string;
                      }) => (
                        <PostItemOne key={item._id} large={false} item={item} />
                      )
                    )}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="trending">
                <h3>Trending</h3>
                <ul className="trending-post">
                  {item &&
                    items.length > 0 &&
                    items
                      .filter((item: { trending: boolean }) => item.trending)
                      .map(
                        (
                          item: {
                            _id: string;
                            img: string;
                            category: string;
                            date: string;
                            title: string;
                            brief: string;
                            avatar: string;
                            author: string;
                          },
                          index: number
                        ) => (
                          <TrendingPost
                            key={item._id}
                            index={index}
                            item={item}
                          />
                        )
                      )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
