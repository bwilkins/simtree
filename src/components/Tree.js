import { RootSystem } from './RootSystem'

export const Tree = () => {
    const screenWidth = 1024
    const screenHeight = 768
    const rootPos = [(screenWidth/2) - 32, (screenHeight/2) + 32]

    return (
        <RootSystem />
    )
}