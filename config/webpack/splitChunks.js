module.exports = {
    cacheGroups:{
        react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react~react-dom',
            chunks: 'all',
        },
        lib: {
            test: /[\\/]node_modules[\\/](moment|react-router|react-router-dom|history|redux|react-redux|redux-saga)[\\/]/,
            name: 'moment~react-router~redux*',
            chunks: 'all',
        }
    }
};