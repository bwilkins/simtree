import { Container, Sprite } from "pixijs"

import { Roots } from '../components/Roots'
import { screenDimensions } from "../config/config"
import { randomSelect } from "../randomSelect"

export const rootSystemContainer = new Container()

class RootSystemClass {
    #roots = []
    constructor() {
        const firstRoot = randomSelect(Object.values(Roots))
        this.#addRoot(firstRoot, [ screenDimensions.width/2 - 32, screenDimensions.height/2 + 32 + 2])
    }

    #addRoot(root, position) {
        this.#roots.push({ root: root, position: position })
        const newRootSprite = new Sprite(root.texture)
        newRootSprite.position = position

        rootSystemContainer.addChild(newRootSprite)
    }

    growRoots() {
        console.log("growRoots called!")
        let nextRoot;
        let nextPosition;
        const lastRoot = this.#roots[this.#roots-1];
        if (lastRoot.root.canGrowLeft) {
            nextRoot = lastRoot.root.growLeft()
            nextPosition = [ lastRoot.position[0] - 64, lastRoot.position[1] ]
        } else if (lastRoot.root.canGrowRight) {
            nextRoot = lastRoot.root.growRight()
            nextPosition = [ lastRoot.position[0] + 64, lastRoot.position[1] ]
        } else {
            nextRoot = lastRoot.root.growDown()
            nextPosition = [ lastRoot.position[0], lastRoot.position[1] + 64 ]
        }

        this.#addRoot(nextRoot, nextPosition)
        console.log("growRoots finished")
    }
}

export const RootSystem = new RootSystemClass()