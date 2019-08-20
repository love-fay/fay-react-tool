// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixerFromPostcss = require('autoprefixer');
const cssnanoFromPostcss = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Fiber = require('fibers');
const { dirname, join, resolve } = require('path');

module.exports = {
    rules: [
        {
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: (loader) => [
                            autoprefixerFromPostcss(),
                            cssnanoFromPostcss(),
                        ],
                    },
                },
            ],
        },
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader?cacheDirectory',
                options: {
                    presets: [
                        ["@babel/preset-typescript", {
                            'isTSX': true,
                            'allExtensions': true
                        }],
                        '@babel/preset-react',
                        ['@babel/preset-env',{
                            'targets': {
                                'chrome': '70'
                            },
                            'modules': false,
                            'loose': true,
                            'useBuiltIns': 'usage',
                            'debug': true,
                            'corejs': { version: 3, proposals: true }
                        },
                        ]
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-syntax-dynamic-import',
                        [
                            '@babel/plugin-transform-runtime', {
                            'corejs': 2,
                        },
                        ],
                        [
                            '@babel/plugin-proposal-object-rest-spread', {
                            'useBuiltIns': true
                        },
                        ]
                    ],
                },
            },
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader?cacheDirectory',
                options: {
                    presets: ['@babel/preset-react',
                        ['@babel/preset-env',{
                            'targets': {
                                'chrome': '70'
                            },
                            'modules': false,
                            'loose': true,
                            'useBuiltIns': 'usage',
                            'debug': true,
                            'corejs': { version: 3, proposals: true }
                        },
                        ]
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-syntax-dynamic-import',
                        [
                            '@babel/plugin-transform-runtime', {
                                'corejs': 2,
                            },
                        ],
                        [
                            '@babel/plugin-proposal-object-rest-spread', {
                            'useBuiltIns': true
                        },
                        ]
                    ],
                },
            },
        },
        {
            test: /\.less$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            },{
                loader: 'css-loader',
            // },{
            //     loader: 'postcss-loader',
            //     options: {
            //         plugins: (loader) => [
            //             autoprefixerFromPostcss(),
            //             cssnanoFromPostcss(),
            //         ],
            //     },
            },{
                loader: 'less-loader',
                options: {
                    ieCompat: true,
                    javascriptEnabled: true
                }
            }],
        },
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: 'postcss-loader',
                options: {
                    plugins: (loader) => [
                        autoprefixerFromPostcss(),
                        cssnanoFromPostcss(),
                    ],
                },
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: ['./node_modules'],
                    implementation: require("sass"),
                    fiber: Fiber
                }
            }]
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: 'images',
                },
            },
        },
        // {
        //     test: /\.ts$/,
        //     use: ['source-map-loader'],
        //     enforce: 'pre',
        // },
        // {
        //     test: /\.js$/,
        //     use: ['source-map-loader'],
        //     enforce: 'pre',
        // },
    ],
};