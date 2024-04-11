import type { Preview } from "@storybook/react";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "figma",
      values: [
        {
          name: "figma",
          value: "#F5F5F5",
        },
        {
          name: "facebook",
          value: "#3b5998",
        },
      ],
    },
  },
};

export default preview;
