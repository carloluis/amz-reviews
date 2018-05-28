if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./amz-sw.js')
            .then(registration => {
                console.info('ServiceWorker registration successful with scope:', registration.scope);
            })
            .catch(err => {
                console.info('ServiceWorker registration failed:', err);
            });
    });
}
