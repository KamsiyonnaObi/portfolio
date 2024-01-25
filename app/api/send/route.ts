import { Resend } from "resend";
import { ReactElement } from "react";

import { EmailTemplate } from "@/components/Contact/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { error, data } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["obikamsi@gmail.com"],
      subject: "Contact From Portfolio Site",
      react: EmailTemplate({
        firstName: "Jon Snow",
        message: "Winter is coming",
        bestContact: "2043965056",
        email: "headcrow@housestark.net",
      }) as ReactElement,
    });
    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
