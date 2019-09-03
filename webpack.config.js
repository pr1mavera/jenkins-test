const path = require('path');
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process.env.NODE_ENV;
const config = require(`./build/webpack.${env}.conf.js`);
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = merge({
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'script/[name]-[hash:5].js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    postcss: [
                        require('postcss-cssnext')()
                    ],
                    loaders: {
                        postcss: [
                            'vue-style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    // 开启 CSS Modules
                                    modules: {
                                        localIdentName: '[name]_[local]-[hash:5]'
                                    }
                                }
                            },
                            'postcss-loader'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // 开启 CSS Modules
                            modules: {
                                localIdentName: '[name]_[local]-[hash:5]'
                            }
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new VueLoaderPlugin()
    ]
}, config);