/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "project",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
    },
    {
      name: "color",
      type: "string",
      title: "Color",
    },
    {
      name: "desc",
      type: "string",
      title: "Description",
    },
    {
      name: "demo",
      type: "url",
      title: "Demo",
    },
    {
      name: "github",
      type: "url",
      title: "GitHub",
    },
    {
      title: "MobileImg",
      name: "mobileImg",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    },
    {
      title: "LaptopImg",
      name: "laptopImg",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    },
    {
      title: "FrontEndTags",
      name: "frontEndtags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      title: "BackEndTags",
      name: "backEndtags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};
