module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --quiet --fix'],
  '*.{js,ts,jsx,tsx}': ['prettier --write --ignore-unknown'],
};
