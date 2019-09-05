module.exports = {
    cacheGroups:{
        vendor1: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react~react-dom',
            chunks: 'all',
        },
        vendor2: {
            test: /[\\/]node_modules[\\/](moment)[\\/]/,
            name: 'moment',
            chunks: 'all',
        },
        vendor3: {
            test: /[\\/]node_modules[\\/](redux|react-redux|redux-saga)[\\/]/,
            name: 'redux~react-redux~redux-saga',
            chunks: 'all',
        },
        vendor4: {
            test: /[\\/]node_modules[\\/](react-router|react-router-dom|history)[\\/]/,
            name: 'react-router~history',
            chunks: 'all',
        },
    }
};