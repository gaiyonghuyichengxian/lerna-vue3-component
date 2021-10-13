module.exports = {
  outputDir: process.env.TYPE === 'lib' ? 'lib' : 'dist',
  configureWebpack: config => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: require.resolve('./loader/markdown-loader')
          }
        ]
      }
    )
  }
}
