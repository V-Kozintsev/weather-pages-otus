import { sum } from './sum.js';
import './index.css';

document.querySelector('.app').innerHTML = `<h1>helloOO world</h1><h2>${sum(
  5,
  2,
)}</h2>`;
