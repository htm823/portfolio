'use strict';

const hamburger = document.getElementById('hamburger-menu');
const menu = document.getElementById('hamburger-items');

hamburger.addEventListener('click', () => {
	menu.classList.toggle('is-open');

	const expanded = hamburger.getAttribute('aria-expanded') === 'true';
	hamburger.setAttribute('aria-expanded', !expanded);
});