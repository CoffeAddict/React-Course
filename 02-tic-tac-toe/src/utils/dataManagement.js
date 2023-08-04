function saveBoardOnStorage (newBoard) {
  localStorage.setItem('ttt-board', JSON.stringify(newBoard))
}

function getBoardFromStorage () {
  const localData = localStorage.getItem('ttt-board')
  return JSON.parse(localData) || null
}

function saveTurnOnStorage (newBoard) {
  localStorage.setItem('ttt-turn', JSON.stringify(newBoard))
}

function getTurnFromStorage () {
  const localData = localStorage.getItem('ttt-turn')
  return JSON.parse(localData) || null
}

function saveWinnerOnStorage (winner) {
  localStorage.setItem('ttt-winner', JSON.stringify(winner))
}

function getWinnerFromStorage () {
  const localData = localStorage.getItem('ttt-winner')
  return JSON.parse(localData) || null
}

function clearStorage () {
  localStorage.removeItem('ttt-board')
  localStorage.removeItem('ttt-turn')
  localStorage.removeItem('ttt-winner')
}

export { saveBoardOnStorage, getBoardFromStorage, saveTurnOnStorage, getTurnFromStorage, saveWinnerOnStorage, getWinnerFromStorage, clearStorage }
