import React from 'react';
import Post from './../Post';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';

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
        const rev = this.props.messages.slice().reverse();
        const posts = rev.map((post, index)=> {
            return (
                <Post
                    color={post.color}
                    key={index}
                    author={post.author}
                    text={post.text}
                />
            );
        });

        return (
            <div className={styles.wrapper}>
                <h1 className={styles.title}>{this.props.title}</h1>
                <form
                    id="form"
                    className={styles.form}
                    onSubmit={(e) => {
                        this.handleSubmit(e);
                    }}
                >
                    <input
                        className={styles.name}
                        id="name"
                        value={this.props.author}
                        placeholder="Name"
                        onChange={(e) => {
                            this.props.signals.main.authorChanged({author: e.target.value});
                        }}
                    />
                    <input
                        className={styles.text}
                        id="message"
                        value={this.props.text}
                        placeholder="Message"
                        onChange={(e) => {
                            this.props.signals.main.textChanged({text: e.target.value});
                        }}
                    />
                    <input
                        className={styles.submit}
                        type="submit"
                    />
                </form>
                {posts}
            </div>
        );
    }
}

export default App;
