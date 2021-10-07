const title = process.env.VUE_APP_TITLE;

module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '^/api': {
        target: 'http://localhost:9000',
        ws: true,
        changeOrigin: true
      }
    }
  },

  lintOnSave: 'error',

  pages: {
    index: {
      entry: 'src/main.ts',
      title: title
    }
  },

  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {}
  },

  css: {
    sourceMap: true
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-loader')
        .loader('vue-loader')
        .end()
      .use('vue-svg-loader')
        .loader('vue-svg-loader')
        .end()
  }
};
