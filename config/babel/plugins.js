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

module.exports = {plugins};