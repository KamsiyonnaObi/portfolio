import React from "react";
import Markdown from "react-markdown";

const proseText =
  "sm-reg dark:text-white-800 sm:body-reg text-white-500 transition delay-150 duration-300 ease-in-out";

export const CaseStudyBody = ({ content }: { content: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <Markdown
        components={{
          h2: ({ children }) => (
            <h2 className="heading3 text-black-200 dark:text-white-900 lg:header3 mt-6 first:mt-0">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="paragraph-bold text-black-200 dark:text-white-900 mt-2">
              {children}
            </h3>
          ),
          p: ({ children }) => <p className={proseText}>{children}</p>,
          ul: ({ children }) => (
            <ul className={`list-disc pl-5 flex flex-col gap-2 ${proseText}`}>
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol
              className={`list-decimal pl-5 flex flex-col gap-2 ${proseText}`}
            >
              {children}
            </ol>
          ),
          li: ({ children }) => <li>{children}</li>,
          strong: ({ children }) => (
            <strong className="font-semibold text-black-200 dark:text-white-900">
              {children}
            </strong>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-sm font-semibold text-Accent-light underline underline-offset-4 dark:text-Accent-dark"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-Accent-light dark:border-Accent-dark pl-4 italic text-white-500 dark:text-white-800">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="border-white-800 dark:border-black-200" />,
          code: ({ children }) => (
            <code className="rounded bg-white-800 px-1.5 py-0.5 text-sm dark:bg-black-200">
              {children}
            </code>
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
};
