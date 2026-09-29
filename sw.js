self.addEventListener('install',event=>{self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{try{const keys=await caches.keys();await Promise.all(keys.map(k=>caches.delete(k)));}finally{await self.registration.unregister();const clients=await self.clients.matchAll({type:'window'});clients.forEach(c=>c.postMessage({type:'TRUCKWAY_SW_REMOVED'}));}})());});
self.addEventListener('fetch',event=>{});
