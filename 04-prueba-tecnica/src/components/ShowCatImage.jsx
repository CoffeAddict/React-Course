import { useEffect, useState } from "react"

export function ShowCatImage({newFact}) {
  const [getCatImage, setCatImage] = useState(null)

  useEffect(() => {
    if (newFact.fact != null) {
      const firstWord = newFact.fact.trim().split(' ')[0]
      setCatImage(`https://cataas.com/cat/says/${firstWord}`)
    }
  }, [newFact])

  return (
    <>
      {newFact.fact != null && (<img src={getCatImage} alt={newFact.fact}/>)}
    </>
  )
}
