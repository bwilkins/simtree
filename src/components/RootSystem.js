import { useState } from 'react'
import { Container, Sprite } from "@pixi/react"

import { T1MB2LR } from './Roots'
import { screenDimensions } from '../config/config'


const availableRoots = [

]

const rootRoot = {
    image: T1MB2LR.image,
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