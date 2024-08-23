import { useEffect, useState } from 'react'

export const Clicker = () => {
    const [clickCount, setClickCount] = useState (0);
    
    const clicked = () => {
        setClickCount(clickCount + 1)
        // "Performance Improvement" per ChatGPT
        // setClickCount(prevCount => prevCount + 1);
    }

    return (
        <>
            <h2>Clicker</h2>
            <button onClick={clicked}>Button</button>
            <p>Du har klikket på knappen {clickCount} antal gange.</p><br />
        </>
    )
}
