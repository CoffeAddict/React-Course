export function GetFactButton({newFact}) {
	const handleClick = () => {
		fetch('https://catfact.ninja/fact')
			.then(resp => resp.json())
			.then(data => newFact(data))
	}

  return (
    <>
      <button onClick={handleClick}>Get Fact</button>
    </>
  )
}
