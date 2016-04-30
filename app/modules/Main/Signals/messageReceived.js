import push from '../../../../node_modules/cerebral-addons/push';
import copy from '../../../../node_modules/cerebral-addons/copy';

export default [
    copy('input:/message', push('state:/main.messages'))
];