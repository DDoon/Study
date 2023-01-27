const path = require('path')
const CracoAlias = require('craco-alias')
module.exports = {
  webpack: {
    entry: 'src/assets/icons/index.ts',
    module: {
      rules: [
        {
          test: /\.svg$/,
          type: 'asset/resource',
          use: [
            {
              loader: 'svg-inline-loader',
            },
          ],
        },
      ],
    },
    alias: {
      src: path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      images: path.resolve(__dirname, 'src/assets/images'),
      styles: path.resolve(__dirname, 'src/styles.scss'),
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
}
