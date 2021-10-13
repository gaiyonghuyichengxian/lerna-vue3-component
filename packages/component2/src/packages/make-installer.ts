import type { App, Plugin } from 'vue'

const makeInstaller = (components: Plugin[] = []) => {
  const apps: App[] = []

  const install = (app: App, opts: any) => {
    // 默认参数
    const defaultInstallOpt: any = {
      zIndex: 2000
    }

    const option = Object.assign(defaultInstallOpt, opts)
    if (apps.includes(app)) return
    apps.push(app)

    components.forEach((c) => {
      app.use(c)
    })

    // if (option.locale) {
    //   const localeProvides = localeProviderMaker(opts.locale)
    //   app.provide(LocaleInjectionKey, localeProvides)
    // }

    app.config.globalProperties.$ELEMENT = option
    // app.provide() ? is this better? I think its not that flexible but worth implement
    // setConfig(option)
  }

  return {
    install
  }
}

export default makeInstaller
