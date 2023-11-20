import cors_proxy from 'cors-anywhere';
cors_proxy.createServer({
  setHeaders: {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "Authorization"
  },
  httpProxyOptions: {
    xfwd: false,
    changeOrigin: true
  }
}).listen(8080, "0.0.0.0", () => {
  console.log('Running CORS Anywhere');
});
