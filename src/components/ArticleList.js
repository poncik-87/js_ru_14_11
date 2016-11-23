import React, { Component, PropTypes }  from 'react'
import Article from './Article'
import Acordion from '../decorators/acordion'

function ArticleList(props) {
    const { articles, openedAccordionItemId, openAccordionItem } = props;

    const articleItems = articles.map(article => (
        <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openedAccordionItemId}
                toggleOpen = {openAccordionItem(article.id)}
            />
        </li>
    ));

    return (
        <ul>
            {articleItems}
        </ul>
    );
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    openedAccordionItemId: PropTypes.string.isRequired,
    openAccordionItem: PropTypes.func.isRequired
}

export default Acordion(ArticleList);