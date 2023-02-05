import { useState } from 'react'
import { Container, Sprite } from "@pixi/react"

import { screenDimensions } from '../config/config'


const availableRoots = [
    T1MB2LR,
    T1MB1M,
    T1MR1M
]

const rootRoot = {
    image: T1MB2LR,
    position: [ screenDimensions.width/2 - 32, screenDimensions.height/2 + 32 + 2],
}

export const RootSystem = () => {
    const [growthRoots, setGrowthRoots] = useState([rootRoot])
    const [renderRoots, setRenderRoots] = useState([rootRoot])

    return (
        <Container>
            {renderRoots.map((root) => (
                <Sprite image={root.image} position={root.position}/>
            ))}
        </Container>
    )
}