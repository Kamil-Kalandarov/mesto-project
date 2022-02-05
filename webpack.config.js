const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключили плагин для работы Webpack с HTML
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // плагин который будет каждый раз при сборке проекта удалять содержимое папки dist
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // подключили к проекту mini-css-extract-plugin

module.exports = { // module.exports — это синтаксис экспорта в Node.js 
  entry: { main: './src/scripts/components/index.js' }, // указываем первое место, куда заглянет webpack, — файл index.js в папке src 
  output: { // указываем в какой файл будет собираться весь js и дали ему имя 
    path: path.resolve(__dirname, 'dist'), // переписали точку выхода, используя утилиту path
    filename: 'main.js',
        publicPath: ''
  },
  mode: 'development', // добавили режим разработчика
  devServer: {
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    open: true // сайт будет открываться сам при запуске npm run dev
  },
  module: {
    rules: [ // rules — это массив правил; // добавим в него объект правил для бабеля
      {
        test: /\.js$/, // регулярное выражение, которое ищет все js файлы
        use: 'babel-loader', // при обработке этих файлов нужно использовать babel-loader
        exclude: '/node_modules/' // исключает папку node_modules, файлы в ней обрабатывать не нужно
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/, // регулярное выражение, которое ищет все файлы с такими расширениями
        type: 'asset/resource' // переносит эти файлы в папку dist в том же формате, что и остальные
      },
      {
        test: /\.css$/, // регулярное выражение, которое ищет все css файлы
        use: [MiniCssExtractPlugin.loader, { // при обработке этих файлов использовать MiniCssExtractPlugin.loader и css-loader
          loader: 'css-loader',
          options: { 
            importLoaders: 1 
          }
        },
      'postcss-loader' // добавили postcss-loader
        ] 
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // Подключённый в начале файла HtmlWebpackPlugin — это класс, с помощью которого можно конструировать объекты
      template: './src/index.html' // template - объект опций, путь к файлу index.html
    }),
    new CleanWebpackPlugin(), // использовали плагин
    new MiniCssExtractPlugin() // подключение плагина для объединения файлов css
  ]
};