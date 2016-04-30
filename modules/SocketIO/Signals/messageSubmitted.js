import set from 'cerebral-addons/set';
import submitMessage from './../Actions/submitMessage';

export default [
    submitMessage,
    set("state:/main.text", "")
];