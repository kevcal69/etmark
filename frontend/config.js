'use strict'
const path = require('path')

module.exports = {
    dev: {
        output: {
            path: path.resolve(__dirname, '../vue-template/'),
            assetPublicPath: '/static/'
        },
        devtool: 'cheap-module-eval-source-map',
    }
}
