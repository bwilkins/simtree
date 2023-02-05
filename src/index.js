import './index.css';
import reportWebVitals from './reportWebVitals';
import { PixiApp } from './containers/PixiApp';


// Create the application helper and add its render target to the page
document.body.appendChild(PixiApp.view);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
