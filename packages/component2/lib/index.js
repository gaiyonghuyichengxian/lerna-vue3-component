'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var XbButton = require('./Button');
var XbRadio = require('./Radio');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var XbButton__default = /*#__PURE__*/_interopDefaultLegacy(XbButton);
var XbRadio__default = /*#__PURE__*/_interopDefaultLegacy(XbRadio);

const components = {
  XbButton: XbButton__default['default'],
  XbRadio: XbRadio__default['default']
};
const makeInstaller = (components2) => {
  const apps = [];
  console.log("apps", apps);
  const install = (app, opts) => {
    const defaultInstallOpt = {
      zIndex: 2e3
    };
    const option = Object.assign(defaultInstallOpt, opts);
    console.log("ddd");
    if (apps.includes(app))
      return;
    apps.push(app);
    Object.keys(components2).forEach((key) => {
      console.log("key", key);
      app.use(components2[key]);
    });
    app.config.globalProperties.$ELEMENT = option;
  };
  console.log("install", install);
  return {
    install
  };
};
var index = {
  install: makeInstaller(components).install,
  ...components
};

Object.defineProperty(exports, 'XbButton', {
  enumerable: true,
  get: function () {
    return XbButton__default['default'];
  }
});
Object.defineProperty(exports, 'XbRadio', {
  enumerable: true,
  get: function () {
    return XbRadio__default['default'];
  }
});
exports['default'] = index;
