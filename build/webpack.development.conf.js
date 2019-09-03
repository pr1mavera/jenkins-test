module.exports = {
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 配置导入 vue 模块的时候为 compiler 模式
        }
    },
    devServer: {
        host: 'localhost',
        port: '3000',
        open: true
    }
};
