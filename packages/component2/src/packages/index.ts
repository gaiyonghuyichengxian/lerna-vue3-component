import XbButton from './Button'
import XbRadio from './Radio'
import type { App } from 'vue'
// import MakeInstaller from './make-installer'

export {
  XbButton,
  XbRadio
}

const components: any = {
  XbButton,
  XbRadio
}

// const files = require.context('.', true, /\.vue$/)
// files.keys().forEach(key => {
//   components[key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))] = files(key).default
// })

// const install = function(Vue: any): void {
//   Object.keys(components).forEach(key => {
//     const component = components[key]
//     Vue.component(component.name, component)
//   })
// }

// export default {
//   install,
//   ...components
// }

const makeInstaller = (components: any) => {
  const apps: App[] = []
  console.log('apps', apps)

  const install = (app: App, opts: any) => {
    // 默认参数
    const defaultInstallOpt: any = {
      zIndex: 2000
    }

    const option = Object.assign(defaultInstallOpt, opts)
    console.log('ddd')
    if (apps.includes(app)) return
    apps.push(app)

    Object.keys(components).forEach(key => {
      // components.forEach((c: any) => {
      console.log('key', key)
      app.use(components[key])
    })
    // if (option.locale) {
    //   const localeProvides = localeProviderMaker(opts.locale)
    //   app.provide(LocaleInjectionKey, localeProvides)
    // }

    app.config.globalProperties.$ELEMENT = option
    // app.provide() ? is this better? I think its not that flexible but worth implement
    // setConfig(option)
  }

  console.log('install', install)
  return {
    install
  }
}

// const install = (app: App, opts: any) => {
//   // 默认参数
//   const defaultInstallOpt: any = {
//     zIndex: 2000
//   }

//   const option = Object.assign(defaultInstallOpt, opts)
//   console.log('ddd')
//   // if (apps.includes(app)) return
//   // apps.push(app)
//   Object.keys(components).forEach(key => {
//   // components.forEach((c: any) => {
//     console.log('key', key)
//     app.use(components[key])
//   })

//   // if (option.locale) {
//   //   const localeProvides = localeProviderMaker(opts.locale)
//   //   app.provide(LocaleInjectionKey, localeProvides)
//   // }

//   app.config.globalProperties.$ELEMENT = option
//   // app.provide() ? is this better? I think its not that flexible but worth implement
//   // setConfig(option)
// }

// makeInstaller(components)

export default {
  install: makeInstaller(components).install,
  ...components
}
