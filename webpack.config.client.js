const path =require('path');
const CURRENT_WORKING_DIR=process.cwd();
const webpack =require('webpack');

module.exports={
  
    name:"browser",
    mode:"development",
    devtool:"eval-source-map",


    entry: [
          'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.join(CURRENT_WORKING_DIR, 'client/index.js')
  ],

    output: {
      path: path.join(CURRENT_WORKING_DIR , '/dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
          },

    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
                'babel-loader'
            ]
        },
                {test: /\.css$/,use: ['style-loader','css-loader']}
              //   {
              //     test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
              //     use: 'file-loader'
              // }
            ]
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
  //     devtool: 'cheap-module-eval-source-map', // this helps to browser to point to the exact file in the console, helps in debug
      
  //     devServer: {
  //                 contentBase: path.join(__dirname, 'public'),
  //                 historyApiFallback: true // this prevents the default browser full page refresh on form submission and link change
  //  }
}