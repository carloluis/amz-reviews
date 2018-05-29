const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    sw: path.join(__dirname, '../service-worker')
};

module.exports = {
    context: __dirname,
    entry: {
        app: ['../src/sw', '../src']
    },
    output: {
        path: PATHS.dist,
        chunkFilename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../node_modules/html-webpack-template/index.ejs',
            title: 'Reviews Demo',
            appMountIds: ['app'],
            inject: false,
            meta: [
                { name: 'description', content: 'product reviews demo' },
                { name: 'keywords', content: 'react,redux,infinite-scroll,demo' },
                { name: 'robots', content: 'nofollow' }
            ],
            minify: {
                collapseWhitespace: true,
                conservativeCollapse: true,
                preserveLineBreaks: true,
                useShortDoctype: true,
                html5: true
            },
            mobile: true
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(PATHS.sw, 'reviews.json'),
                to: path.join(PATHS.dist, 'reviews.json')
            },
            {
                from: path.join(PATHS.sw, 'amz-sw.js'),
                to: path.join(PATHS.dist, 'amz-sw.js')
            }
        ])
    ]
};
