import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: { directory: join(__dirname, "public/") },
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html", favicon: "./public/favicon.ico" }),
    new ReactRefreshPlugin(),
  ],
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpe?g|ico|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

export default config;
