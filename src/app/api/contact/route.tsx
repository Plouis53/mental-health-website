import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

// Set up SendGrid API key from environment variable
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.error("SendGrid API Key is missing in environment variables.");
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    console.log("Handling POST request to /api/contact");

    // Parse the request body
    const { name, email, subject, message } = req.body;

    // Validate the data
    if (!name || !email || !subject || !message) {
      console.error("Validation failed: missing required fields.");
      return res.status(400).json({ error: "Missing required fields" });
    }

    console.log("Message details:", { name, email, subject, message });

    // SendGrid email settings
    const msg = {
      to: process.env.EMAIL_USER, // Your email address (to receive contact form messages)
      from: "phillippe.devtech@gmail.com", // Use a verified email address from SendGrid
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    // Send the email using SendGrid
    await sgMail.send(msg);

    console.log("Email sent successfully.");

    // Respond with success status
    return res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error in sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
};

export default handler;

// import { NextApiRequest, NextApiResponse } from "next";
// import sgMail from "@sendgrid/mail";

// // Set up SendGrid API key from environment variable
// sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     console.log("Handling POST request to /api/contact");
//     // Ensure it is a POST request
//     if (req.method !== "POST") {
//       res.setHeader("Allow", ["POST"]);
//       return res
//         .status(405)
//         .json({ error: `Method ${req.method} Not Allowed` });
//     }

//     // Parse the request body
//     const { name, email, subject, message } = await req.json();

//     // Validate the data
//     if (!name || !email || !subject || !message) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     // SendGrid email settings
//     const msg = {
//       to: process.env.EMAIL_USER, // Your email address
//       from: "phillippe.devtech@gmail.com", // Use a verified email address from SendGrid
//       subject: `New Contact Form Submission from ${name}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Subject: ${subject}
//         Message: ${message}
//       `,
//     };

//     // Send the email using SendGrid
//     await sgMail.send(msg);

//     // Respond with success status
//     return res.status(201).json({ message: "Message sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return res.status(500).json({ error: "Failed to send email" });
//   }
// }

// import { contact } from "@/data/data";
// import { NextApiRequest, NextApiResponse } from "next";
// import sgMail from "@sendgrid/mail";

// // Set up SendGrid API key
// sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   // Handle GET requests to retrieve contact data
//   return res.status(200).json(contact);
// }

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     // Extract message from request
//     const message = await req.json();
//     delete message.validate;

//     // Add the message to your in-memory contact array
//     const newMessage = {
//       id: contact.length + 1,
//       details: message,
//     };
//     contact.push(newMessage);

//     // Send an email notification via SendGrid
//     const msg = {
//       to: process.env.EMAIL_USER, // Your email address
//       from: "phillippe.devtech@gmail.com", // Use a verified email address from your SendGrid account
//       subject: `New Contact Form Submission from ${message.name}`,
//       text: `
//         Name: ${message.name}
//         Email: ${message.email}
//         Subject: ${message.subject}
//         Message: ${message.message}
//       `,
//     };

//     // Send the email using SendGrid
//     await sgMail.send(msg);

//     // Respond with success status
//     return res.status(201).json(newMessage);
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return res.status(500).json({ error: "Failed to send email" });
//   }
// }

// import { contact } from "@/data/data";

// export async function GET() {
//   return Response.json(contact);
// }

// export async function POST(request: Request) {
//   const message = await request.json();
//   delete message.validate;
//   const newMessage = {
//     id: contact.length + 1,
//     details: message,
//   };
//   contact.push(newMessage);
//   return new Response(JSON.stringify(newMessage), {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     status: 201,
//   });
// }
