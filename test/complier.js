import webpack from 'webpack'
import memoryfs from 'memory-fs'

// {
//     entry: './index.js',
//     mode: 'development',
//     module: {
//         rules: [{
//             test: /\.js$/,
//             use: 'babel-loader',
//             exclude: /node_modules/
//         }, {
//             test: /\.mst$/,
//             use: [
//                 'babel-loader',
//                 {
//                     loader: resolve(__dirname, '../index.js'),
//                     options: {
//                         data,
//                     }
//                 }
//             ],
//         }]
//     }
// }

export default function(config) {
    const complier = webpack(config)

    complier.outputFileSystem = new memoryfs()

    return new Promise((resolve, reject) => {
        complier.run((err, status) => {
            if (err) {
                reject(err)
            }

            if (status.hasErrors()) {
                reject(new Error(status.toJson().errors))
            }

            resolve(status)
        })
    })
}