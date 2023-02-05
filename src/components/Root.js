import { randomSelect } from '../randomSelect'

export class Root {
    #texture
    #growsLeft = []
    #growsRight = []
    #growsDown = []
    constructor({texture, growsLeft = [], growsRight = [], growsDown = []}) {
        this.#texture = texture
        this.#growsLeft = growsLeft
        this.#growsRight = growsRight
        this.#growsDown = growsDown
    }

    get texture() {
        return this.#texture
    }

    get canGrowLeft() {
        return this.#growsLeft.length > 0
    }

    get canGrowRight() {
        return this.#growsRight.length > 0
    }
    
    get canGrowDown() {
        return this.#growsDown.length > 0
    }

    growLeft() {
        const nextRoot = randomSelect(this.#growsLeft)
        this.#growsLeft = []
        return nextRoot
    }
    growRight() {
        const nextRoot = randomSelect(this.#growsRight)
        this.#growsRight = []
        return nextRoot
    }

    growDown() {
        const nextRoot = randomSelect(this.#growsDown)
        this.#growsDown = []
        return nextRoot
    }
}

