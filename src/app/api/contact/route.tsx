import { contact } from "@/data/data";

export async function GET() {
  return Response.json(contact);
}

export async function POST(request: Request) {
  const message = await request.json();
  delete message.validate;
  const newMessage = {
    id: contact.length + 1,
    details: message,
  };
  contact.push(newMessage);
  return new Response(JSON.stringify(newMessage), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
