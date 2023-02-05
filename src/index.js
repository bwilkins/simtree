import './index.css';
import reportWebVitals from './reportWebVitals';
import * as PIXI from 'pixijs'
import { PixiApp } from './containers/PixiApp';
import './images'
import { Game } from './containers/Game'

window.PIXI = PIXI
window.PixiApp = PixiApp

// Create the application helper and add its render target to the page
document.body.appendChild(PixiApp.view);

await PIXI.Assets.backgroundLoad(['background', 'T1MB1M', 'T1MR1M', 'T1ML1M', 'T1MB2LR', 'T2LRB1M', 'L1MB1M', 'R1MB1M', 'growButton'])

await Game(PixiApp)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
