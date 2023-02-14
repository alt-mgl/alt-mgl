const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
        args[0].title = '阿六敦蒙古语工具站 · Алтан Монгол Хэрэгсэл Сайт · ᠠᠯᠲᠠᠨ ᠮᠣᠩᠭᠣᠯ ᠬᠡᠷᠡᠭᠰᠡᠯ ᠰᠠᠶᠢᠲᠤ';
        return args;
    });
  },
  runtimeCompiler: true,
  publicPath: '.',
})
