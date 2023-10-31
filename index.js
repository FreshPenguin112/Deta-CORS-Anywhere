import cors_proxy from 'cors-anywhere'

// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || '0.0.0.0'
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8080

if (!process.env.CORS_PROXY_OPTIONS) {
    process.env.CORS_PROXY_OPTIONS = JSON.stringify({
        originWhitelist: [],
        removeHeaders: ['cookie', 'cookie2'],
    })
}

const corsProxyOptions = JSON.parse(process.env.CORS_PROXY_OPTIONS)

cors_proxy.createServer(corsProxyOptions).listen(port, host, function () {
    console.log('Running CORS Anywhere on ' + host + ':' + port)
})
