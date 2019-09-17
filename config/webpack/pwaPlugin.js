const workboxPlugin = require('workbox-webpack-plugin');

module.exports = new workboxPlugin.GenerateSW({
    swDest: 'sw.js',
    clientsClaim: true,
    skipWaiting: true,
    importWorkboxFrom: 'local',
    runtimeCaching: [{
        // Match any same-origin request that contains 'api'.
        urlPattern: /api/,
        // Apply a network-first strategy.
        handler: 'NetworkFirst',
        options: {
            // Fall back to the cache after 10 seconds.
            networkTimeoutSeconds: 10,
            // Use a custom cache name for this route.
            cacheName: 'fay-api-cache',
            // Configure custom cache expiration.
            expiration: {
                maxEntries: 5,
                maxAgeSeconds: 60,
            },
            // Configure background sync.
            backgroundSync: {
                name: 'fay-queue-name',
                options: {
                    maxRetentionTime: 60 * 60,
                },
            },
            // Configure which responses are considered cacheable.
            cacheableResponse: {
                statuses: [0, 200],
                headers: {'x-test': 'true'},
            },
            // Configure the broadcast update plugin.
            broadcastUpdate: {
                channelName: 'fay-update-channel',
            },
            // Add in any additional plugin logic you need.
            // plugins: [
            //     {cacheDidUpdate: () => /* custom plugin code */}
            // ],
            // matchOptions and fetchOptions are used to configure the handler.
            fetchOptions: {
                mode: 'no-cors',
            },
            matchOptions: {
                ignoreSearch: true,
            },
        },
    }, {
        urlPattern: new RegExp('/index.html/'),
        handler: 'NetworkFirst',
        options: {
            cacheableResponse: {
                statuses: [0, 200]
            }
        }
    }],
    navigateFallback: '/index.html',
    navigateFallbackBlacklist: [/^\/_/, /login/, /oauth2/]
});