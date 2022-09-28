const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

/**
 * @type {import('tailwindcss').Config}
 */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			serif: [
				'Noto Serif SC',
				'ui-serif',
				'Georgia',
				'Cambria',
				"'Times New Roman'",
				'Times',
				'serif'
			]
		}
	},

	plugins: [forms(), typography()]
};

module.exports = config;
