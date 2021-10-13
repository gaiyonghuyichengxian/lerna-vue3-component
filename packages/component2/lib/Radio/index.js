'use strict';

var elementPlus = require('element-plus');
var vue = require('vue');

var script = vue.defineComponent({
  name: "XbRadio",
  props: {
    a: {}
  },
  components: {
    ElButton: elementPlus.ElButton
  }
});

const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("h1", { class: "xb-button" }, "This is Radio", -1);
const _hoisted_2 = /* @__PURE__ */ vue.createTextVNode("adsa");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElButton = vue.resolveComponent("ElButton");
  return vue.openBlock(), vue.createElementBlock("div", null, [
    _hoisted_1,
    vue.createVNode(_component_ElButton, null, {
      default: vue.withCtx(() => [
        _hoisted_2
      ]),
      _: 1
    })
  ]);
}

script.render = render;
script.__file = "src/packages/Radio/radio.vue";

script.install = (app) => {
  app.component(script.name, script);
};
const _Radio = script;

module.exports = _Radio;
