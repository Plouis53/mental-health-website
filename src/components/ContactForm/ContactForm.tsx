"use client";

import React, { useState } from "react";
import "./contactForm.css";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  validate: string;
}

export default function ContactForm() {
  const initialState: FormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    validate: "",
  };

  const [text, setText] = useState<FormState>(initialState);

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value, validate: "" });
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple form validation
    if (
      text.name === "" ||
      text.email === "" ||
      text.subject === "" ||
      text.message === ""
    ) {
      setText({ ...text, validate: "incomplete" });
      return;
    }

    try {
      setText({ ...text, validate: "loading" });

      // Make the fetch request to /api/contact
      const response = await fetch(`/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: text.name,
          email: text.email,
          subject: text.subject,
          message: text.message,
        }),
      });

      if (response.ok) {
        setText({ ...initialState, validate: "success" });
        console.log("Success:", response.status);
      } else if (!response.ok) {
        const errorText = await response.text();
        console.error("Server Response:", errorText);
        setText({ ...text, validate: "error" });
      }
    } catch (error) {
      setText({ ...text, validate: "error" });
      console.error("Error:", error);
      console.log("Sending data:", text);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmitForm}>
      <div className="row">
        <div className="form-group col-md-6">
          <input
            type="text"
            name="name"
            value={text.name}
            className="form-control"
            id="name"
            placeholder="Your Name"
            onChange={handleTextChange}
          />
        </div>
        <div className="form-group col-md-6">
          <input
            type="email"
            className="form-control"
            name="email"
            value={text.email}
            id="email"
            placeholder="Your Email"
            onChange={handleTextChange}
          />
        </div>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="subject"
          value={text.subject}
          id="subject"
          placeholder="Subject"
          onChange={handleTextChange}
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          name="message"
          value={text.message}
          rows={5}
          placeholder="Message"
          onChange={handleTextChange}
        ></textarea>
      </div>
      <div className="my-3">
        {text.validate === "loading" && (
          <div className="loading">Sending Message</div>
        )}
        {text.validate === "incomplete" && (
          <div className="error-message">Please fill in all above details</div>
        )}
        {text.validate === "success" && (
          <div className="sent-message">
            Your message was sent. We will contact you ASAP. Thank you!
          </div>
        )}
        {text.validate === "error" && (
          <div className="error-message">Server Error</div>
        )}
      </div>
      <div className="text-center">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
}

// "use client";

// import React, { useState } from "react";
// import "./contactForm.css";

// export default function ContactForm() {
//   const initialState = {
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//     validate: "",
//   };

//   const [text, setText] = useState(initialState);

//   const handleTextChange = (e: Event | any) => {
//     const { name, value } = e.target;
//     setText({ ...text, [name]: value, validate: "" });
//   };

//   const handleSubmitForm = async (e: Event | any) => {
//     e.preventDefault();
//     // simple form validation
//     if (
//       text.name === "" ||
//       text.email === "" ||
//       text.subject === "" ||
//       text.message === ""
//     ) {
//       setText({ ...text, validate: "incomplete" });
//       return;
//     }

//     // POST request sent
//     try {
//       const response = await fetch(`${process.env.HOST}api/contact`, {
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
//     <form className="contact-form" onSubmit={handleSubmitForm}>
//       <div className="row">
//         <div className="form-group col-md-6">
//           <input
//             type="text"
//             name="name"
//             value={text.name}
//             className="form-control"
//             id="name"
//             placeholder="Your Name"
//             onChange={handleTextChange}
//           />
//         </div>
//         <div className="form-group col-md-6">
//           <input
//             type="email"
//             className="form-control"
//             name="email"
//             value={text.email}
//             id="email"
//             placeholder="Your Email"
//             onChange={handleTextChange}
//           />
//         </div>
//       </div>
//       <div className="form-group">
//         <input
//           type="text"
//           className="form-control"
//           name="subject"
//           value={text.subject}
//           id="subject"
//           placeholder="Subject"
//           onChange={handleTextChange}
//         />
//       </div>
//       <div className="form-group">
//         <textarea
//           className="form-control"
//           name="message"
//           value={text.message}
//           rows={5}
//           placeholder="Message"
//           onChange={handleTextChange}
//         ></textarea>
//       </div>
//       <div className="my-3">
//         {text.validate === "loading" && (
//           <div className="loading">Sending Message</div>
//         )}
//         {text.validate === "incomplete" && (
//           <div className="error-message">Please fill in all above details</div>
//         )}
//         {text.validate === "success" && (
//           <div className="sent-message">
//             Your message was sent. We will contact you ASAP. Thank you!
//           </div>
//         )}
//         {text.validate === "error" && (
//           <div className="error-message">Server Error</div>
//         )}
//       </div>
//       <div className="text-center">
//         <button type="submit">Send Message</button>
//       </div>
//     </form>
//   );
// }
