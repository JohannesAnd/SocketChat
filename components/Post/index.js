import React from 'react';
import styles from './styles.css';

class Post extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <h1 style={{color: this.props.color}} className={styles.author}>{`${this.props.author}: `}</h1>
                <h2 className={styles.text}>{this.props.text}</h2>
            </div>
        );
    }
}

export default Post;
