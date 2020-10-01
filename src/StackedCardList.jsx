import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

class StackedCardList extends Component {
  static propTypes = {
    /** List of `<StackedCard/>`  components */
    stackedCards: PropTypes.object,
    height: PropTypes.number,
    style: PropTypes.object
  }

  static defaultProps = {
    height: 400,
    style: {}
  }

  render() {
    const { stackedCards, height, style } = this.props
    const propStyles = {
      height: height
    }
    var combinedPropStyles = Object.assign({}, propStyles, style)
    return (
      <div>
        <section className={styles.rsclCardList} style={combinedPropStyles}>
          {stackedCards}
        </section>
      </div>
    )
  }
}

export default StackedCardList
