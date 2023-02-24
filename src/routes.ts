const routes = require('next-routes')();

routes.add('home', '/');
routes.add('about', '/about');
routes.add('post', '/post/:id');

module.exports = routes;
