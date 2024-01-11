const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["config", "setup", "ui", "component"]],
  },
};
export default config;
