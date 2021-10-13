import XbButton from './Button'
import XbRadio from './Radio'
import type { App } from 'vue'

export {
  XbButton,
  XbRadio
}

const components: any = {
  XbButton,
  XbRadio
}

const makeInstaller = (components: any) => {
  const install = (app: App, opts: any) => {
    Object.keys(components).forEach(key => {
      // components.forEach((c: any) => {
      console.log('key', key)
      app.use(components[key])
    })
  }

  return {
    install
  }
}

export default {
  install: makeInstaller(components).install,
  ...components
}
// export default components
