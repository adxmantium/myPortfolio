var path = require('path');
var visualizer = require('webpack-visualizer-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "./public/Me_bundle.js",
        sourceMapFilename: "./public/Me_bundle.map"
    },
    devtool: '#source-map',
    plugins: [
        new visualizer(),
    ],
    module: {
        loaders: [
            // jsx compiler - jsx to js
            {
                loader: 'babel',
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },

            // sass loader/sourcemapping - sass to css
            {
                test: /\.scss$/,
                loaders: [ 
                    'style', 
                    'css', 
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded' 
                ] //adding sourcemapping to css/sass loaders
            },

            // less loader - less to css
            {
                test: /\.less$/,
                loader: "css-loader!less-loader"
            },
            
            // img loader/optimization
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=8192',
                    'img'
                ]
            },
        ]
    },
    sassLoader: {
        includePaths: ['client/style'], //makes calling styles not relative
    },
    resolve: {
        root: path.resolve('.'),
        extenstions: ['', '.js']
    }
}