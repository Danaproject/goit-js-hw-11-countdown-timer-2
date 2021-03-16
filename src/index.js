import './styles.css';
import CountdownTimer from './countdownTimer';

const pauseRef = document.querySelector('.pause');
const resumeRef = document.querySelector('.resume');

const countdownTimer = new CountdownTimer('.timer', 100000);
countdownTimer.init();

pauseRef.addEventListener('click', () => countdownTimer.pause());
resumeRef.addEventListener('click', () => countdownTimer.resume());