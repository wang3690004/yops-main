const webpack = require("webpack");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
    // devtool: "source-map",
  },

  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
    config.resolve.alias.set("@", resolve("src"));
  },
  devServer: {
    port: 8091,
    open: true,
    proxy: {
      "/webapp": {
        target: "https://meetings.pre.onyealink.com/webapp/",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/webapp": "",
        },
      },
      "/api/v1": {
        target: "http://10.120.28.47:9999",
        changeOrigin: true, //地址可以是域名 也可以是ip地址 如果是域名需要添加一个changeorigin:true参数   .
        //http://10.70.1.18:9998    庄迪ip
        // http://10.120.28.127
        // 10.120.28.47:9999 王少兵
      },
    },
  },
};
