const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "src", "assets"),
      "@components": path.resolve(__dirname, "src", "components"),
      "@context": path.resolve(__dirname, "src", "context"),
      "@lib": path.resolve(__dirname, "src", "lib"),
      "@pages": path.resolve(__dirname, "src", "pages"),
      "@store": path.resolve(__dirname, "src", "store"),
      "@styles": path.resolve(__dirname, "src", "styles"),
      "@utils": path.resolve(__dirname, "src", "utils"),
    },
  },
};
