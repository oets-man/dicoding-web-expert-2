import css from './style.css';

class LoadSpinner extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
		this.render();
	}

	render() {
		this.shadow.innerHTML = `
			<style>${css}</style>
			<div class="loader"></div> 
		`;
	}
}
customElements.define('load-spinner', LoadSpinner);
