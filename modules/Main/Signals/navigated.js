import set from 'cerebral-addons/set';
import connectToSocket from './../../SocketIO/Actions/connectToSocket';

export default [
    set(['main', 'title'], "SocketChat"),
    connectToSocket
]