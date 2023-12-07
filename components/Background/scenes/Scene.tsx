import { Scene as SceneThree } from "three"
import Camera from "../classes/Camera"
import Ligth from '../classes/Ligth'
import Skybox from "../classes/Skybox"
import Loader from '../classes/Loader'
import Logo from '../classes/pokemon/Logo'


export default class Scene extends SceneThree {
    private camara: Camera

    constructor(renderer) {
        super()
        const loader = new Loader()
        this.camara = new Camera()
        new Ligth(this)
        new Skybox(this)
        new Logo(this, loader)
        this.update(renderer)
    }

    private update(renderer) {
        renderer.render(this, this.camara)
        requestAnimationFrame(this.update.bind(this, renderer))
    }
}