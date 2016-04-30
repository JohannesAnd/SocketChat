import set from '../../../../node_modules/cerebral-addons/set';
import submitMessage from './../Actions/submitMessage';

export default [
    submitMessage,
    set("state:/main.text", "")
];