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
    maxTextChars: PropTypes.number,
    width: PropTypes.number,
    style: PropTypes.object
  }

  static defaultProps = {
    hasAdorableIcon: false,
    maxTextChars: 139,
    width: 400
  }

  chompString(stringToChomp) {
    const chomped = stringToChomp.substring(0, this.props.maxTextChars)
    if (chomped.length >= this.props.maxTextChars) {
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
      width,
      style
    } = this.props

    const propStyles = {
      width: width
    }

    var combinedPropStyles = Object.assign({}, propStyles, style)
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
      <article className={styles.rsclCard} style={combinedPropStyles}>
        <header className={styles.rsclCardHeader}>
          <p>{header}</p>
          <h2>{this.chompString(text)}</h2>
        </header>

        <div className={styles.rsclCardAuthor}>
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
