import { Stage, Container } from '@pixi/react'

import { Background } from '../components/Background'
import { Tree } from '../components/Tree'
import { screenDimensions } from '../config/config'
import { Menu } from './Menu'

export const Game = () => (
    <Stage width={1024} height={768}>
        <Container position={[0, 0]} width={1024} height={768}>
            <Background/>
        </Container>

        <Container position={[0, 0]} width={1024} height={768}>
            <Tree/>    
        </Container>

        <Container position={[screenDimensions.width - 192, 0]}>
            <Menu/>
        </Container>
    </Stage>
)