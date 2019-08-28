# fay react tool
####react app build tool

Let's focus attention in our applications.

***

####config
* [babel](https://github.com/love-fay/fay-react-tool/tree/master/config/babel)
* [nginx](https://github.com/love-fay/fay-react-tool/tree/master/config/nginx)
* [typescript](https://github.com/love-fay/fay-react-tool/tree/master/config/typescript)
* [webpack](https://github.com/love-fay/fay-react-tool/tree/master/config/webpack)

#Usage

app root directory structure:
* src
* assets

start
* node_modules/.bin/webpack-cli serve --config node_modules/@fay-react/tool/config/webpack/default/webpack.config.js --color --progress

build
* node_modules/.bin/webpack-cli --config node_modules/@fay-react/tool/config/webpack/default/webpack.pro.config.js --color --progress
