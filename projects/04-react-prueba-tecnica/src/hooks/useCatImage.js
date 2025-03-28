import { useState, useEffect } from 'react'

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return

        const firstWord = fact.split(' ')[0]

        fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`)
            .then(response => {
                const url = response.url
                setImageUrl(url)
            })
    }, [fact])

    return { imageUrl }
}
