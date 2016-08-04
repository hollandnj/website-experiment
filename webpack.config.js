module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
                {
                 loader: "babel-loader",
                 test: /\.jsx?$/,
                 query:{ presets: ['es2015', 'react']}
                },
                {
                 loader: "style!css", 
                 test: /\.css$/
                }
        ]
    }
};
