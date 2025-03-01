const proxyServer = {
  '/api': {
    target: 'http://localhost:3000',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, '')
  }
  // 字符串简写写法
  // '/foo': 'http://localhost:4567',
  // 选项写法
  // '/api': {
  //   target: 'http://jsonplaceholder.typicode.com',
  //   changeOrigin: true,
  //   rewrite: (path) => path.replace(/^\/api/, '')
  // },
  // 正则表达式写法
  // '^/fallback/.*': {
  //   target: 'http://jsonplaceholder.typicode.com',
  //   changeOrigin: true,
  //   rewrite: (path) => path.replace(/^\/fallback/, '')
  // },
  // 使用 proxy 实例
  // '/api': {
  //   target: 'http://jsonplaceholder.typicode.com',
  //   changeOrigin: true,
  //   configure: (proxy, options) => {
  //     // proxy 是 'http-proxy' 的实例
  //   }
  // },
  // Proxying websockets or socket.io
  // '/socket.io': {
  //   target: 'ws://localhost:3000',
  //   ws: true
  // }
}

export { proxyServer }
