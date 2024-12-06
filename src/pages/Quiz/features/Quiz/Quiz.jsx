import styles from './Quiz.module.scss'
import {useMemo, useState} from 'react'
import Option from './components/Option/Option.jsx'
import Question from './components/Question/Question.jsx'


const Quiz = ({questions}) => {
    const [state, setState] = useState({
        currentQuestionIndex: 0,
        answerIndex: -1,
        correctCount: 0,
        userAnswers: [],
        answerCorrect: false,
    })

    const [currentVisible, setCurrentVisible] = useState(false);


    const handlePick = (index, correct) => {
        if (state.answerIndex !== -1) return
        setState((prevState) => ({...prevState, answerIndex: index, answerCorrect: correct}))
        setTimeout(() => {
            setState((prevState) => ({
                currentQuestionIndex: prevState.currentQuestionIndex + 1,
                answerIndex: -1,
                correctCount: correct ? prevState.correctCount + 1 : prevState.correctCount,
                userAnswers: [...prevState.userAnswers, index],
                answerCorrect: false,
            }))
        }, 2000)
    }

    const currentQuestion = useMemo(() => state.currentQuestionIndex < questions.length ? questions[state.currentQuestionIndex] : undefined, [questions, state])

    return (
        <div className={styles.container}>
            {currentQuestion ?
                <Question title={currentQuestion.title}
                          animate={state.answerIndex === -1 ? undefined : !state.answerCorrect}
                          answeredCorrect={state.answerIndex === -1 ? undefined : state.answerCorrect}
                          visible
                          index={state.currentQuestionIndex}
                >
                    {currentQuestion.options.map((option, index) => {
                        return (
                            <Option key={index}
                                    {...option}
                                    description={currentQuestion.description}
                                    isChosen={state.answerIndex === index}
                                    onPick={() => handlePick(index, option.correct)}
                            />
                        )
                    })}
                </Question> :
                <div className={styles.results}>
                    <div className={styles.info}>
                        <h1 className={styles.title}>Результаты</h1>
                        <p className={styles.answers}>Правильных ответов: {state.correctCount} из {questions.length}</p>
                    </div>
                    {questions.map((question, qIndex) => {
                        const correctAnswerIndex = question.options.findIndex((option) => option.correct)
                        const userAnswerIndex = state.userAnswers[qIndex]
                        return (
                            <Question key={qIndex} title={question.title} visible={currentVisible === qIndex}
                                      setVisible={setCurrentVisible}
                                      index={qIndex}>
                                <Option {...question.options[correctAnswerIndex]}
                                        description={question.description}
                                        isChosen={true}
                                />
                                {correctAnswerIndex !== userAnswerIndex &&
                                    <Option {...question.options[userAnswerIndex]}
                                            isChosen={true}
                                    />
                                }
                            </Question>

                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Quiz
