const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist')
};

module.exports = {
    context: __dirname,
    entry: {
        app: '../src'
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
        })
    ]
};
