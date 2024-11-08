"use client";

import React, { useState, useEffect } from "react";

// Import AOS
import AOS from "aos";

export default function CreatePostItem() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  const initialState = {
    title: "",
    img: "",
    category: "",
    author: "",
    brief: "",
    links: [""], // Adding a new field for links
    validate: "",
  };

  const [text, setText] = useState(initialState);

  // Handle text change for simple inputs
  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value, validate: "" });
  };

  // Handle changes for link inputs
  const handleLinkChange = (index: number, value: string) => {
    const newLinks = [...text.links];
    newLinks[index] = value;
    setText({ ...text, links: newLinks });
  };

  // Handle adding a new link input field
  const handleAddLink = () => {
    setText({ ...text, links: [...text.links, ""] });
  };

  // Handle removing a link input field
  const handleRemoveLink = (index: number) => {
    const newLinks = text.links.filter((_, i) => i !== index);
    setText({ ...text, links: newLinks });
  };

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simple form validation
    if (
      text.title === "" ||
      text.img === "" ||
      text.category === "" ||
      text.brief === ""
    ) {
      setText({ ...text, validate: "incomplete" });
      return;
    }

    // POST request sent
    try {
      const response = await fetch("/api/postitems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(text),
      });

      setText({ ...text, validate: "loading" });

      const result = response.status;
      if (result === 201) {
        setText({ ...text, validate: "success" });
        console.log("Success:", result);
      }
    } catch (error) {
      setText({ ...text, validate: "error" });
      console.error("Error:", error);
    }
  };

  return (
    <main id="main">
      <section className="create-post-content">
        <div className="container" data-aos="fade-up">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="row d-flex justify-content-center mt-5">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-12 text-center mb-5">
                      <h1 className="page-title">Create New Post</h1>
                    </div>
                  </div>
                  <form onSubmit={handleFormSubmit}>
                    <div className="row">
                      {/* Existing form fields */}
                      <div className="col-lg-6 mb-3">
                        <label>Title</label>
                        <input
                          type="text"
                          name="title"
                          value={text.title}
                          onChange={handleTextChange}
                          className="form-control"
                          placeholder="Enter Title"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label>Image URL</label>
                        <input
                          type="text"
                          name="img"
                          value={text.img}
                          onChange={handleTextChange}
                          className="form-control"
                          placeholder="Enter Image URL"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label>Category</label>
                        <input
                          type="text"
                          name="category"
                          value={text.category}
                          onChange={handleTextChange}
                          className="form-control"
                          placeholder="Enter Post Category"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label>Author</label>
                        <input
                          type="text"
                          name="author"
                          value={text.author}
                          onChange={handleTextChange}
                          className="form-control"
                          placeholder="Enter Author Name"
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label>Brief</label>
                        <textarea
                          className="form-control"
                          name="brief"
                          value={text.brief}
                          onChange={handleTextChange}
                          placeholder="Enter Post Brief"
                          cols={30}
                          rows={10}
                        ></textarea>
                      </div>

                      {/* New Section for Adding Resource Links */}
                      <div className="col-12 mb-3">
                        <label>Resource Links</label>
                        {text.links.map((link, index) => (
                          <div
                            key={index}
                            className="d-flex align-items-center mb-2"
                          >
                            <input
                              type="url"
                              value={link}
                              onChange={(e) =>
                                handleLinkChange(index, e.target.value)
                              }
                              className="form-control"
                              placeholder={`Enter Resource Link ${index + 1}`}
                            />
                            <button
                              type="button"
                              className="btn btn-danger ms-2"
                              onClick={() => handleRemoveLink(index)}
                              disabled={text.links.length === 1}
                            >
                              &times;
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          className="btn btn-secondary mt-2"
                          onClick={handleAddLink}
                        >
                          Add Another Link
                        </button>
                      </div>

                      {/* Validation Messages */}
                      <div className="mb-3">
                        {text.validate === "loading" && (
                          <div className="loading">Sending Post...</div>
                        )}
                        {text.validate === "incomplete" && (
                          <div className="error-message">
                            Please fill in all above details.
                          </div>
                        )}
                        {text.validate === "success" && (
                          <div className="sent-message">
                            Your news was posted successfully. Thank you!
                          </div>
                        )}
                        {text.validate === "error" && (
                          <div className="error-message">Server Error</div>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="col-12 d-flex justify-content-center">
                        <input
                          type="submit"
                          className="btn btn-primary"
                          value="Post Item"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// import React, { useState, useEffect } from "react";

// // import AOS
// import AOS from "aos";

// export default function CreatePostItem() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: "ease-in-out",
//       once: false,
//       mirror: false,
//     });
//   }, []);

//   const initialState = {
//     title: "",
//     img: "",
//     category: "",
//     author: "",
//     brief: "",
//     validate: "",
//   };

//   const [text, setText] = useState(initialState);

//   const handleTextChange = (e: Event | any) => {
//     const { name, value } = e.target;
//     setText({ ...text, [name]: value, validate: "" });
//   };

//   const handleFormSubmit = async (e: Event | any) => {
//     e.preventDefault();
//     // simple form validation
//     if (
//       text.title === "" ||
//       text.img === "" ||
//       text.category === "" ||
//       text.brief === ""
//     ) {
//       setText({ ...text, validate: "incomplete" });
//       return;
//     }

//     // POST request sent
//     try {
//       const response = await fetch("/api/postitems", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(text),
//       });

//       setText({ ...text, validate: "loading" });

//       const result = response.status;
//       if (result === 201) {
//         setText({ ...text, validate: "success" });
//         console.log("Success:", result);
//       }
//     } catch (error) {
//       setText({ ...text, validate: "error" });
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <main id="main">
//       <section className="create-post-content">
//         <div className="container" data-aos="fade-up">
//           <div className="row d-flex justify-content-center">
//             <div className="col-lg-10">
//               <div className="row  d-flex justify-content-center mt-5">
//                 <div className="col-lg-12">
//                   <div className="row">
//                     <div className="col-lg-12 text-center mb-5">
//                       <h1 className="page-title">Create New Post</h1>
//                     </div>
//                   </div>
//                   <form onSubmit={handleFormSubmit}>
//                     <div className="row">
//                       <div className="col-lg-6 mb-3">
//                         <label>Title</label>
//                         <input
//                           type="text"
//                           name="title"
//                           value={text.title}
//                           onChange={handleTextChange}
//                           className="form-control"
//                           placeholder="Enter Title"
//                         />
//                       </div>
//                       <div className="col-lg-6 mb-3">
//                         <label>Image URL</label>
//                         <input
//                           type="text"
//                           name="img"
//                           value={text.img}
//                           onChange={handleTextChange}
//                           className="form-control"
//                           placeholder="Enter Image URL"
//                         />
//                       </div>
//                       <div className="col-lg-6 mb-3">
//                         <label>Category</label>
//                         <input
//                           type="text"
//                           name="category"
//                           value={text.category}
//                           onChange={handleTextChange}
//                           className="form-control"
//                           placeholder="Enter Post Category"
//                         />
//                       </div>
//                       <div className="col-lg-6 mb-3">
//                         <label>Author</label>
//                         <input
//                           type="text"
//                           name="author"
//                           value={text.author}
//                           onChange={handleTextChange}
//                           className="form-control"
//                           placeholder="Enter Author Name"
//                         />
//                       </div>
//                       <div className="col-12 mb-3">
//                         <label>Brief</label>
//                         <textarea
//                           className="form-control"
//                           name="brief"
//                           value={text.brief}
//                           onChange={handleTextChange}
//                           placeholder="Enter Post Brief"
//                           cols={30}
//                           rows={10}
//                         ></textarea>
//                       </div>
//                       <div className="mb-3">
//                         {text.validate === "loading" && (
//                           <div className="loading">Sending Post</div>
//                         )}
//                         {text.validate === "incomplete" && (
//                           <div className="error-message">
//                             Please fill in all above details.
//                           </div>
//                         )}
//                         {text.validate === "success" && (
//                           <div className="sent-message">
//                             Your news was posted successfully. Thank you!
//                           </div>
//                         )}
//                         {text.validate === "error" && (
//                           <div className="error-message">Server Error</div>
//                         )}
//                       </div>
//                       <div className="col-12 d-flex justify-content-center">
//                         <input
//                           type="submit"
//                           className="btn btn-primary"
//                           value="Post Item"
//                         />
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
