import { useEffect, useState } from 'react'
import { Square } from './Square'
import { WinnerModal } from './WinnerModal'
import { turns, winnerCombos } from '../utils/const'
import { clearStorage, getBoardFromStorage, getTurnFromStorage, getWinnerFromStorage, saveBoardOnStorage, saveTurnOnStorage, saveWinnerOnStorage } from '../utils/dataManagement'
import confetti from 'canvas-confetti'

export function TicTacToe () {
  const [board, setBoard] = useState(() => {
    return getBoardFromStorage() || Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    return getTurnFromStorage() || turns[0]
  })

  const [winner, setWinner] = useState(() => {
    return getWinnerFromStorage() || null
  })

  function updateBoard (index) {
    if (board[index] || winner != null) return

    const newBoard = [...board]
    newBoard[index] = turn

    const newTurn = turn == turns[0] ? turns[1] : turns[0]

    setBoard(newBoard)
    setTurn(newTurn)

    saveBoardOnStorage(newBoard)
    saveTurnOnStorage(newTurn)
    checkBoard(newBoard)
  }

  function checkBoard (newBoard) {
    winnerCombos.every(combo => {
      if (!newBoard[combo[0]] || !newBoard[combo[1]] || !newBoard[combo[2]]) return true
      if (newBoard[combo[0]] == newBoard[combo[1]] && newBoard[combo[0]] == newBoard[combo[2]]) {
        setWinner(winner || turn)
        if (!winner) saveWinnerOnStorage(turn)
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
    clearStorage()
  }

  function resetEventHandle () {
    resetGame()
  }

  useEffect(() => {
    checkBoard(board)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <header className={`winner-${winner}`}>
        <h1>Tic Tac Toe</h1>
      </header>
      <section className='ttt-game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                value={board[index]}
                updateBoard={updateBoard}
              />
            )
          })
        }
      </section>
      <section className='ttt-current-turn'>
        <h2>Turn</h2>
        <Square value={turn} />
      </section>
      {winner &&
        <WinnerModal
          turns={turns}
          winner={winner}
          resetEventHandle={resetEventHandle}
        />
      }
    </>
  )
}
