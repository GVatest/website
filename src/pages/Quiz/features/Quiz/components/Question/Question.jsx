import styles from './Question.module.scss'
import classNames from 'classnames'

function Question({title, children, answeredCorrect, animate, visible, setVisible, index}) {
    return (
        <div
            className={classNames(styles.container, animate && styles.animated)}>
            <h2 className={styles.title} onClick={() => setVisible(index)}>{title} {answeredCorrect === true &&
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="#4bb34b" height="24" rx="12" width="24"/>
                    <path clipRule="evenodd"
                          d="m18.2071 7.79289c.3905.39053.3905 1.02369 0 1.41422l-7.5 7.49999c-.3905.3905-1.02368.3905-1.41421 0l-3.5-3.5c-.39052-.3905-.39052-1.0237 0-1.4142.39053-.3905 1.02369-.3905 1.41422 0l2.79289 2.7929 6.7929-6.79291c.3905-.39052 1.0237-.39052 1.4142 0z"
                          fill="#fff" fillRule="evenodd"/>
                </svg>}
                {answeredCorrect === false &&
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="iconBadge=error">
                            <rect width="24" height="24" rx="12" fill="#FF4E4E"/>
                            <g id="Vector">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289Z"
                                      fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289Z"
                                      fill="white"/>
                            </g>
                        </g>
                    </svg>}
            </h2>
            {visible &&
                <div className={styles.options}>
                    {children}
                </div>
            }
        </div>
    )
}

export default Question
