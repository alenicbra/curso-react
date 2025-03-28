import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Obtener un nuevo hecho</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Imagen obtenida usando la primera palabra de ${fact}`} />}
    </main>

  )
}
