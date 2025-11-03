const forwardUrl = "http://host.docker.internal:8080";
const wsForwardUrl = "ws://host.docker.internal:8080";
const ruleNodeUiforwardUrl = forwardUrl;

const PROXY_CONFIG = {
  "/api": {
    "target": forwardUrl,
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug"
  },
  "/static/rulenode": {
    "target": ruleNodeUiforwardUrl,
    "secure": false,
    "changeOrigin": true
  },
  "/static/widgets": {
    "target": forwardUrl,
    "secure": false,
    "changeOrigin": true
  },
  "/oauth2": {
    "target": forwardUrl,
    "secure": false,
    "changeOrigin": true
  },
  "/login/oauth2": {
    "target": forwardUrl,
    "secure": false,
    "changeOrigin": true
  },
  "/api/ws": {
    "target": wsForwardUrl,
    "ws": true,
    "secure": false
  },
};

module.exports = PROXY_CONFIG;
