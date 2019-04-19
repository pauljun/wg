const webpack = require('webpack')
const library = '[name]'
const path = require('path')

module.exports = {
    entry: {
        vendors: [
            'react', 
            'lodash', 
            'axios', 
            'mobx', 
            'mobx-react', 
            'moment', 
            'react-dom', 
            'react-intl-universal', 
            'antd'
        ]
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./public'),
        library
    },

    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            path: path.join(__dirname, '../public/[name]-manifest.json'),
            name: library
        }),
    ],
}