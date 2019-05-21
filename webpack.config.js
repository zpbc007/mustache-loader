const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './test/react/react.mst'),
    module: {
        rules: [{
                test: /\.mst$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: path.resolve(__dirname, './index.js'),
                        options: {
                            data: {
                                title: 'hello world'
                            }
                        },
                    }
                ],
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ]
}