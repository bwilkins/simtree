import { Container, Sprite } from '@pixi/react'

import T1MB2LR from '../images/roots/T1MB2LR.png'

export const Tree = () => (
    <Container>
        <Sprite image={T1MB2LR} position={[1024/2 -32, 768/2 - 32]}/>
    </Container>
)