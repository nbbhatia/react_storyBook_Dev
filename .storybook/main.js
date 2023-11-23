/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/blocks"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
//   docs: {
//     autodocs: "tag",
//   },
//   staticDirs: ["..\\public"],
};
export default config;
