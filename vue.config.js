// vue.config.js

const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozJpeg = require('imagemin-mozjpeg');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const paths = [
    { path: '/', lastmod: new Date().toISOString().slice(0,10), priority: '0.8', changefreq: 'hourly' },
    { path: '/contact', lastmod: new Date().toISOString().slice(0,10), priority: '0.8', changefreq: 'hourly' },
    { path: '/blogs', lastmod: new Date().toISOString().slice(0,10), priority: '0.8', changefreq: 'hourly'},
    { path: '/services', lastmod: new Date().toISOString().slice(0,10), priority: '0.8', changefreq: 'hourly'},
    { path: '/thank-you', lastmod: new Date().toISOString().slice(0,10), priority: '0.8', changefreq: 'hourly'},
    { path: '/locations', lastmod: new Date().toISOString().slice(0,10), priority: '0.8', changefreq: 'hourly'},
    { path: '/about-us', lastmod: new Date().toISOString().slice(0,10), priority: '0.8', changefreq: 'hourly'},
];

module.exports = {
    configureWebpack: {
        plugins: [
            new SitemapPlugin('https://junkdeal.com', paths, {
                filename: 'sitemap.xml',
                lastmod: true,
                changefreq: 'hourly',
                priority: '0.8'
            }),
            new ImageminPlugin({
                plugins: [
                    ImageminMozJpeg({
                        quality: 50,
                        progressive: false
                    })
                ],
                pngquant: {
                    quality: '65-90',
                    speed: 4
                },
                gifsicle: {
                    interlaced: true,
                    optimizationLevel: 3
                },
                svgo: {
                    removeViewBox: false
                }
            })
        ]
    }
}