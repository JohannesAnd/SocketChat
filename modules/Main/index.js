import navigated from './Signals/navigated';
import messageReceived from './Signals/messageReceived';
import authorChanged from './Signals/authorChanged';
import textChanged from './Signals/textChanged';

export default (options = {}) => {
    return (module, controller) => {

        module.addState({
            title: "SocketChat",
            messages: [],
            author: "",
            text: ""
        });

        module.addSignals({
            navigated,
            messageReceived,
            authorChanged,
            textChanged
        });

    }
}