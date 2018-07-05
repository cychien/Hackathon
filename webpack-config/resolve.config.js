const path = require('path')
const srcPath = path.resolve(__dirname, '../src')

module.exports = {
  extensions: ['*', '.js', '.jsx', '.json'],
  modules: [
    srcPath,
    path.resolve(__dirname, '../node_modules')
  ],
  alias: {
    bootstrapCSS: 'bootstrap/dist/css/bootstrap.min.css',
    fontAwesome: '@fortawesome/fontawesome-free/js/all.js',
    appCSS: path.resolve(srcPath, 'lib/app.css')
  }
}
