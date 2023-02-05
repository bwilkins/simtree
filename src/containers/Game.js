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
    const [rootState, growRoots] = useReducer((prevState, action) => {
        let nextRoot;
        let nextPosition;
        const lastRoot = prevState[prevState.length-1];
        if (lastRoot.root.canGrowLeft) {
            nextRoot = lastRoot.root.growLeft()
            nextPosition = [ lastRoot.position[0] - 64, lastRoot.position[1] ]
        } else if (lastRoot.root.canGrowRight) {
            nextRoot = lastRoot.root.growRight()
            nextPosition = [ lastRoot.position[0] + 64, lastRoot.position[1] ]
        } else {
            nextRoot = lastRoot.root.growDown()
            nextPosition = [ lastRoot.position[0], lastRoot.position[1] + 64 ]
        }
        return [
            ...prevState,
            { root: nextRoot, position: nextPosition }
        ]
    }, [rootRoot])
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