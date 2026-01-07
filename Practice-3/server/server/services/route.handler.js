'use strict';

const rm = require('../services/require.module');

class routeHandler {
  constructor(options = {}) {
    this.request = options.request;
  }

  parse(route) {
    try {
      const parsedUrl = route.url.split('/');
      const controller = parsedUrl[2];
      const ControllerHandler = require('../main/controllers/' + controller);
      const method = ControllerHandler[parsedUrl[3]] ? parsedUrl[3] : route.method.toLowerCase();
      const routeAction = ControllerHandler[method];
      const options = { request: this.request };
      if (this.request.params[0]) {
        this.request.params[0] = this.request.params[0].split('/')[1];
      }
      if (routeAction) {
        options.status = true;
        options.controller = ControllerHandler;
        options.method = method;
        const requestHandler = new (rm.requesthandler)(options);
        return requestHandler;
      } else {
        const errorMsg = { error: { message: 'URL NOT FOUND' }, status: 404 };
        throw errorMsg;
      }
    } catch (error) {
      return error;
    }
  }
}
module.exports = routeHandler;
