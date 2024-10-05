// script.js
new Vue({
    el: '#app',
    data: {
        siteName: 'PathWay',
        galleryImages: [
            { src: 'download (1).jpg', alt: 'Image 1' },
            { src: 'download (7).jpg', alt: 'Image 2' },
            { src: 'download (3).jpg', alt: 'Image 3' },
            { src: 'Claude Monet at Giverny -- A Garden and Studio for the Ultimate Impressionist.jpg', alt: 'Image 4' },
            { src: 'download (4).jpg', alt: 'Image 5' },
            { src: '90s Touge.jpg', alt: 'Image 6' },
            { src: 'tyler.jpg', alt: 'Image 7' },
            { src: 'download (5).jpg', alt: 'Image 8' },
            { src: '@fatefulove.jpg', alt: 'Image 9' }
            // Tambahkan lebih banyak gambar jika diperlukan
        ],
        commentData: {
            name: '',
            message: ''
        }
    },
    methods: {
        submitComment: function () {
            // Proses pengiriman komentar (gunakan AJAX atau kirim ke endpoint yang sesuai)
            console.log('Comment submitted with data:', this.commentData);
        }
    }
});
