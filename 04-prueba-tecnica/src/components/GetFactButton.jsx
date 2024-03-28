import { useEffect } from "react"

export function GetFactButton({newFact}) {
  const CAT_FACT_API = "https://catfact.ninja/fact"

	const handleClick = () => {
		fetch(CAT_FACT_API)
			.then(resp => resp.json())
			.then(data => newFact(data))
      .catch(error => console.error(error))
	}

  useEffect(() => {
    handleClick()
  }, [])

  return (
    <>
      <button onClick={handleClick}>Get Fact</button>
    </>
  )
}
