import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styles from './styles.module.css'

class StackedCard extends Component {

    static propTypes = {
        input: PropTypes.string,
        header: PropTypes.string,
        author: PropTypes.string,
        authorPrefix: PropTypes.string,
        hasAdorableIcon: PropTypes.bool,
        tags: PropTypes.object,
        textLength: PropTypes.number,
    }


    static defaultProps = {
        hasAdorableIcon: false,
        textLength: 139,
    }

    componentDidMount() {
        this.setState({ avatarId: this.props.author })
    }

    chompString(text) {
        text = text.substring(0, this.props.textLength);
        if (text.length >= this.props.textLength) {
            return text + "...";
        }
        return text
    }

    render() {

        const {
            input,
            header,
            author,
            authorPrefix,
            hasAdorableIcon,
            tags
        } = this.props;

        let adorableIcon;
        if (hasAdorableIcon) {
            adorableIcon =
                <div>
                    <a class={styles.authorAvatar} href="#">
                        <img src={"https://api.adorable.io/avatars/172/" + author + ".png"} />
                    </a>
                    <svg class={styles.halfCircle} viewBox="0 0 106 57">
                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                </div>

        }
        return (
            <article class={styles.card}>
                <header class={styles.cardHeader}>
                    <p>{header}</p>
                    <h2>{this.chompString(input)}</h2>
                </header>

                <div class={styles.cardAuthor}>
                    {adorableIcon}
                    <div class={styles.authorName}>
                        <div class={styles.authorNamePrefix}>{authorPrefix}</div>
                        {author}
                    </div>
                </div>
                <div class={styles.tags}>
                    {
                        Object.keys(tags).map((key, index) => (
                            <a href={tags[key]}>{key}</a>
                        ))
                    }
                </div>
            </article>
        )
    }
}

export default StackedCard;