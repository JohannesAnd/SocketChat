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

app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

var server = app.listen(process.env.PORT || 8080);

var io = require('socket.io').listen(server);

var connections = [];
var colors = {}
var posts = [];

function get_random_color() {
    function c() {
        var hex = Math.floor(Math.random()*256).toString(16);
        return ("0"+String(hex)).substr(-2); // pad with zero
    }
    return "#"+c()+c()+c();
}

io.on('connection', function(socket) {
    connections.push(socket);
    colors[socket] = get_random_color();
    posts.forEach(function(post) {
        socket.emit("message", post);
    });
    socket.on('message', function(message){
        var postWithColor ={
            author: message.author,
            text: message.text,
            color: colors[socket]
        };
        console.log(postWithColor);
        posts.push(postWithColor);
        connections.forEach(function(sock) {
            sock.emit("message", postWithColor);
        });
    });
});
