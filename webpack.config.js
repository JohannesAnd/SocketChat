var path = require('path');

module.exports = {
    entry:  [
        path.join(__dirname, 'app/main.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
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