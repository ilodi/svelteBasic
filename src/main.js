import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'David',
		lastName: 'LODI'
	}
});

export default app;