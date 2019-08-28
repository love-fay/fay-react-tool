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
    modules: false,
    loose: true,
    useBuiltIns: "usage",
    corejs: { version: 3, proposals: true }
  }]
];

const plugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-syntax-dynamic-import",
  [
    "@babel/plugin-transform-runtime", {
    corejs: 2
  }
  ],
  [
    "@babel/plugin-proposal-object-rest-spread", {
    useBuiltIns: true
  }
  ]
];

module.exports = {presets, plugins};