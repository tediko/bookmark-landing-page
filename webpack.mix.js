let mix = require('laravel-mix');

// Compile modern JavaScript & Sass
mix.js('src/js/index.js', 'js')
    .react()
    .sass('src/sass/main.scss', 'css').options({
        processCssUrls: false
    })
    .setPublicPath('dist');

// Disable success notifications
mix.disableSuccessNotifications();