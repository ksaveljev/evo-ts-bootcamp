import { Observable, combineLatest, forkJoin, from, fromEvent, interval } from "rxjs"
import { map, scan, share, startWith, tap } from "rxjs/operators"
import { HEIGHT, WIDTH, render, playerHitCat, randomWindow, genField } from "./game"
import { Field, Images, MousePosition, Score } from "./types"

const canvas: HTMLCanvasElement = document.createElement("canvas")
canvas.width = WIDTH
canvas.height = HEIGHT
document.body.appendChild(canvas)

const p: HTMLParagraphElement = document.createElement("p")
p.textContent = "Score: "
const span: HTMLSpanElement = document.createElement("span")
p.appendChild(span)
document.body.appendChild(p)

const loadImage = (path: string) => new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image()
    img.src = path
    img.onload = () => resolve(img)
    img.onerror = (err) => {
        reject(err)
    }
})

const images$: Observable<Images> = forkJoin(
    {
        cat: from(loadImage("images/cat.svg")),
        wall: from(loadImage("images/wall.svg")),
        window: from(loadImage("images/window.svg")),
        cross: from(loadImage("images/cross.svg"))
    }
)

const cross$: Observable<MousePosition> = fromEvent<MouseEvent>(canvas, "mousemove")
    .pipe(
        startWith({ clientX: 0, clientY: 0 }),
        map(({ clientX, clientY }) => ({ clientX, clientY }))
    )

const player$: Observable<MousePosition> = fromEvent<MouseEvent>(canvas, "click")
    .pipe(
        startWith({ clientX: -1, clientY: -1 }),
        map(({ clientX, clientY }) => ({ clientX, clientY }))
    )

const field$: Observable<Field> = interval(1000)
    .pipe(
        scan((field, _) => ({
            ...field,
            cat: randomWindow(field.windows)
        }), genField()),
        share()
    )


const score$: Observable<Score> = combineLatest([player$, field$])
    .pipe(
        map(([player, field]) => playerHitCat(player, field) ? 1 : 0),
        scan((acc, v) => acc + v, 0),
        share()
    )

const game$ = combineLatest([images$, cross$, field$, score$])
    .pipe(
        tap(render(canvas, span))
    )

game$.subscribe()
