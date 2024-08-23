import { useEffect, useState } from 'react'

export const Input = () => {
    const [name, inputtedName] = useState('(Indsæt et navn i input feltet)');

    const inputtedValue = (event) => {
        inputtedName(event.target.value)    
    }   

    return (
        <>
        <h2>Hilsen</h2>
        <p>Send en hilsen til <b>{name}</b></p>
        <input onInput={inputtedValue} type="text" placeholder='Name input' />
        </>
    )   
}