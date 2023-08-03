const icons = {
    x: '❌',
    o: '🔵'
}

export function Square ({value, updateBoard, index}) {
    let turn = icons[value] || null

    function handleClick () {
        updateBoard(index)
    }

    return (
        <div className="square" onClick={handleClick}>{turn}</div>
    )
}