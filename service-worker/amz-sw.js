self.addEventListener('install', event => {
    console.info(`[ServiceWorker] ${event.type}!`);
});

const regexReviewsPage = /\/reviews\/([0-9]+)$/;

self.addEventListener('fetch', event => {
    const [, page] = event.request.url.match(regexReviewsPage) || [];
    if (page) {
        event.respondWith(
            fetch(event.request).catch(err => {
                console.warn(`[ServiceWorker] reviews/${page}:`, err);

                return getFallbackReviews().then(reviews => {
                    const body = JSON.stringify(reviews[page - 1]);
                    return new Response(body, {
                        status: 200,
                        statusText: 'OK',
                        headers: { 'Content-Type': 'application/json' }
                    });
                });
            })
        );
    }
});

let reviews;

function getFallbackReviews() {
    if (reviews) {
        return Promise.resolve(reviews);
    }

    return fetch('./reviews.json')
        .then(response => response.json())
        .then(data => {
            reviews = data;
            return reviews;
        });
}
