const presets = [
  ["@babel/preset-typescript", {
    'isTSX': true,
    'allExtensions': true
  }],
  "@babel/preset-react",
  ["@babel/preset-env",{
    targets: {
      chrome: 70
    },
    // modules: false,
    // loose: true,
    useBuiltIns: "usage",
    corejs: { version: 3, proposals: true },
    debug: true
  }]
];

module.exports = {presets};