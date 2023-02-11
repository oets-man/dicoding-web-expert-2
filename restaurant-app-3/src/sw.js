// import 'regenerator-runtime'; // cukup di index.js

import CacheHelper from './scripts/pwa/cache-helper';

// Daftar asset yang akan dicaching
const assetsToCache = [
	'./',
	'./icons/maskable_icon.png',
	'./icons/maskable_icon_x48.png',
	'./icons/maskable_icon_x72.png',
	'./icons/maskable_icon_x96.png',
	'./icons/maskable_icon_x128.png',
	'./icons/maskable_icon_x144.png',
	'./icons/maskable_icon_x192.png',
	'./icons/maskable_icon_x384.png',
	'./icons/maskable_icon_x512.png',
	'./images/hero.jpg',
	'./index.html',
	'./favicon.ico',
	'./app.bundle.js',
	'./sw.bundle.js',
	'./app.webmanifest',
];

self.addEventListener('install', (event) => {
	event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
	console.log('Installing Service Worker ...');
});

self.addEventListener('activate', (event) => {
	event.waitUntil(CacheHelper.deleteOldCache());
	console.log('Activating Service Worker ...');
});

self.addEventListener('fetch', (event) => {
	//   console.log(event.request);

	event.respondWith(CacheHelper.revalidateCache(event.request));
	// TODO: Add/get fetch request to/from caches
});
