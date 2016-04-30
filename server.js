var express = require('express');
var http = require('http');
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');

var config = require('./webpack.config.js');
var compiler = webpack(config);

var app = express();

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: true,
        chunkModules: false,
        modules: false
    }
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

var server = app.listen(process.env.PORT || 8080);

var io = require('socket.io').listen(server);

var connections = [];
var posts = [];

io.on('connection', function(socket) {
    connections.push(socket);
    posts.forEach(function(post) {
        socket.emit("message", post);
    });
    socket.on('message', function(message){
        console.log(message);
        posts.push(message);
        connections.forEach(function(sock) {
            sock.emit("message", message);
        });
    });
});
