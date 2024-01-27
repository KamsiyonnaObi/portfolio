import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  message: string;
  email: string;
  bestContact?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message,
  email,
  bestContact,
}) => (
  <div>
    <h1>Hello Kamsiyonna!</h1>
    <p>{firstName} has contacted you on your portfolio site.</p>
    <p>Here&apos;s their message</p>
    <i>{message}</i>
    <p>Here is their email: {email}</p>
    {bestContact && (
      <p>However, they would prefer if you reach out via {bestContact}</p>
    )}
  </div>
);
