import { Sprite } from '@pixi/react'
import GrowButton_image from '../images/button-grow.png'

export const GrowButton = ({onClick}) =>
    <Sprite image={GrowButton_image} interactive={true} onClick={onClick} />