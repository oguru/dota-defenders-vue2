module.exports = {
    chainWebpack: config => {
        config.resolve.alias.set('vue', '@vue/compat')

        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                return {
                    ...options,
                    compilerOptions: {
                        compatConfig: {
                            MODE: 3
                        }
                    }
                }
            })
    },
    configureWebpack: {
        devtool: 'source-map'
    },
    transpileDependencies: ['vuetify'],
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' }
            }
        }
    }
}
