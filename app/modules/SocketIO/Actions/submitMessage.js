export default function({state, services}) {
    services.socketIO.sendMessage({
        author: state.get("main.author"),
        text: state.get("main.text")
    });
}