import { ElButton } from 'element-plus';
import { defineComponent, resolveComponent, openBlock, createElementBlock, createVNode, withCtx, createElementVNode, createTextVNode } from 'vue';

var script = defineComponent({
  name: "XbRadio",
  props: {
    a: {}
  },
  components: {
    ElButton
  }
});

const _hoisted_1 = /* @__PURE__ */ createElementVNode("h1", { class: "xb-button" }, "This is Radio", -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode("adsa");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElButton = resolveComponent("ElButton");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_ElButton, null, {
      default: withCtx(() => [
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

export { _Radio as default };
