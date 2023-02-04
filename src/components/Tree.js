import { Container, Sprite } from '@pixi/react'

import T1MB2LR from '../images/roots/T1MB2LR.png'

export const Tree = () => {
    const screenWidth = 1024
    const screenHeight = 768
    const rootPos = [(screenWidth/2) - 32, (screenHeight/2) + 32]
    return (
        <Container position={[0, 0]}>
            <Sprite image={T1MB2LR} position={rootPos}/>
        </Container>
    )
}