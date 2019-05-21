const { getOptions } = require('loader-utils')
const { render } = require('mustache')

module.exports = function(source) {
    const options = getOptions(this)
    if (!options.data) {
        this.emitError(new Error('mustache loader need data to render template!'))
    }

    return render(source, options.data)
}