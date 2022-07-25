export default function Footer({ numCards, answers, finished }) {
    console.log(answers)


    return (
        <>
            <div className={!finished ? 'footer' : 'footer footer-transition'}>
                {
                    (finished && !answers.includes('close-circle')) ?
                        <div className={!finished ? 'final' : 'final final-transition'}>
                            <strong>🥳 Parabéns!
                            </strong>
                            <div className="text">Você não esqueceu de nenhum flashcard!</div>
                        </div> :
                        <div className={!finished ? 'final' : 'final final-transition'}>
                            <strong>😢 Putz...
                            </strong>
                            <div className="text">Ainda faltam alguns...
                                Mas não desanime!</div>
                        </div>
                }
                <div>
                    {numCards}/4 CONCLUÍDOS
                </div>
                <div>
                    {answers.map((answer, index) => <ion-icon key={index} name={answer}></ion-icon>)}
                </div>
            </div>
        </>
    )
}