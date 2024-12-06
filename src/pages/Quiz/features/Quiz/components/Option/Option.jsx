import classNames from 'classnames'
import styles from './Option.module.scss'

function Option({ text, correct, description, isChosen, className, onPick }) {
    return (
        <div
            className={classNames(styles.container, isChosen && styles.chosen, isChosen && (correct ? styles.correct : styles.wrong), className)}
            onClick={onPick}
        >
            <p>{text}</p>
            {isChosen && correct && !!description && <p className={styles.description}>{description}</p>}
        </div>
    )
}

export default Option
