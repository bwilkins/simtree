export class Root {
    #image
    #growsLeft = []
    #growsRight = []
    #growsDown = []
    constructor({image, growsLeft = [], growsRight = [], growsDown = []}) {
        this.#image = image
        this.#growsLeft = growsLeft
        this.#growsRight = growsRight
        this.#growsDown = growsDown
    }

    get image() {
        return this.#image
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
        const nextRoot = this.#growsLeft[Math.floor(Math.random() * this.#growsLeft.length)]
        this.#growsLeft = []
        return nextRoot
    }
    growRight() {
        const nextRoot = this.#growsRight[Math.floor(Math.random() * this.#growsRight.length)]
        this.#growsRight = []
        return nextRoot
    }

    growDown() {
        const nextRoot = this.#growsDown[Math.floor(Math.random() * this.#growsDown.length)]
        this.#growsDown = []
        return nextRoot
    }
}

