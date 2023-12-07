import { 
    DirectionalLight,
    HemisphereLight,
    AmbientLight
} from "three"


export default class Ligth {
    constructor(scene) {
        scene.add(new AmbientLight(0xffffff,1.5))
        scene.add(new HemisphereLight(0xffffff, 1.5))
    }
}