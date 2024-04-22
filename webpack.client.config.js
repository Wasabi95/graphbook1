import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const buildDirectory = 'dist';
const outputDirectory = path.resolve(__dirname, `${buildDirectory}/client`);

export default {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        path: outputDirectory,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] // Use style-loader and css-loader for handling CSS files
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 5050,
        open: true
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [outputDirectory]
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};

