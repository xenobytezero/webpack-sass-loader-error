const path = require('path');

// ------------

const NodeSassImportOnce = require('node-sass-import-once');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        'pages/index': ['./sass/page/index.scss'],
        'pages/single': ['./sass/page/single.scss']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].build.js'
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[id].css"
        })
    ],

    devtool: 'source-map',

    module: {
        rules: [  
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                        
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                            //importer: NodeSassImportOnce
                        }
                    }
                ]
                  
            }
        ]
    },


}