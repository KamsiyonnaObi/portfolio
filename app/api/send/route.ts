import { Resend } from "resend";
import { ReactElement } from "react";
import { revalidatePath } from "next/cache";

import { EmailTemplate } from "@/components/Contact/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, message, bestContact, email } = await request.json();
    const { error, data } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["obikamsi@gmail.com"],
      subject: "Contact From Portfolio Site",
      react: EmailTemplate({
        firstName,
        message,
        bestContact,
        email,
      }) as ReactElement,
    });
    if (error) {
      return Response.json({ error });
    }
    revalidatePath("/contact");
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
