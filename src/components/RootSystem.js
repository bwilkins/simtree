import { useState } from 'react'
import { Container, Sprite } from "@pixi/react"

import T1MB2LR from '../images/roots/T1MB2LR.png'
import T1MB1M from '../images/roots/T1MB1M.png'
import T1MR1M from '../images/roots/T1MR1M.png'

const availableRoots = [
    T1MB2LR,
    T1MB1M,
    T1MR1M
]

const rootRoot = {
    image: T1MB2LR,
    position: [ 1024/2 - 32, 768/2 + 32 + 1],
}

export const RootSystem = () => {
    const [growthRoots, setGrowthRoots] = useState([rootRoot])
    const [renderRoots, setRenderRoots] = useState([rootRoot])

    return (
        <Container>
            {renderRoots.map((root) => {
                <Sprite image={root.image} position={root.position}/>
            })}
        </Container>
    )
}