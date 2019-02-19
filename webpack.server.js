const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = (env, argv) => {
    env = env || {};
    const development =
      argv.mode === 'development' || env.NODE_ENV === 'development';

    return {
        entry: path.join(__dirname, 'src/index.js'),
        target: 'node',
        node: {
            __filename: true,
            __dirname: true,
        },
        externals: [nodeExternals()],
        mode: development ? 'development' : 'production',
        output: {
            libraryTarget: 'commonjs',
            path: path.join(__dirname, 'build'),
            filename: '[name].js',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.(graphql|gql)$/,
                    exclude: /node_modules/,
                    loader: 'graphql-tag/loader',
                },
                {
                    test: /\.js$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    [
                                        '@babel/env',
                                        {
                                            targets: { node: '8.10' },
                                        },
                                    ],
                                ],
                                plugins: ['@babel/plugin-proposal-object-rest-spread'],
                            },
                        },
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [
            new webpack.ProvidePlugin({
                _: path.join(__dirname, `src/lib/lodash.js`),
                logger: path.join(__dirname, `src/lib/logger.js`),
            }),
            new webpack.DefinePlugin({
                __DEV__: development,
                __TEST__: false,
            }),
            new NodemonPlugin(),
        ],
    };
};
