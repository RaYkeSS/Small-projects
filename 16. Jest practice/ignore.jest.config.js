/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {
    "\\.js$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
    "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/client/assetsTransformer.js",
  },
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules"],
};

module.exports = config;
