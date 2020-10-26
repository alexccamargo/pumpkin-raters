module.exports = {
  devServer: {
    proxy: {
      '^/graphql': {
        target: 'http://localhost:4000/graphql',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  pluginOptions: {
    apollo: {
      lintGQL: true,
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
};
