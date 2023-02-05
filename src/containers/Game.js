import { useReducer } from 'react'
import { Stage, Container } from '@pixi/react'

import { Background } from '../components/Background'
import { Tree } from '../components/Tree'
import { T1MB2LR } from '../components/Roots'
import { screenDimensions } from '../config/config'
import { Menu } from './Menu'


const rootRoot = {
    root: T1MB2LR,
    position: [ screenDimensions.width/2 - 32, screenDimensions.height/2 + 32 + 2],
}

export const Game = () => {
    const [rootState, growRoots] = useReducer(() => {}, [rootRoot])
    return (
        <Stage width={1024} height={768}>
            <Container position={[0, 0]} width={1024} height={768}>
                <Background/>
            </Container>

            <Container position={[0, 0]} width={1024} height={768}>
                <Tree roots={rootState}/>    
            </Container>

            <Container position={[screenDimensions.width - 192, 0]}>
                <Menu growClick={growRoots}/>
            </Container>
        </Stage>
    )
}