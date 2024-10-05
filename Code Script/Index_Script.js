// script.js
new Vue({
    el: '#app',
    data: {
        siteName: 'PathWay',
        profileInfo: {
            paragraph1: 'Discover the beauty of the world through our collection of interesting images and content. PathWay is the place where you can explore and share the most beautiful moments from various corners of the world.',
            paragraph2: 'PathWay is here to provide an extraordinary visual experience. With a curated collection of images carefully, we strive to bring the beauty of the world directly to your screen. Make every special moment with PathWay!'
        },
        featuredContent: [
            { id: 1, title: 'Love', category: 'Comedy'},
            { id: 2, title: 'Badass', category: 'Action'},
            { id: 3, title: 'Cool', category: 'Outlook'}
        ],
        featuredImages: [
            { id: 1, src: 'suzume fond ecran.jpg', alt: 'Featured Image 1' },
            { id: 2, src: 'download (6).jpg', alt: 'Featured Image 2' },
            { id: 3, src: 'Rue nuis.jpg', alt: 'Featured Image 3' }
        ],
        testimonials: [
            { id: 1, comment: 'PathWay is my go-to place for finding stunning images. Love the variety and quality!' },
            { id: 2, comment: 'The curated collection here is amazing. It\'s like traveling the world through images.' },
            { id: 3, comment: 'Easy to navigate and a visual treat. PathWay has become a part of my daily routine.' }
        ],
        email: ''
    },
    methods: {
        subscribe: function () {
            // Logic for subscribing to the newsletter
            console.log('Subscribed with email:', this.email);
        }
    }
});


