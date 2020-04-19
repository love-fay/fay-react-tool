const presets = [
  ["@babel/preset-typescript", {
    'isTSX': true,
    'allExtensions': true
  }],
  '@babel/preset-react',
  ["@babel/preset-env",{
    // We don't recommend using preset-env this way because it doesn't take advantage of its ability to target specific browsers.
    // so you can use https://github.com/browserslist/browserslist
    // targets: {
    //   chrome: 70
    // },
    debug: true
  }],
];

module.exports = {presets};