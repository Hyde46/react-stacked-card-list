import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

class StackedCardList extends Component {
  static propTypes = {
    /** List of `<StackedCard/>`  components */
    stackedCards: PropTypes.object,
    height: PropTypes.number
  }

  static defaultProps = {
    height: 400
  }

  render() {
    const { stackedCards, height } = this.props
    const propStyles = {
      height: height
    }
    return (
      <div>
        <section className={styles.rsclCardList} style={propStyles}>
          {stackedCards}
        </section>
      </div>
    )
  }
}

export default StackedCardList
