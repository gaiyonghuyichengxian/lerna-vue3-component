import Button from './button.vue'

import type { App, Plugin } from 'vue'
type SFCWithInstall<T> = T & Plugin

Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

const _Button = Button as SFCWithInstall<typeof Button>

export default _Button
