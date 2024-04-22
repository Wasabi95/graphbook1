import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __dirname = path.resolve();

const buildDirectory = 'dist';
const outputDirectory = `${buildDirectory}/client`;

export default {
    mode: 'production',
    entry: './src/client/index.js',
    output: {
        path: path.join(__dirname, outputDirectory),
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
                use: [
                    { loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, buildDirectory)]
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        })
    ]
};
