if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            const registration = await navigator.serviceWorker.register('index.sw.js');
            console.log('Service Worker registration successful');
            console.log(`Registered with Scope: ${registration.scope}`);
        } catch(e) {
            console.log('Service Worker registration failed');
            console.log(e);
        }
    })
}