import { useState } from 'react'
import { Container, Sprite } from "@pixi/react"

import { T1MB2LR } from './Roots'
import { screenDimensions } from '../config/config'

export const RootSystem = ({roots = []}) => {
    

    return (
        <Container>
            {roots.map((root) => (
                <Sprite image={root.root.image} position={root.position}/>
            ))}
        </Container>
    )
}