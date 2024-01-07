/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "work",
  type: "document",
  title: "Work Experiences",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Employer",
    },
    {
      name: "role",
      type: "string",
      title: "Job Title",
    },
    {
      name: "years",
      type: "number",
      title: "Years of Experience",
    },
    {
      name: "desc",
      type: "string",
      title: "Description",
    },
    {
      name: "descCont",
      type: "string",
      title: "Description Continued",
    },
    {
      title: "Company Logo",
      name: "logo",
      type: "image",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    },
  ],
};
