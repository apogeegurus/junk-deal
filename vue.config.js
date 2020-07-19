// // vue.config.js
//
// const ImageminPlugin = require('imagemin-webpack-plugin').default;
// const ImageminMozJpeg = require('imagemin-mozjpeg');
//
// module.exports = {
//     configureWebpack: {
//         plugins: [
//             new ImageminPlugin({
//                 plugins: [
//                     ImageminMozJpeg({
//                         quality: 50,
//                         progressive: false
//                     })
//                 ],
//                 pngquant: {
//                     quality: '65-90',
//                     speed: 4
//                 },
//                 gifsicle: {
//                     interlaced: true,
//                     optimizationLevel: 3
//                 },
//                 svgo: {
//                     removeViewBox: false
//                 }
//             })
//         ]
//     }
// }