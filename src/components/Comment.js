import React from 'react';

class Comment extends React.Component {
    render() {
        const comment = this.props.data;

        return (
            <div>
                <p>{comment.user}</p>
                <p>{comment.text}</p>
            </div>
        );
    }
}

export default Comment;