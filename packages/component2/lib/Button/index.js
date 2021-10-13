'use strict';

var elementPlus = require('element-plus');
var vue = require('vue');

var script = vue.defineComponent({
  name: "XbButton",
  props: {
    a: {}
  },
  components: {
    ElButton: elementPlus.ElButton
  },
  data() {
    return {
      arr: [1, 2, 3]
    };
  }
});

const _hoisted_1 = { class: "xb-button" };
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("h1", { class: "xb-button-test" }, "This is Button", -1);
const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("h1", { class: "xb-button-test2" }, "This is Button", -1);
const _hoisted_4 = /* @__PURE__ */ vue.createTextVNode("adsa");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = vue.resolveComponent("el-button");
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    _hoisted_3,
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.arr, (item, index) => {
      return vue.openBlock(), vue.createElementBlock("div", { key: index }, vue.toDisplayString(item), 1);
    }), 128)),
    vue.createVNode(_component_el_button, null, {
      default: vue.withCtx(() => [
        _hoisted_4
      ]),
      _: 1
    })
  ]);
}

script.render = render;
script.__file = "src/packages/Button/button.vue";

script.install = (app) => {
  app.component(script.name, script);
};
const _Button = script;

// module.exports = _Button;
const ElAutocomplete = _Button;

exports.ElAutocomplete = ElAutocomplete;
exports['default'] = _Button;