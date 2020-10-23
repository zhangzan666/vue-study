module.export = {
  chainWebpack:config=> {
    config.module
      .test(/\.vue$/)
      .use('vue-loader')
      .options({
        compilerOptions: {
          isCustomElement: tag=> tag === 'custom-button'
        }
      })
  }
}