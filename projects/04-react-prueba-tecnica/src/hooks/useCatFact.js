import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts.js'

export function useCatFact() {
    const [fact, setFact] = useState()

    const refreshRandomFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }

    useEffect(refreshRandomFact, [])

    return { fact, refreshRandomFact }
}
