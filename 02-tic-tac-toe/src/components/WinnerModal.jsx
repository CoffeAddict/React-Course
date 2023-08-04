export function WinnerModal ({winner, resetEventHandle, turns}) {
    function formatWinner (w) {return w == turns[0] ? '❌' : '🔵'}

    return (
        <>
            { winner &&
                <section className="ttt-result">
                    <span>Winner {formatWinner(winner)}!</span>
                    <button onClick={resetEventHandle}>Reset Game</button>
                </section>
            }
            { winner == false &&
                <section className="ttt-result">
                    <span>Tie!</span>
                    <button onClick={resetEventHandle}>Reset Game</button>
                </section>
            }
        </>
    )
}