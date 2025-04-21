import { preventDefault } from "../preventDefalt.js"


export function unblockScroll() {
    window.removeEventListener('wheel', preventDefault)
    window.removeEventListener('touchmove', preventDefault)
}