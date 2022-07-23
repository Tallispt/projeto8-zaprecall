import { useState } from "react"

import Initial from "./Initial"
import Main from "./Main"

let cards = [
    { question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript.' },
    { question: 'O React é _', answer: 'uma biblioteca JavaScript para construção de interfaces.' },
    { question: 'Componentes devem iniciar com _', answer: 'letra maiúscula.' },
    { question: 'Podemos colocar __ dentro do JSX', answer: 'expressões.' },
    { question: 'O ReactDOM nos ajuda _', answer: 'interagindo com a DOM para colocar componentes React na mesma.' },
    { question: 'Usamos o npm para _', answer: 'gerenciar os pacotes necessários e suas dependências.' },
    { question: 'Usamos props para _', answer: 'passar diferentes informações para componentes.' },
    { question: 'Usamos estado (state) para _', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.' }
]

export default function App() {
    const [isInitial, setIsInitial] = useState(true)

    function changeScreen() {
        setIsInitial(!isInitial)
        cards = cards.sort(() => Math.random() - 0.5).slice(4)
    }


    return (
        <>
            {
                isInitial ?
                    <Initial changeScreen={changeScreen} /> :
                    <Main cards={cards} />
            }
        </>
    )
}