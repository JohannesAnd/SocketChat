import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'cerebral-module-router';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import {Container} from 'cerebral-view-react';
import Devtools from 'cerebral-module-devtools';
import Http from 'cerebral-module-http';

import Main from './modules/Main';
import SocketIO from './modules/SocketIO';

import App from './components/App';

const controller = Controller(Model({}));

controller.addModules({
    main: Main(),
    socketIO: SocketIO({
        onMessage: '.main.messageReceived',
        url: 'localhost:8080'
    }),
    http: Http(),
    devtools: Devtools(),
    router: Router({
        '/*': 'main.navigated'
    },{
        onlyHash: true
    })
});

ReactDOM.render(<Container controller={controller}><App /></Container>, document.getElementById('root'));