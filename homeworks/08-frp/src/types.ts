export type Score = number

export type Position = {
    row: number
    column: number
};

export type Field = {
    rows: number
    columns: number
    windows: Position[]
    cat: Position
}

export type MousePosition = {
    clientX: number
    clientY: number
}

export type Images = {
    cat: HTMLImageElement
    cross: HTMLImageElement
    wall: HTMLImageElement
    window: HTMLImageElement
}
