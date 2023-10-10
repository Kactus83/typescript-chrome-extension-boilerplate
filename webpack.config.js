const path = require('path');

module.exports = {
    entry: {
        'src/background/index': './src/background/index.ts',
        'src/UI/pop-up/index': './src/UI/pop-up/index.ts',
        'src/UI/dashboard/index': './src/UI/dashboard/index.ts',
        'src/content/index': './src/content/index.ts'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '.'),
    },
};
