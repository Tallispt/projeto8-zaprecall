export default function Footer({ numCards, answers }) {
    return (
        <>
            <div className="footer">{numCards}/4 CONCLUÍDOS
                <div>
                    {answers.map(answer => <ion-icon name={answer}></ion-icon>)}
                </div>
            </div>
        </>
    )
}