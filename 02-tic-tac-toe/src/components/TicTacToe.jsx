import { useState } from "react"
import { Square } from './Square'
import confetti from 'canvas-confetti'

const turns = ['x', 'o']

const winnerCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

export function TicTacToe () {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(turns[0])
    const [winner, setWinner] = useState(null) //  is game running, false is tie

    function updateBoard (index) {
        if (board[index] || winner != null) return

        let newBoard = [...board]
        newBoard[index] = turn

        setBoard(newBoard)
        setTurn(turn == turns[0] ? turns[1] : turns[0])

        saveOnStorage(newBoard)
        checkBoard(newBoard)
    }

    function checkBoard (newBoard) {
        winnerCombos.every(combo => {
            if (!newBoard[combo[0]] || !newBoard[combo[1]] || !newBoard[combo[2]]) return true
            if (newBoard[combo[0]] == newBoard[combo[1]] && newBoard[combo[0]] == newBoard[combo[2]]) {
                setWinner(turn)
                confetti()
                return false
            }
            return true
        })

        const boardValue = newBoard.indexOf(null)
        if (boardValue == -1) setWinner(false)
    }

    function resetGame () {
        setWinner(null)
        setTurn(turns[0])
        setBoard(Array(9).fill(null))
    }

    function formatWinner (w) {return w == turns[0] ? '❌' : '🔵'}

    function saveOnStorage (newBoard) {
        localStorage.setItem('ttt-data', JSON.stringify(newBoard))
    }

    function getFromStorage () {
        const localData = localStorage.getItem('ttt-data')
        if (localData) setBoard(JSON.parse(localData))
    }

    return (
        <>
            <header className={`winner-${winner}`}>
                <h1>Tic Tac Toe</h1>
            </header>

            { winner &&
                <section className="ttt-result">
                    <span>Winner {formatWinner(winner)}!</span>
                    <button onClick={resetGame}>Reset Game</button>
                </section>
            }
            { winner == false &&
                <section className="ttt-result">
                    <span>Tie!</span>
                    <button onClick={resetGame}>Reset Game</button>
                </section>
            }

            <section className="ttt-game">
                {
                    board.map((_, index) => {
                        return (
                            <Square
                                key={index}
                                index={index}
                                value={board[index]}
                                updateBoard={updateBoard}/>
                        )
                    })
                }
            </section>
            <section className="ttt-current-turn">
                <h2>Turn</h2>
                <Square value={turn}/>
            </section>
        </>
    )
}