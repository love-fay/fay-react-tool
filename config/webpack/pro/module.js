const autoprefixerFromPostcss = require('autoprefixer');
const cssnanoFromPostcss = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react',
                        ['@babel/preset-env',{
                            'targets': {
                                "chrome": 52,
                                "ie": 9
                            },
                            'modules': false,
                            'loose': true,
                            'useBuiltIns': 'entry',
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
                        ],
                        'transform-remove-console'
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
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: 'images',
                },
            },
        },
        {
            test: /\.gz$/,
            enforce: 'pre',
            use: 'gzip-loader',
        }
    ],
};