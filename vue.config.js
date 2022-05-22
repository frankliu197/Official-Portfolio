module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/Official-Portfolio/" : "/",
    transpileDependencies: [
        'vuetify'
    ],

    pluginOptions: {
        i18n: {
            locale: 'es',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: true,
            includeLocales: false,
            enableBridge: true
        }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Olakunle";
                return args;
            })
    }
}