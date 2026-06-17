// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://DoctorCocoBean.github.io',
	base: '/virtual-virgo',
	integrations: [
		starlight({
			title: 'Lil Bitty Things Guided Tour',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guided Tour',
					autogenerate: { directory: 'lessons' }, 
				},
			],
		}),
	],
});
