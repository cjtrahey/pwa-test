importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.NetworkFirst() //For something that does change often (i.e. data)
    //new workbox.strategies.CacheFirst() For something that does not change often (an image)
);