import { WebGLRenderer } from "three"
import Scene from "./scenes/Scene"


export default class Renderer extends WebGLRenderer {
    constructor() {
        super({ antialias: true, canvas: document.getElementById("canvas") })
        this.config()
        new Scene(this)
    }

    private config() {
        this.setSize(window.innerWidth, window.innerHeight)
        window.addEventListener("resize", this.onResize.bind(this))
    }

    private onResize() {
        window.location.reload()
    }
}