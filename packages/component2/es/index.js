import XbButton from './Button';
export { default as XbButton } from './Button';
import XbRadio from './Radio';
export { default as XbRadio } from './Radio';

const components = {
  XbButton,
  XbRadio
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

export { index as default };
