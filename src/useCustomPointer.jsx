
// 🏆 Snack 3: useCustomPointer() – Cambia il Cursore del Mouse
// Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

// Cosa deve fare?

// Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
// Posiziona il componente al posto del puntatore del mouse.
// Il componente segue i movimenti del mouse.


import React, { useEffect, useState } from 'react'

export default function useCustomPointer() {

    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        function handlePosition(event) {

            setPosition({
                x: event.clientX,
                y: event.clientY
            })

        }
        window.addEventListener('mousemove', handlePosition)

        return () => window.removeEventListener('mousemove', handlePosition)
    }, [])

    return position

}
