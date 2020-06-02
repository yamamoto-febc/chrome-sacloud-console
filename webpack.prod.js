/**
 * Copyright (c) 2020 The UsaCon Authors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        popup: './src/popup.tsx',
        content: './src/content.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: `${__dirname}/dist`,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".css"]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'public', to: './' }
            ],
        }),
    ],
};