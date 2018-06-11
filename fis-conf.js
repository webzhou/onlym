// // 启用插件
// fis.hook('relative');

// // 让所有文件，都使用相对路径。
// fis.match('**', {
//   relative: true
// })

// fis.match('::package', {
//     spriter: fis.plugin('csssprites-group')
// });
// fis.config.set('settings.spriter.csssprites-group', {
//     //图片缩放比例 
//     scale: 1,
//     //1rem像素值 
//     rem: 100,
//     //图之间的边距 
//     margin: 10,
//     //使用矩阵排列方式，默认为线性`linear` 
//     layout: 'matrix',
//     //合并图片存到/images/ 
//     to: '/images'
// });

// fis.match('*.css', {
//   // 给匹配到的文件分配属性 `useSprite`
//   useSprite: true
// });
// // 清除其他配置，只保留如下配置
// fis.match('*.js', {
//   // fis-optimizer-uglify-js 插件进行压缩，已内置
//   optimizer: fis.plugin('uglify-js')
// });

// fis.match('*.css', {
//   // fis-optimizer-clean-css 插件进行压缩，已内置
//   optimizer: fis.plugin('clean-css')
// });
// fis.match('::package', {  
//   postpackager: fis.plugin('loader', {
//     sourceMap: true, //是否生成依赖map文件
//     useInlineMap: true //是否将sourcemap作为内嵌脚本输出
//   })
// });
