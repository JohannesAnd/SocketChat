import React from 'react';
import Post from './../Post';
import {Decorator as Cerebral} from 'cerebral-view-react';


@Cerebral({
    title: ['main', 'title'],
    messages: ['main', 'messages'],
    text: ['main', 'text'],
    author: ['main', 'author']
})
class App extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.signals.socketIO.messageSubmitted();
    }
    render() {
        const posts = this.props.messages.map((post, index)=> {
            return (
                <Post
                    key={index}
                    author={post.author}
                    text={post.text}
                />
            );
        });

        return (
            <div>
                {this.props.title}
                <form id="form" onSubmit={(e) => { this.handleSubmit(e); }}>
                    <p>Name:</p>
                    <input
                        id="name"
                        value={this.props.author}
                        onChange={(e) => {
                            this.props.signals.main.authorChanged({author: e.target.value});
                        }}
                    />
                    <p>Message:</p>
                    <input
                        id="message"
                        value={this.props.text}
                        onChange={(e) => {
                            this.props.signals.main.textChanged({text: e.target.value});
                        }}
                    />
                    <input type="submit" />
                </form>
                {posts}
            </div>
        );
    }
}

export default App;
