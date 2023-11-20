import cors_proxy from 'cors-anywhere';
cors_proxy.createServer({}).listen(8080, "0.0.0.0", ()=>{
    console.log('Running CORS Anywhere');
});
