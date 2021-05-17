import { Field, Images, MousePosition, Position, Score } from "./types"

export const WIDTH = 500
export const HEIGHT = 500

const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomWindow = (windows: Position[]): Position => {
    return windows[Math.floor(Math.random() * windows.length)]
}

// basic field generation with 1 window per row
export const genField = (rows: number = 10, columns: number = 10): Field => {
    const windows = Array.from({ length: rows }, (_, row) => ({ row, column: randomInt(0, columns-1) }))
    const cat = randomWindow(windows)
    return {
        rows,
        columns,
        windows,
        cat
    }
}

export const playerHitCat = (player: MousePosition, field: Field): boolean => {
    const tileHeight = HEIGHT / field.rows
    const tileWidth = WIDTH / field.columns

    const minX = field.cat.column * tileWidth
    const maxX = (field.cat.column + 1) * tileWidth
    const minY = field.cat.row * tileHeight
    const maxY = (field.cat.row + 1) * tileHeight

    return player.clientX >= minX && player.clientX <= maxX && player.clientY >= minY && player.clientY <= maxY
}

export const render = (canvas: HTMLCanvasElement, span: HTMLSpanElement) => ([images, cross, field, score]: [Images, MousePosition, Field, Score]) => {
    const context = canvas.getContext('2d')
    context?.clearRect(0, 0, canvas.width, canvas.height)

    const tileHeight = HEIGHT / field.rows
    const tileWidth = WIDTH / field.columns

    for (let row = 0; row < field.rows; row++) {
        for (let col = 0; col < field.columns; col++) {
            if (field.cat.row === row && field.cat.column === col) {
                context?.drawImage(images.cat, col * tileWidth, row * tileHeight, tileWidth, tileHeight)
            } else if (!field.windows.some((w) => w.row === row && w.column === col)) {
                context?.drawImage(images.wall, col * tileWidth, row * tileHeight, tileWidth, tileHeight)
            } else {
                context?.drawImage(images.window, col * tileWidth, row * tileHeight, tileWidth, tileHeight)
            }
        }
    }

    context?.drawImage(images.cross, Math.floor(cross.clientX - tileWidth/2), Math.floor(cross.clientY - tileHeight/2), tileWidth, tileHeight)

    span.textContent = String(score)
}
