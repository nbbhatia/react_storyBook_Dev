module.exports = {
  moduleNameMapper: {
    ".(css|less|sass|scss)$": "identity-obj-proxy",
    ".+.(png|jpg|jpeg|ttf|woff|woff2)$": "identity-obj-proxy",
  },
  collectCoverage: true,
  testEnvironment: "jsdom",
  moduleDirectories: ["./node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/src/jest-setup.js"],
};
