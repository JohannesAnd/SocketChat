var React = require('react');

class Post extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.author}</h1>
                <h2>{this.props.text}</h2>
            </div>
        );
    }
}

export default Post;
