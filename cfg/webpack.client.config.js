const path = require('path')
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV
const IS_DEV = NODE_ENV === 'development'
const IS_PROD = NODE_ENV === 'production'
const DEV_PLUGINS = [new CleanWebpackPlugin(), new HotModuleReplacementPlugin()]
const COMMON_PLUGINS = [
  new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` }),
]

function setupDevtool() {
  if (IS_PROD) return false
  return 'eval'
}

function setupEntry() {
  if (IS_PROD) return [path.resolve(__dirname, '../src/client/index.tsx')]
  return [
    path.resolve(__dirname, '../src/client/index.tsx'),
    'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',
  ]
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
    },
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: setupEntry(),
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js',
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader'],
      },
    ],
  },
  devtool: setupDevtool(),
  plugins: IS_DEV ? [...DEV_PLUGINS, ...COMMON_PLUGINS] : COMMON_PLUGINS,
  optimization: {
    minimize: IS_PROD,
    minimizer: [new TerserPlugin()],
  },
}
