import React, { Component } from 'react'
import CommentsList from './CommentsList'

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            obj: { foo: 'bar' }
        }
    }

    render() {
        const { article } = this.props;
        const body = this.state.isOpen ? <p>{article.text}</p> : null;
        // data - не очень хороший выбор названия
        const comments = this.state.isOpen ? <CommentsList data={article.comments}/> : null;
        return (
            <section>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
                {comments}
            </section>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article
