import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

class StackedCard extends Component {
  static propTypes = {
    text: PropTypes.string,
    header: PropTypes.string,
    author: PropTypes.string,
    authorPrefix: PropTypes.string,
    hasAdorableIcon: PropTypes.bool,
    tags: PropTypes.object,
    textLength: PropTypes.number,
    width: PropTypes.number
  }

  static defaultProps = {
    hasAdorableIcon: false,
    textLength: 139,
    width: 400
  }

  componentDidMount() {
    this.setState({ avatarId: this.props.author })
  }

  chompString(stringToChomp) {
    const chomped = stringToChomp.substring(0, this.props.textLength)
    if (chomped.length >= this.props.textLength) {
      return chomped + '...'
    }
    return chomped
  }

  render() {
    const {
      text,
      header,
      author,
      authorPrefix,
      hasAdorableIcon,
      tags,
      width
    } = this.props

    const propStyles = {
      width: width
    }

    let adorableIcon
    if (hasAdorableIcon) {
      adorableIcon = (
        <div>
          <a className={styles.authorAvatar} href='#'>
            <img
              src={'https://api.adorable.io/avatars/172/' + author + '.png'}
            />
          </a>
          <svg className={styles.halfCircle} viewBox='0 0 106 57'>
            <path d='M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4' />
          </svg>
        </div>
      )
    }
    return (
      <article className={styles.card} style={propStyles}>
        <header className={styles.cardHeader}>
          <p>{header}</p>
          <h2>{this.chompString(text)}</h2>
        </header>

        <div className={styles.cardAuthor}>
          {adorableIcon}
          <div className={styles.authorName}>
            <div className={styles.authorNamePrefix}>{authorPrefix}</div>
            {author}
          </div>
        </div>
        <div className={styles.tags}>
          {Object.keys(tags).map((key, index) => (
            // eslint-disable-next-line react/jsx-key
            <a href={tags[key]}>{key}</a>
          ))}
        </div>
      </article>
    )
  }
}

export default StackedCard
