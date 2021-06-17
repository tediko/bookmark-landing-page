let mix = require('laravel-mix');

// Compile modern JavaScript & Sass
mix.js('src/js/index.js', 'js')
    .react()
    .setPublicPath('dist');

// Disable success notifications
mix.disableSuccessNotifications();