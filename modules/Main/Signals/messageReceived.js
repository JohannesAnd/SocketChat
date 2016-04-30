import push from 'cerebral-addons/push';
import copy from 'cerebral-addons/copy';

export default [
    copy('input:/message', push('state:/main.messages'))
];