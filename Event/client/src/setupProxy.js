const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/addsugg',
    createProxyMiddleware({
      target: 'http://localhost:3002/',
      changeOrigin: true,
    })
  );

  app.use(
    '/api/getdatas',
    createProxyMiddleware({
      target: 'http://localhost:3002/',
      changeOrigin: true,
    }));
    app.use(
      '/admin',
      createProxyMiddleware({
        target: 'http://localhost:3002/',
        changeOrigin: true,
      }));
      app.use(
        '/api/contact',
        createProxyMiddleware({
          target: 'http://localhost:3002/',
          changeOrigin: true,
        }));
        app.use(
          '/login',
          createProxyMiddleware({
            target: 'http://localhost:3002/',
            changeOrigin: true,
          }));
          app.use(
            '/signup',
            createProxyMiddleware({
              target: 'http://localhost:3002/',
              changeOrigin: true,
            }));

  app.use(
    '/register',
    createProxyMiddleware({
      target: 'http://localhost:3002/',
      changeOrigin: true,
    })

  );
  app.use(
    '/getdata',
    createProxyMiddleware({
      target: 'http://localhost:3002/',
      changeOrigin: true,
    }));
};