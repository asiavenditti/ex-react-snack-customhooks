import React, { useEffect, useState } from 'react'

export default function useDate() {

    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000);

        return () => clearInterval(intervalId)

    }, [])

    return currentDate

}
