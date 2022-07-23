
export default function Initial({ changeScreen }) {

    return (
        <div className='initial'>
            <div className='logo'>
                <img src="asset/logo.png" width='136px' height='161px' />
                <img src='asset/zaprecall.png' />
            </div>
            <div className='button' onClick={changeScreen}>Iniciar Recall!</div>
        </div>
    )
}