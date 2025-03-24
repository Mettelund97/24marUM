'use strict'
exports.config = {
    app_name: ['newrelictest'],
    license_key: 'eu01xx25ef227df2b8484aec0fa94013FFFFNRAL',
    distributed_tracing: {
        enabled: true
    },
    logging: {
        level: 'info'
    },
    allow_all_headers: true,
    attributes: {
        exclude: [
            'request.headers.cookie',
            'request.headers.authorization',
            'request.headers.proxyAuthorization',
            'request.headers.setCookie*',
            'request.headers.x*',
            'response.headers.cookie',
            'response.headers.authorization',
            'response.headers.proxyAuthorization',
            'response.headers.setCookie*',
            'response.headers.x*'
        ]
    }
}
