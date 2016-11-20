import React from 'react';
import Comment from './Comment';

class CommentsList extends React.Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        };
    }

    render() {
        const commentsListData = this.props.data;
        const commentItems = this.state.isOpen ?
              //аналогично - data поменяй на comment, например
        commentsListData.map(commentData => <li key={commentData.id}><Comment data={commentData}/></li>) : null;
        const commentsHeader = this.state.isOpen ? 'Hide Comments' : 'Show Comments';

        return (
            <div>
                <b onClick={this.handleClick}>{commentsHeader}</b>
                <ul>{commentItems}</ul>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default CommentsList;
