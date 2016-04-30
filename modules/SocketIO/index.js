import messageSubmitted from './Signals/messageSubmitted';

export default (options) => {
    return (module, controller) => {
        let connection = null;

        module.addSignals({
            messageSubmitted
        });

        module.addServices({
            connect() {
                connection = io.connect(options.url);
                connection.on('message', (message) => controller.getSignals(options.onMessage)({message}));
            },
            sendMessage(message) {
                connection.send(message);
            }
        })
    }
}