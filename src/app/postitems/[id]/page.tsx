"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// import AOS
import AOS from "aos";
import SidePostItem from "@/components/SidePostItem/SidePostItem";
import Link from "next/link";
import Preloader from "@/components/Preloader/PreLoader";
import ConfirmDeleteModal from "@/components/ConfirmDeleteModal/ConfirmDeleteModal";

import "./style.css";
import "../../../components/PostItemOne/postitemone.css";


export default function PostItem({ params }: { params: { id: string } }) {
  const id: string = params.id;
  const router = useRouter();
  const [item, setItem] = useState<any | {}>({});
  const [posts, setPosts] = useState<any | []>([]);
  const [isModalVisible, setModalVisible] = useState(false); // State for modal visibility

  const tabsData = [
    { id: 1, name: "Popular", active: true },
    { id: 2, name: "Trending", active: false },
  ];

  const [tabs, setTabs] = useState(tabsData);

  const handleTabActive = (id: number) => {
    setTabs(
      tabsData.map((tab) => {
        tab.active = false;
        if (tab.id === id) tab.active = true;
        return tab;
      })
    );
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  const getSinglePostData = () => {
    fetch(`/api/postitems/${id}`)
      .then((res) => {
        if (res.status === 404) {
          router.push("/not-found");
        }
        return res.json();
      })
      .then((data) => {
        setItem(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const getPostData = () => {
    fetch(`/api/postitems`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    getSinglePostData();
    getPostData();
  }, []);

  const handleDeletePost = async (id: string) => {
    // DELETE request sent
    try {
      const response = await fetch(`/api/postitems/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = response.status;
      if (result === 200) {
        console.log("Success:", result);
        router.push(`/postitems`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeleteClick = () => {
    setModalVisible(true); // Show modal when delete button is clicked
  };

  const handleConfirmDelete = () => {
    setModalVisible(false);
    handleDeletePost(id); // Delete post after confirmation
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Close modal without deleting
  };

  return (
    <main id="main">
      <section className="single-post-content">
        <div className="container">
          <div className="row">
            <div className="col-md-9 post-content" data-aos="fade-up">
              {item ? (
                <div className="single-post">
                  <div className="post-meta">
                    <span className="date">{item.category}</span>{" "}
                    <span className="mx-1">
                      <i className="bi bi-dot"></i>
                    </span>{" "}
                    <span>
                      {new Date(item.date).toLocaleDateString("en-US")}
                    </span>
                  </div>
                  <h1 className="mb-5">{item.title}</h1>
                  <p>
                    <span className="firstcharacter">
                      {item.brief && item.brief.charAt(0)}
                    </span>
                    {item.brief && item.brief.substring(1)}
                  </p>
                  {/* Modal Component */}
                  <ConfirmDeleteModal
                    isVisible={isModalVisible}
                    onClose={handleCloseModal}
                    onConfirm={handleConfirmDelete}
                    itemTitle={item.title}
                  />

                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione officia sed, suscipit distinctio, numquam omnis quo
                    fuga ipsam quis inventore voluptatum recusandae culpa, unde
                    doloribus saepe labore alias voluptate expedita? Dicta
                    delectus beatae explicabo odio voluptatibus quas, saepe qui
                    aperiam autem obcaecati, illo et! Incidunt voluptas culpa
                    neque repellat sint, accusamus beatae, cumque autem tempore
                    quisquam quam eligendi harum debitis.
                  </p>

                  <figure className="my-4">
                    <img src={`/${item.img}`} alt="" className="img-fluid" />
                    <figcaption>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo, odit?{" "}
                    </figcaption>
                  </figure>

                  <p>
                    Sunt reprehenderit, hic vel optio odit est dolore,
                    distinctio iure itaque enim pariatur ducimus. Rerum soluta,
                    perspiciatis voluptatum cupiditate praesentium repellendus
                    quas expedita exercitationem tempora aliquam quaerat in
                    eligendi adipisci harum non omnis reprehenderit quidem
                    beatae modi. Ea fugiat enim libero, ipsam dicta explicabo
                    nihil, tempore, nulla repellendus eos necessitatibus
                    eligendi corporis cum? Eaque harum, eligendi itaque numquam
                    aliquam soluta.
                  </p>
                  <p>
                    Explicabo perspiciatis, laborum provident voluptates illum
                    in nulla consectetur atque quaerat excepturi quisquam,
                    veniam velit ex pariatur quos consequuntur? Excepturi
                    reiciendis perferendis, cupiditate dolorem eos illum amet.
                    Beatae voluptates nemo esse ratione voluptate, nesciunt
                    fugit magnam veritatis voluptas dignissimos doloribus
                    maiores? Aliquam, dolores natus exercitationem corrupti
                    blanditiis, consequuntur nihil nobis sed voluptatibus
                    maiores sunt, illo provident aliquid laborum. Vitae, ut.
                  </p>
                  <p>
                    Reprehenderit aut sed doloribus blanditiis, aspernatur
                    magni? In molestias rem, similique ut esse repudiandae quod
                    recusandae dolores neque earum omnis at, suscipit fuga?
                    Minima qui veniam deserunt quisquam error amet at ratione
                    nesciunt porro quis placeat repudiandae voluptatibus
                    officiis fuga necessitatibus, expedita officia adipisci
                    eaque labore accusamus? Nesciunt repellat illo
                    exercitationem facilis similique quaerat, quis sequi?
                    Praesentium nulla ipsam dolor.
                  </p>
                  <p>
                    Dolorum, incidunt! Adipisci harum itaque maxime dolores
                    doloremque porro eligendi quis, doloribus vel sit rerum sunt
                    obcaecati nam suscipit nulla vitae alias blanditiis aliquam
                    debitis atque illo modi et placeat. Ratione iure eveniet
                    provident. Culpa laboriosam sed ad quia. Corrupti, earum,
                    perferendis dolore cupiditate sint nihil maiores iusto
                    tempora nobis porro itaque est. Ut laborum culpa assumenda
                    pariatur et perferendis?
                  </p>
                  <p>
                    Est soluta veritatis laboriosam, consequuntur temporibus
                    asperiores, fugit id a ullam sed, expedita sequi doloribus
                    fugiat. Odio et necessitatibus enim nam, iste reprehenderit
                    cupiditate omnis ut iure aliquid obcaecati, repellendus nemo
                    provident eveniet tempora minus! Voluptates aut laboriosam,
                    maiores nihil accusantium, a dolorum quaerat tenetur illo
                    eum culpa cum laudantium sunt doloremque modi possimus
                    magni? Perferendis cum repudiandae corrupti porro.
                  </p>
                  <div className="d-flex justify-content-center gap-4">
                    <a
                      className="btn btn-primary"
                      // onClick={() => handleDeletePost(id)}
                      onClick={handleDeleteClick}
                    >
                      <i className="bi bi-trash3"></i>
                    </a>
                    <Link
                      href={`/createpostitems/${id}`}
                      className="btn btn-primary "
                    >
                      <i className="bi bi-pen"></i>
                    </Link>
                  </div>
                </div>
              ) : (
                <Preloader />
              )}
            </div>
            <div className="col-md-3">
              <div className="aside-block">
                <ul
                  className="nav nav-pills custom-tab-nav mb-4"
                  id="pills-tab"
                  role="tablist"
                >
                  {tabs.map((tab) => (
                    <li className="nav-item" role="presentation" key={tab.id}>
                      <button
                        className={`nav-link ${
                          tab.active ? "active" : undefined
                        }`}
                        id="pills-popular-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-popular"
                        type="button"
                        role="tab"
                        aria-controls="pills-popular"
                        aria-selected="true"
                        onClick={() => handleTabActive(tab.id)}
                      >
                        {tab.name}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="tab-content" id="pills-tabContent">
                  <div
                    className={`tab-pane fade  ${
                      tabs[0].active ? "show active" : ""
                    }`}
                    id="pills-popular"
                    role="tabpanel"
                    aria-labelledby="pills-popular-tab"
                  >
                    {posts
                      .slice(0, 6)
                      .map(
                        (post: {
                          _id: string;
                          category: string;
                          date: string;
                          title: string;
                          author: string;
                        }) => (
                          <SidePostItem key={post._id} item={post} />
                        )
                      )}
                  </div>

                  <div
                    className={`tab-pane fade  ${
                      tabs[1].active ? "show active" : ""
                    }`}
                    id="pills-trending"
                    role="tabpanel"
                    aria-labelledby="pills-trending-tab"
                  >
                    {posts
                      .slice(6, 12)
                      .map(
                        (post: {
                          _id: string;
                          category: string;
                          date: string;
                          title: string;
                          author: string;
                        }) => (
                          <SidePostItem key={post._id} item={post} />
                        )
                      )}
                  </div>
                </div>
              </div>

              <div className="aside-block">
                <h3 className="aside-title">Video</h3>
                <div className="video-post">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=uHNS_ZhI62c"
                    className="link-video"
                  >
                    <span className="bi-play-fill"></span>
                    <img
                      src="/assets/img/post-landscape-3.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
