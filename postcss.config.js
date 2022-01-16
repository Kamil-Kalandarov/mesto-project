// подключение плагинов в файл
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [ // подключение плагина к PostCSS
    autoprefixer, // подключите плагина autoprefixer
    cssnano({ preset: 'default' })  // cssnano при подключении нужно передать объект опций { preset: default } говорит о том, что нужно использоватьстандартные настройки минификации
  ]
}; 