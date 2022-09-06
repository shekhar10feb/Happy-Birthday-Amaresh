const happyBirth = "happy-birth-site-v1";

const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/index.html",
    "/css/intro.css"
];

// Call install Event 
self.addEventListener("install", installEvent => {

    // Wait until promise is finished 
    installEvent.waitUntil(
        caches
        .open(happyBirth)
        .then(cache => {
            cache.addAll(assets)
        })
        .then(()=> self.skipWaiting())
    );
});

// Call activate Event 
self.addEventListener('activate', activateEvent => {

    // Remove unwanted cached assets 
    activateEvent.waitUntil(
        caches
        .keys()
        .then(staticMontyTeas => {
            return Promise.all(
                staticMontyTeas.map(cache => {
                    if(cache !== happyBirth) {
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
});

// Call fetch Event 
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        
        fetch(fetchEvent.request)
           .catch(() => {
            caches.match(fetchEvent.request);
        })
    )
});
