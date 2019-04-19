const service = "http://192.168.2.237:18088";

module.exports = {
    "/business": {
        target: service,
        changeOrigin: true
    },
    "/common": {
        target: service,
        changeOrigin: true
    },
    "/client": {
        target: service,
        changeOrigin: true
    },
    "/basic": {
        target: service,
        changeOrigin: true
    },
    "/analyze": {
        target: service,
        changeOrigin: true
    },
    "/app": {
        target: service,
        changeOrigin: true
    },
    "/pusher": {
        target: service,
        changeOrigin: true
    },
    "/map": {
        target: service,
        changeOrigin: true
    },
    "/websocket": {
        target: service.replace("http", "ws"),
        ws: true,
        changeOrigin: true
    }
}