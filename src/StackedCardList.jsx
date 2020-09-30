import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styles from './styles.module.css';

class StackedCardList extends Component {

    static propTypes = {
        /** List of `<StackedCard/>`  component */
        stackedCards: PropTypes.object
    }
    render() {
        const {
            stackedCards
        } = this.props;
        return (
            <div className={styles}>
                <section class={styles.cardList}>
                    {stackedCards}
                </section>
            </div>)
    }

}

export default StackedCardList;