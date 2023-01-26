import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import { drawer } from './drawer';
import  main  from './main';

document.addEventListener('DOMContentLoaded', () => {
	drawer();
	main();
});
