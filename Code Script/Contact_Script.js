// script.js
new Vue({
    el: '#app',
    data: {
        siteName: 'PathWay',
        formData: {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        submitForm: function () {
            // Proses pengiriman formulir (gunakan AJAX atau kirim ke endpoint yang sesuai)
            console.log('Form submitted with data:', this.formData);
        }
    }
});
