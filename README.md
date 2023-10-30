# Deta-CORS-Anywhere

Simple CORS Proxy in Deta.

Deta Discovery: <https://deta.space/discovery/@pillowwork-deta/corsanywhere>

Example:

```
https://detaproxy-xxxx.deta.app/https://raw.githubusercontent.com/Rob--W/cors-anywhere/master/README.md
```

For more documents, visit <https://www.npmjs.com/package/cors-anywhere>.


## Configuration

Now you can set `CORS_PROXY_OPTIONS` env variable in Deta Settings UI, in order to customize your proxy.

Check its declaration in Spacefile:

```yaml
- name: CORS_PROXY_OPTIONS
  description: Options to send to createServer() in JSON, as described in https://www.npmjs.com/package/cors-anywhere#server.
  default: '{"originWhitelist":[],"removeHeaders":["cookie","cookie2"]}'
```
