const webpack = require('webpack');

module.exports = {
    resolve: {
        fallback: {
            util: require.resolve('util/'),
            stream: require.resolve('stream-browserify'),
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    ],
};
