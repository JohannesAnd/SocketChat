import set from '../../../../node_modules/cerebral-addons/set';
import connectToSocket from './../../SocketIO/Actions/connectToSocket';

export default [
    set(['main', 'title'], "SocketChat"),
    connectToSocket
]