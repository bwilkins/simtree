import { Stage } from '@pixi/react'

import { Background } from '../components/Background'
import { Tree } from '../components/Tree'

export const Game = () => (
    <Stage width={1024} height={768}>
        <Container position={[0, 0]} width={1024} height={768}>
            <Background/>
        </Container>

        <Tree/>
    </Stage>
)