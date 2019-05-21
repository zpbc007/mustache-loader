import complier from '../complier'
import path from 'path'

describe('mustache loader should convert file', () => {
    it('should insert data', async () => {
        const data = {
            insertString: 'insertString',
            insertArray: JSON.stringify(['1', '2', '3']),
            insertObj: JSON.stringify({a: 1, b: 2})
        }
        const status = await complier({
            mode: 'development',
            entry: path.resolve(__dirname, './template.mst'),
            module: {
                rules: [{
                        test: /\.mst$/,
                        use: [
                            'babel-loader',
                            {
                                loader: path.resolve(__dirname, '../../index.js'),
                                options: { data }
                            }
                        ]
                }]
            }
        })

        expect(status.toJson().modules[0].source).toBe(`const InserString = "insertString";\nconst InserArray = ["1", "2", "3"];\nconst InserObject = {\n  "a": 1,\n  "b": 2\n};`)
    })
})