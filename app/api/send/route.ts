import { Resend } from "resend";
import { ReactElement } from "react";

import { EmailTemplate } from "@/components/Contact/EmailTemplate";
import { contactSchema } from "@/utils/validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "Invalid submission", fields: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { firstName, message, bestContact, email } = parsed.data;

  try {
    const { error, data } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["obikamsi@gmail.com"],
      replyTo: email,
      subject: `Contact From Portfolio Site: ${firstName.replace(/\s+/g, " ")}`,
      react: EmailTemplate({
        firstName,
        message,
        bestContact,
        email,
      }) as ReactElement,
    });

    if (error) {
      console.error("Resend rejected the message:", error);
      return Response.json(
        { error: "Unable to send message" },
        { status: 502 }
      );
    }

    return Response.json({ data });
  } catch (error) {
    console.error("Unexpected error sending message:", error);
    return Response.json({ error: "Unable to send message" }, { status: 500 });
  }
}
