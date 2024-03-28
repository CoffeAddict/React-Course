import { useEffect, useState } from "react"

export function ShowCatImage({newFact}) {
  const [getCatImage, setCatImage] = useState(null)
  const CAT_IMAGE_API = 'https://cataas.com/cat/says'

  useEffect(() => {
    if (newFact.fact == null) return

    const wordsArray = newFact.fact.trim().split(' ')
    const firstThreeWord = `${wordsArray[0]} ${wordsArray[1]} ${wordsArray[2]}`
    const queryParams = new URLSearchParams({
      width: 500,
      height: 300
    })

    setCatImage(`${CAT_IMAGE_API}/${firstThreeWord}?${queryParams}`)
  }, [newFact])

  return (
    <>
      <img src={getCatImage} alt={newFact.fact}/>
    </>
  )
}
