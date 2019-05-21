# mustache-loader

This webpack loader is used to render the template at building time. It is usefull when you want to inject some data, and the data never change after build. 

## usage

react.mst
```typescript
import React from 'react'
import { render } from 'react-dom'

function App() {
    return (
        <div>
            <h1>{{title}}</h1>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    render(<App />, document.getElementById('app'))
})
```

webpack.config.js

```javascript
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
```