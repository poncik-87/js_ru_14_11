import React from 'react';

export default (Component) => class Accordion extends React.Component {
    state = {
        openedAccordionItemId: null
    }

    openAccordionItem = id => ev => {
        this.setState({
            openedAccordionItemId: this.state.openedAccordionItemId === id ? null : id
        })
    }

    render() {
        return <Component {...this.props} {...this.state} openAccordionItem = {this.openAccordionItem}/>
    }
}