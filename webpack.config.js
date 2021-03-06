var path = require('path');

module.exports = {
    entry:  [
        './app/main'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    module: {
        loaders: [{
            test: /\.css?$/,
            loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
        },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    "presets": ["react", "es2015", "stage-0"],
                    "plugins": [
                        ["transform-decorators-legacy"]
                    ]
                }
            }]
    }
};