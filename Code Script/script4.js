// script.js
new Vue({
    el: '#app',
    data: {
        siteName: 'Jerseycustom',
        searchQuery: '',
        searchResults: []
    },
    methods: {
        searchContent: function () {
            // Gantilah dengan logika pencarian sesuai kebutuhan Anda
            // Contoh sederhana, menampilkan hasil pencarian sesuai input
            this.searchResults = [];
        }
    }
});
