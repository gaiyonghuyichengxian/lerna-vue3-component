import Radio from './radio.vue'

import type { App, Plugin } from 'vue'
type SFCWithInstall<T> = T & Plugin

Radio.install = (app: App): void => {
  app.component(Radio.name, Radio)
}

const _Radio = Radio as SFCWithInstall<typeof Radio>

export default _Radio
