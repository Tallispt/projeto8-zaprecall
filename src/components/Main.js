import { useState } from 'react'
import Footer from './Footer'

function Cards(props) {
    const [showQuestion, setShowQuestion] = useState(false)
    const [transf, setTransf] = useState('card')
    const [answerd, setAnswerd] = useState('play-outline')
    const [cardTopShow, setCardTopShow] = useState('card-top')
    const [questionCard, setQuestionCard] = useState('question-card hide')

    function showCard() {
        if (!showQuestion) {
            setTransf(transf === 'card' ? 'card card-transition' : 'card')
            setShowQuestion(!showQuestion)
            setCardTopShow('card-top hide')
            setQuestionCard('question-card')
        }
    }

    function handleAnswer(id) {
        props.setNumCards(props.numCards + 1)
        setTransf('card')
        setQuestionCard('question-card hide')
        setCardTopShow(`card-top ${id}`)
        if (id === 'red') {
            setAnswerd('close-circle')
            props.setAnswers([...props.answers, 'close-circle'])
        } else if (id === 'yellow') {
            setAnswerd('help-circle')
            props.setAnswers([...props.answers, 'help-circle'])
        } else {
            setAnswerd('checkmark-circle')
            props.setAnswers([...props.answers, 'checkmark-circle'])
        }
    }

    return (
        <li >
            <div className={transf} onClick={showCard}>
                <div className={cardTopShow}>
                    Perguntas {props.index + 1}
                    <ion-icon name={answerd}></ion-icon>
                </div>
                <div className={questionCard}>
                    {props.card.question}
                    <img src='asset/setinha.png' onClick={() => { setTransf(transf + ' rotate') }} />
                </div>
                <div className='answer-card'>
                    {props.card.answer}
                    <div className='check-box'>
                        <div id='red' onClick={(e) => {
                            handleAnswer(e.currentTarget.id)
                        }} style={{ background: '#FF3030' }}>Não lembrei</div>
                        <div id='yellow' onClick={(e) => {
                            handleAnswer(e.currentTarget.id)
                        }} style={{ background: '#FF922E' }}>Quase não lembrei</div>
                        <div id='green' onClick={(e) => {
                            handleAnswer(e.currentTarget.id)
                        }} style={{ background: '#2FBE34' }}>Zap!</div>
                    </div>
                </div>
            </div>
        </li>
    )
}


export default function Main({ cards }) {
    const [numCards, setNumCards] = useState(0)
    const [answers, setAnswers] = useState([])

    return (
        <div className="main">
            <div className='logo-pequeno'>
                <img src="asset/logo-pequeno.png" width='52px' height='60px' />
                <img src='asset/zaprecall.png' width='203px' height='44px' />
            </div>
            <ul>
                {cards.map((card, index) => <Cards key={index} card={card} index={index} setNumCards={setNumCards} numCards={numCards} setAnswers={setAnswers} answers={answers} />)}
            </ul>
            <Footer numCards={numCards} answers={answers} />
        </div>
    )
}