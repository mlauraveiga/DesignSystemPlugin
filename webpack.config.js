module.exports = {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
      new ts-loader({
        transpileOnly: true,
        declaration: true,
        allowJs: true,
        target: 'es5',
        ignoreGlobalTsConflicts: true
      })
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ['ts-loader'],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name].[ext]'
              }
            }
          ]
        }
      ]
    }
  };