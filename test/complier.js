import webpack from 'webpack'
import memoryfs from 'memory-fs'

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