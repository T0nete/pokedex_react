export function NextPreviousPokemon ({ startEnd, setStartEnd }) {
  function updateStartEnd (next) {
    // if (next) setStartEnd(prevState => [prevState[0] + 20, prevState[1] + 20])
    // else setStartEnd(prevState => [prevState[0] - 20, prevState[1] - 20])
  }

  return (
        <footer>
            <button onClick={updateStartEnd(true)}>Previous</button>
            <button onClick={updateStartEnd(false)}>Next</button>
        </footer>
  )
}
