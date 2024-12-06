import Quiz from './features/Quiz/Quiz.jsx'
import {useEffect, useMemo} from 'react'
import {shuffle} from './utils/shuffle.js'
import './index.css'
import {DONKEY_PAGE, FLEX_PAGE, HOME_PAGE, WORDS_PAGE} from "../../constants/pages.js";

const QuizPage = ({setNavState}) => {
    useEffect(() => {
        setNavState([HOME_PAGE, DONKEY_PAGE, FLEX_PAGE, WORDS_PAGE]);
    }, []);

    const questions = useMemo(() => shuffle([
        {
            title: 'А голос у него был не такой, как у почтальона Печкина, дохленький. У Гаврюши голосище был, как у электрички. Он _____ _____ на ноги поднимал',
            options: shuffle([
                {text: 'Пол деревни, за раз', correct: false},
                {text: 'Полдеревни, зараз', correct: true},
                {text: 'Пол-деревни, за раз', correct: false}],
            ),
            description: 'Правильно! Раздельно существительное будет писаться в случае наличия дополнительного слова между существительным и частицей. Правильный ответ: полдеревни пишется слитно. Зараз (ударение на второй слог) — это обстоятельственное наречие, пишется слитно. Означает быстро, одним махом.',
        },
        {
            title: 'А эти слова как пишутся?',
            options: shuffle([
                {text: 'Капуччино и эспрессо', correct: false},
                {text: 'Каппуччино и экспресо', correct: false},
                {text: 'Капучино и эспрессо', correct: true}]),
            description: 'Конечно! По орфографическим нормам русского языка единственно верным написанием будут «капучино» и «эспрессо».',
        },
        {
            title: 'Как нужно писать?',
            options: shuffle([
                {text: 'Черезчур', correct: false},
                {text: 'Черес-чур', correct: false},
                {text: 'Чересчур', correct: true}]),
            description: 'Да! Это слово появилось от соединения предлога «через» и древнего слова «чур», которое означает «граница», «край». Но слово претерпело изменения, так что правильное написание учим наизусть — «чересчур».',
        },
        {
            title: 'Где допущена ошибка?',
            options: shuffle([
                {text: 'Аккордеон', correct: false},
                {text: 'Белиберда', correct: false},
                {text: 'Эпелепсия', correct: true}]),
            description: 'Верно! Это слово пишется так: «эпИлепсия».',
        },
    ]), [])
    return <Quiz questions={questions}/>
}

export default QuizPage
