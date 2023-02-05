import './index.css';
import reportWebVitals from './reportWebVitals';
import * as PIXI from 'pixijs'
import { PixiApp } from './containers/PixiApp';
import { Game } from './containers/Game'

window.PIXI = PIXI
window.PixiApp = PixiApp

// Create the application helper and add its render target to the page
document.body.appendChild(PixiApp.view);

Game(PixiApp)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
