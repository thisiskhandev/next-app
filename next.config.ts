import path from "path";

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "mixins";`,
  },
};
