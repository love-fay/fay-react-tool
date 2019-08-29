const presets = [
  ["@babel/preset-typescript", {
    'isTSX': true,
    'allExtensions': true
  }],
  '@babel/preset-react',
  ["@babel/preset-env",{
    targets: {
      chrome: 70
    },
    debug: true
  }],
];

module.exports = {presets};