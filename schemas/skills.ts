/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "skills",
  title: "Tech Skills",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Tech Stack",
      name: "stack",
      type: "array",
      of: [
        {
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
    },
  ],
};
